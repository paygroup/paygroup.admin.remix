import { everything } from "@genql/runtime";

import { genql } from "~/graphql/genql-cli";

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
