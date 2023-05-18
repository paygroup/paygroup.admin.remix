import { genql } from "~/graphql/genql-cli";

import { partnerLoader } from "../partners.$id._index/partner.loader";

export const fetchPartnerData = async (partnerId: string) =>
  Promise.all([partnerLoader(partnerId), fetchBalance(partnerId)]).then(
    ([data, balance]) => ({ partner: data.partner, balance })
  );

const fetchBalance = async (partnerId: string) =>
  genql.chain.query
    .partner_by_pk({
      id: partnerId,
    })
    .get({
      groups: {
        id: true,
        group_balance: true,
        members: {
          id: true,
          periods: [
            { limit: 1, order_by: [{ created_at: "desc" }] },
            { id: true },
          ],
        },
      },
      partner_operators: {
        id: true,
        user: {
          id: true,
          displayName: true,
        },
      },
    })
    .then(
      (res) =>
        res?.groups?.reduce((acc, curr) => acc + curr.group_balance, 0) ?? 0
    );
