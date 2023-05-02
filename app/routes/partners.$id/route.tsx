import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Text,
  Box,
  Flex,
  Grid,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";

import { CampaignAddModal } from "./campaign.add";
import { PartnerCampaigns } from "./partner-campaigns";
import { PartnerInfo } from "./partner-info";
import { routeAction } from "./route.action";
import type { Partner } from "./services";
import { fetchOnePartner } from "./services";
import { CampaignStats } from "./stats";

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
    <Grid
      px="4"
      flex={1}
      templateAreas="
        'stats info'
        'main   info'
      "
      rowGap={20}
      columnGap={8}
      templateColumns="1fr 30%"
      templateRows="30px 1fr"
    >
      <Box gridArea="stats">
        <Card>
          <CampaignStats />
        </Card>
      </Box>

      <Flex mt="16" gridArea="main" flexDirection="column">
        <Card flex={1}>
          <Flex alignItems="center">
            <Text fontSize="32" color="brand.500">
              Campaigns
            </Text>

            <Button
              ml="4"
              size="sm"
              onClick={onOpen}
              variant="brand"
              leftIcon={<AddIcon />}
            >
              add
            </Button>
          </Flex>

          <Divider my="4" />

          <PartnerCampaigns partner={partner as partner} />
        </Card>
      </Flex>

      <Flex gridArea="info" flexDirection="column">
        <Card flex={1}>
          {partner ? <PartnerInfo partner={partner as partner} /> : null}
        </Card>
      </Flex>

      <CampaignAddModal isOpen={isOpen} onClose={onClose} />
    </Grid>
  );
}
