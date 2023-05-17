import { Box, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { MdAttachMoney, MdBarChart } from "react-icons/md";

import { Card } from "~/components/card";
import { IconBox } from "~/components/icon-box";
import { MiniStats } from "~/components/mini-stats";
import type { partner } from "~/graphql/genql-sdk";

export const PartnerStatsCard: React.FC<{ partner: partner }> = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Card>
      <SimpleGrid
        gap="20px"
        columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
        alignItems="flex-start"
      >
        <MiniStats
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="40px" h="40px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Earnings"
          value="$350.4"
        />

        <MiniStats
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="40px" h="40px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Spend this month"
          value="$642.39"
        />

        <Box justifySelf="stretch">
          <MiniStats growth="+23%" name="Balance" value="$574.34" />
        </Box>
      </SimpleGrid>
    </Card>
  );
};
