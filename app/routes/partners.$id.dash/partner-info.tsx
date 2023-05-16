import { Box, VStack } from "@chakra-ui/react";

import { SmartText } from "~/components/smarts/smart-text";
import type { partner } from "~/graphql/genql-sdk";

export const PartnerInfo: React.FC<{ partner: partner }> = ({ partner }) => (
  <VStack p="4" alignItems="flex-start" spacing="4">
    <Box>
      <SmartText color="gray.500" fontSize="18">
        partner
      </SmartText>
      <SmartText fontSize="20" fontWeight="500" lineHeight="100%">
        {partner.partner_name}
      </SmartText>
    </Box>

    <Box>
      <SmartText color="gray.500" fontSize="18">
        email
      </SmartText>
      <SmartText fontSize="20" fontWeight="500" lineHeight="100%">
        {partner.partner_email ?? "N/A"}
      </SmartText>
    </Box>

    <Box>
      <SmartText color="gray.500" fontSize="18">
        phone
      </SmartText>
      <SmartText fontSize="20" fontWeight="500" lineHeight="100%">
        {partner.partner_phone ?? "N/A"}
      </SmartText>
    </Box>

    <Box>
      <SmartText color="gray.500" fontSize="18">
        address
      </SmartText>
      <SmartText fontSize="20" fontWeight="500" lineHeight="100%">
        {partner.partner_address ?? "N/A"}
      </SmartText>
    </Box>
  </VStack>
);
//
