import { Box, Flex } from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";
import { PageView } from "~/modules/page-view";

import { PartnerGrid } from "./partner.grid";
import { PartnerHeader } from "./partner.header.card";
import { PartnerInfoTabsMain } from "./partner.info.tabs.main";
import { submitWithdrawAction } from "./route.action";
import { fetchPartnerData } from "./route.loader";

export const handle = {
  title: "view partner",
};

export const loader: LoaderFunction = async ({ params }) =>
  fetchPartnerData(params.id!);

export const action: ActionFunction = submitWithdrawAction;

export default function PartnerId() {
  const { partner } =
    useLoaderData<Awaited<ReturnType<typeof fetchPartnerData>>>();

  return (
    <PageView pageTitle={partner?.partner_name}>
      <PartnerGrid>
        <Box gridArea="stats">
          <PartnerHeader />
        </Box>

        <Flex mt="16" gridArea="main" flexDirection="column">
          <Outlet />
        </Flex>

        <Flex gridArea="info" flexDirection="column">
          <Card flex={1}>
            {partner ? (
              <PartnerInfoTabsMain partner={partner as partner} />
            ) : null}
          </Card>
        </Flex>
      </PartnerGrid>
    </PageView>
  );
}
