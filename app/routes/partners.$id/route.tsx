import { Box, Flex } from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";
import { PageView } from "~/modules/page-view";

import { PartnerInfo } from "./partner-info";
import { PartnerGrid } from "./partner.grid";
import { PartnerHeader } from "./partner.header.card";
import { fetchPartnerData } from "./route.services";

export const handle = {
  title: "view partner",
};

export const loader: LoaderFunction = async ({ params }) =>
  fetchPartnerData(params.id!);

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const values = Object.fromEntries(form.entries());
  console.log("running action", values);
  return json({ message: "ok" });
};

export default function PartnerId() {
  const { partner, balance } =
    useLoaderData<Awaited<ReturnType<typeof fetchPartnerData>>>();

  return (
    <PageView pageTitle={partner?.partner_name}>
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
    </PageView>
  );
}
