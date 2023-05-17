import { Box, Flex } from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";

import { PartnerInfo } from "./partner-info";
import { PartnerGrid } from "./partner.grid";
import { PartnerStatsCard } from "./partner.stats.card";
import type { Partner } from "./services";
import { routeAction, fetchOnePartner } from "./services";

export const handle = {
  title: "view partner",
};

export const loader: LoaderFunction = async ({ params }) =>
  fetchOnePartner(params.id!);

export default function PartnerId() {
  const { partner } = useLoaderData<{ partner: Partner }>();

  return (
    <PartnerGrid>
      <Box gridArea="stats">
        <PartnerStatsCard partner={partner as partner} />
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
