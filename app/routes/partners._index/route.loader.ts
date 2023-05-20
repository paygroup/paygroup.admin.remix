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

export type PartnerPagination = Awaited<ReturnType<typeof loadPartners>>;
export type PartnerItem = PartnerPagination["items"][0];
