import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import type { partner } from "~/graphql/genql-sdk";

export const PartnerCampaigns: React.FC<{ partner: partner }> = ({
  partner,
}) => (
  <TableContainer>
    <Table color="gray.500" mb="24px" mt="12px">
      <Thead>
        <Tr>
          {["Campaign name", "Balance", "Members"].map((header) => (
            <Th
              key={header}
              p="0px"
              fontSize={{ sm: "10px", lg: "12px" }}
              color="gray.500"
              w="60%"
            >
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>

      <Tbody>
        {partner.partner_campaigns.map((campaign) => (
          <Tr key={campaign.id}>
            <Td pl="0" fontSize="20" color="secondaryGray.900">
              {campaign.campaign_title}
            </Td>
            <Td />
            <Td pr="0" />
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
