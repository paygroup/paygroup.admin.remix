import { everything } from "@genql/runtime";

import { genql } from "~/graphql/genql-cli";
import type { partner } from "~/graphql/genql-sdk";

export const partnerLoader = async (partnerId: string) =>
  genql.chain.query
    .partner_by_pk({
      id: partnerId,
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
    .then((partner) => ({ partner: partner as partner }));

export type Partner = Awaited<ReturnType<typeof partnerLoader>>["partner"];
