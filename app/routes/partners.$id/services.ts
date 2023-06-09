import { everything } from "@genql/runtime";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { genql } from "~/graphql/genql-cli";
import type { partner_campaign } from "~/graphql/genql-sdk";

import { validateValues } from "./route.validation";

export const fetchOnePartner = async (id: string) =>
  genql.chain.query
    .partner_by_pk({
      id,
    })
    .get({
      ...everything,
      partner_campaigns: {
        ...everything,
        groups: {
          id: true,
          group_name: true,
          group_balance: true,
          members_aggregate: {
            aggregate: {
              count: true,
            },
          },
        },
      },
    })
    .then((partner) => ({ partner: partner! }));

export type Partner = Awaited<ReturnType<typeof fetchOnePartner>>["partner"];

export const routeAction: ActionFunction = async ({ params, request }) => {
  const form = await request.formData();
  const values = Object.fromEntries(form.entries());

  const parsed = validateValues(values as Partial<partner_campaign>);
  if (!parsed.success) {
    return json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  return genql.chain.mutation
    .insert_partner_campaign_one({
      object: {
        partner_id: params.id,
        ...parsed.data,
        contribution_amount: Number(parsed.data.contribution_amount),
      },
    })
    .get({ id: true })
    .then(() => json({ done: true }, { status: 200 }))
    .catch((error) => {
      console.log(error); // <-- SOS! log this error
      return json({ fatal: parseFatalError(error) }, { status: 500 });
    });
};

const parseFatalError = (error: unknown) => {
  const string = `${error}`;
  if (string.includes("Uniqueness violation")) {
    return "A campaign with this title already exists";
  }
  return "An unexpected error has occured";
};
