import { Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { MdAttachMoney, MdBarChart } from "react-icons/md";

import { IconBox } from "~/components/icon-box";
import { MiniStats } from "~/components/mini-stats";

export const CampaignStats = () => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  // const boxBg = useColorModeValue("red.300", "whiteAlpha.100");

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }} gap="20px">
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
        <MiniStats growth="+23%" name="Sales" value="$574.34" />
      </SimpleGrid>
    </>
  );
};
