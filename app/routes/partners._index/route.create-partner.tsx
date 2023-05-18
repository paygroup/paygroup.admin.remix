import { getAuth } from "@clerk/remix/ssr.server";
import { json } from "@remix-run/node";
import type { ActionFunction } from "react-router";
import { z } from "zod";

import { genql } from "~/graphql/genql-cli";
import type { partner } from "~/graphql/genql-sdk";

export const createPartnerAction: ActionFunction = async (args) => {
  const { request } = args;
  const { userId } = await getAuth(args as any);
  const form = await request.formData();
  const values: Partial<partner> = Object.fromEntries(form.entries());

  const parsed = schema.safeParse({
    ...values,
    partner_name: values.partner_name?.trim(),
    partner_address: values.partner_address?.trim(),
    partner_email: values.partner_email?.trim(),
    partner_phone: values.partner_phone?.trim(),
    partner_description: values.partner_description?.trim(),
  } as Partial<partner>);

  if (!parsed.success) {
    return json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const user = await genql.chain.query
    .user_profile({
      where: {
        clerk_id: {
          _eq: userId,
        },
      },
    })
    .get({
      user_id: true,
    })
    .then((res) => res?.[0]);

  if (!user) {
    return json({ fatal: "clerk user not found" }, { status: 404 });
  }

  return genql.chain.mutation
    .insert_partner_one({
      object: {
        ...parsed.data,
        partner_operators: {
          data: [
            {
              userid: user.user_id,
            },
          ],
        },
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
    return "A partner with this title already exists";
  }
  return "An unexpected error has occured";
};

const schema = z.object({
  partner_name: z.string().min(3),
  partner_phone: z.string().min(10),
  partner_email: z.string().email(),
  partner_address: z.string().min(3),
  partner_description: z.string().min(3),
});
