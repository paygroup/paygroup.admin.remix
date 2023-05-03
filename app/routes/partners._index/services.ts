import { json } from "@remix-run/node";
import type { ActionFunction } from "react-router";
import { z } from "zod";

import { PAGE_SIZE } from "~/constants";
import { genql } from "~/graphql/genql-cli";

export const loadPartners = async (url: string) => {
  const _url = new URL(url);
  const page = Number(_url.searchParams.get("page") ?? 1);
  const limit = Number(_url.searchParams.get("limit") ?? PAGE_SIZE);
  const offset = !page ? 0 : limit * (page - 1);

  return genql
    .query({
      partner: [
        {
          offset,
          limit,
          order_by: [{ created_at: "desc" }],
        },
        {
          id: true,
          created_at: true,
          updated_at: true,
          partner_name: true,
          partner_phone: true,
        },
      ],
      partner_aggregate: {
        aggregate: {
          count: true,
        },
      },
    })
    .then(({ partner, partner_aggregate }) => ({
      page,
      recordCount: partner_aggregate?.aggregate?.count ?? 0,
      pageCount: Math.ceil(
        (partner_aggregate?.aggregate?.count ?? 0) / PAGE_SIZE
      ),
      items: partner.map((item, i) => ({ ...item, index: offset + i + 1 })),
    }));
};

export const routeAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const values = Object.fromEntries(form.entries());
  const parsed = schema.safeParse(values);

  if (!parsed.success) {
    return json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  return genql.chain.mutation
    .insert_partner_one({
      object: parsed.data,
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
    return "A partner with this title already exists";
  }
  return "An unexpected error has occured";
};

export type PartnerPagination = Awaited<ReturnType<typeof loadPartners>>;
export type PartnerItem = PartnerPagination["items"][0];

const schema = z.object({
  partner_name: z.string().min(3),
  partner_phone: z.string().min(10),
  partner_email: z.string().email(),
  partner_address: z.string().min(3),
  partner_description: z.string().min(3),
});
