import { useDisclosure } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";

import type { partner } from "~/graphql/genql-sdk";

import { PartnerCampaignAddModal } from "./partner.campaign-addmodal";
import { PartnerCampaignsTableList } from "./partner.campaign-list";
import type { Partner } from "./partner.loader";

export const PartnerTabsCampaigns = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { partner } = useLoaderData<{ partner: Partner }>();

  return (
    <>
      <PartnerCampaignsTableList partner={partner as partner} onOpen={onOpen} />
      {isOpen && <PartnerCampaignAddModal isOpen onClose={onClose} />}
    </>
  );
};
