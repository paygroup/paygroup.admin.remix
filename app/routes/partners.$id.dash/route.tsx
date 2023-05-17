import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";

import { CampaignAddModal } from "./campaign.add";
import { PartnerInfo } from "./partner-info";
import { PartnerCampaignsCard } from "./partner.campaigns.card";
import { PartnerGrid } from "./partner.grid";
import { PartnerStatsCard } from "./partner.stats.card";
import type { Partner } from "./services";
import { routeAction, fetchOnePartner } from "./services";

export const handle = {
  title: "view partner",
};

export const loader: LoaderFunction = async ({ params }) =>
  fetchOnePartner(params.id!);

export const action: ActionFunction = routeAction;

export const ErrorBoundary = () => <div>Oups!...</div>;

export default function PartnerId() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { partner } = useLoaderData<{ partner: Partner }>();

  return (
    <PartnerGrid>
      <Box gridArea="stats">
        <PartnerStatsCard partner={partner as partner} />
      </Box>

      <Flex mt="16" gridArea="main" flexDirection="column">
        <PartnerCampaignsCard partner={partner as partner} onOpen={onOpen} />
      </Flex>

      <Flex gridArea="info" flexDirection="column">
        <Card flex={1}>
          {partner ? <PartnerInfo partner={partner as partner} /> : null}
        </Card>
      </Flex>

      <CampaignAddModal isOpen={isOpen} onClose={onClose} />
    </PartnerGrid>
  );
}
