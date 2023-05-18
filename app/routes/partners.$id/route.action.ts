import type { ActionFunction } from "react-router";

import type { en_payment_providers_enum } from "~/graphql/genql-sdk";

type Payload = {
  groupid: string;
  memberid: string;
  periodid: string;
  amount: string;
  phone: string;
  carrier: en_payment_providers_enum;
};

export const submitWithdraw: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const values: Payload = Object.fromEntries(form.entries()) as any;
};
