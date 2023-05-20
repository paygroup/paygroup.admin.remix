import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { SmartText } from "~/components/smarts/smart-text";
import type { partner } from "~/graphql/genql-sdk";

export const PartnerCampaignsTable: React.FC<{ partner: partner }> = ({
  partner,
}) => (
  <TableContainer>
    <Table color="gray.500" mb="24px" mt="12px">
      <Thead>
        <Tr>
          {["Campaign name", "Revenue", "Members"].map((header) => (
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
            <Td pl="0" fontSize="lg" color="secondaryGray.900">
              <SmartText>{campaign.campaign_title}</SmartText>
            </Td>
            <Td />
            <Td pr="0" />
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
