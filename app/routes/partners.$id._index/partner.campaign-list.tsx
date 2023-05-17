import { AddIcon } from "@chakra-ui/icons";
import { Button, Text, Flex, Divider } from "@chakra-ui/react";

import { Card } from "~/components/card";
import type { partner } from "~/graphql/genql-sdk";

import { PartnerCampaignsTable } from "./partner.campaign-table";

export const PartnerCampaignsTableList: React.FC<{
  partner: partner;
  onOpen: () => void;
}> = ({ partner, onOpen }) => (
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

    <PartnerCampaignsTable partner={partner as partner} />
  </Card>
);
