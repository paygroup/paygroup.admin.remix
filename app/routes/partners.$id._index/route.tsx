import { useDisclosure } from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { partner } from "~/graphql/genql-sdk";

import { PartnerCampaignAddModal } from "./partner.campaign-addmodal";
import { PartnerCampaignsTableList } from "./partner.campaign-list";
import { Partner, routeAction } from "./partner.services";
import { fetchOnePartner } from "./partner.services";

export const loader: LoaderFunction = async ({ params }) =>
  fetchOnePartner(params.id!);

  export const action: ActionFunction = routeAction;

  export const ErrorBoundary = () => <div>Oups!...</div>;

export default function PartnerIdIndex() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { partner } = useLoaderData<{ partner: Partner }>();

  return (
    <>
      <PartnerCampaignsTableList partner={partner as partner} onOpen={onOpen} />
      <PartnerCampaignAddModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
