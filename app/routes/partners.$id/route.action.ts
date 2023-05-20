import { json } from "@remix-run/node";
import type { ActionFunction } from "react-router";

import { genql } from "~/graphql/genql-cli";
import type { en_payment_providers_enum } from "~/graphql/genql-sdk";

export type WithdrawPayload = {
  groupid: string;
  memberid: string;
  periodid: string;
  amount: string;
  phone: string;
  recipient: string;
  carrier: en_payment_providers_enum;
};

export const submitWithdrawAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const payload: WithdrawPayload = Object.fromEntries(form.entries()) as any;
  return genql.chain.mutation
    .insert_payment_one({
      object: {
        amount: Number(payload.amount),
        group_id: payload.groupid,
        member_id: payload.memberid,
        period_id: payload.periodid,
        transaction_status: "Pending",
        transaction_type: "MoneyOut",
        payment_currency: "USD",
        payment_provider_id: payload.carrier,
        dest_customer_name: payload.recipient,
        dest_customer_phone: payload.phone,
        customer_id: payload.phone,
      },
    })
    .get({ id: true })
    .then(() => json({ done: true }, { status: 200 }))
    .catch((err: any) =>
      json({ fatal: err.message ?? JSON.stringify(err) }, { status: 500 })
    );
};
