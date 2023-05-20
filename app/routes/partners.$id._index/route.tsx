import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { Card } from "~/components/card";

import { partnerLoader } from "./partner.loader";
import { PartnerTabsCampaigns } from "./partner.tabs.campaigns";
import { createCampaignAction } from "./route.action";

export const loader: LoaderFunction = async ({ params }) =>
  partnerLoader(params.id as string);

export const action: ActionFunction = createCampaignAction;

export const ErrorBoundary = () => <div>Oups!...</div>;

export default function PartnerIdIndex() {
  return (
    <Card flex={1}>
      <Tabs>
        <TabList>
          <Tab>Dashboard</Tab>
          <Tab>Payments</Tab>
          <Tab>Accounting</Tab>
          <Tab>Campaigns</Tab>
          <Tab>Members</Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />

        <TabPanels>
          <TabPanel>
            <p>Analytics and latest activities</p>
          </TabPanel>

          <TabPanel>
            <div>payments</div>
          </TabPanel>

          <TabPanel>
            <div>accounting</div>
          </TabPanel>

          <TabPanel>
            <PartnerTabsCampaigns />
          </TabPanel>

          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
