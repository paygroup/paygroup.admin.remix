import { Box, Flex } from "@chakra-ui/react";
import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";

import { PartnerInfo } from "./partner-info";
import { PartnerGrid } from "./partner.grid";
import { PartnerHeader } from "./partner.header.card";
import { fetchPartnerData } from "./route.services";

export const handle = {
  title: "view partner",
};

export const loader: LoaderFunction = async ({ params }) =>
  fetchPartnerData(params.id!);

export default function PartnerId() {
  const { partner, balance } =
    useLoaderData<Awaited<ReturnType<typeof fetchPartnerData>>>();

  return (
    <PartnerGrid>
      <Box gridArea="stats">
        <PartnerHeader partner={partner as partner} balance={balance} />
      </Box>

      <Flex mt="16" gridArea="main" flexDirection="column">
        <Outlet />
      </Flex>

      <Flex gridArea="info" flexDirection="column">
        <Card flex={1}>
          {partner ? <PartnerInfo partner={partner as partner} /> : null}
        </Card>
      </Flex>
    </PartnerGrid>
  );
}
