import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const PartnerTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Dashboard</Tab>
      <Tab>Payments</Tab>
      <Tab>Members</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
