import { createClient } from "../genql-sdk";

export const genql = createClient({
  url: process.env.PAYGROUP_GRAPHQL_URL,
  headers: {
    "X-Hasura-Admin-Secret": process.env.PAYGROUP_HASURA_ADMIN!,
    "X-Hasura-Role": "admin",
  },
});
