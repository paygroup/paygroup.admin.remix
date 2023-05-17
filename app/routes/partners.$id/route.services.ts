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
        group_balance: true,
      },
    })
    .then(
      (res) =>
        res?.groups?.reduce((acc, curr) => acc + curr.group_balance, 0) ?? 0
    );
