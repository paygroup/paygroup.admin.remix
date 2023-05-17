import { AddIcon } from "@chakra-ui/icons";
import { Button, Text, Flex, Divider } from "@chakra-ui/react";

import type { partner } from "~/graphql/genql-sdk";

import { PartnerCampaignsTable } from "./partner.campaign-table";

export const PartnerCampaignsTableList: React.FC<{
  partner: partner;
  onOpen: () => void;
}> = ({ partner, onOpen }) => (
  <>
    <Flex alignItems="center">
      <Text fontSize="32" color="brand.500">
        all campaigns
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
  </>
);
