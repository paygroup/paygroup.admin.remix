import { genql } from "~/graphql/genql-cli";

const pageLimit = 20;

export const loadPartners = async (url: string) => {
  const _url = new URL(url);
  const page = Number(_url.searchParams.get("page") ?? 1);
  const offset = !page ? 0 : pageLimit * (page - 1);

  return genql
    .query({
      partner: [
        {
          offset,
          limit: pageLimit,
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
      count: partner_aggregate?.aggregate?.count ?? 0,
      items: partner.map((item, i) => ({ ...item, index: offset + i + 1 })),
    }));
};

export type PartnerPagination = Awaited<ReturnType<typeof loadPartners>>;
export type Item = PartnerPagination["items"][0];
