import { AddIcon } from "@chakra-ui/icons";
import {
  Icon,
  SimpleGrid,
  Flex,
  Button,
  useColorModeValue,
  Box,
  Divider,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdAttachMoney, MdBarChart } from "react-icons/md";

import { Card } from "~/components/card";
import { IconBox } from "~/components/icon-box";
import { MiniStats } from "~/components/mini-stats";
import type { partner } from "~/graphql/genql-sdk";

export const PartnerHeader: React.FC<{ partner: partner; balance: number }> = ({
  balance,
}) => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const balanceValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(balance);

  return (
    <Card>
      <Flex alignItems="center">
        <Flex alignItems="center">
          <MiniStats growth="+23%" name="Balance" value={balanceValue} />
          <Button
            px="6"
            size="sm"
            onClick={() => {}}
            variant="brand"
            leftIcon={<Icon as={BsBoxArrowUpRight} />}
          >
            withdraw
          </Button>
        </Flex>
        <Box flex={1} />
      </Flex>

      <Divider my="4" />

      <SimpleGrid
        display="none"
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

        <Flex alignItems="center">
          <MiniStats growth="+23%" name="Balance" value="$574.34" />
          <Button
            ml="4"
            size="sm"
            onClick={() => {}}
            variant="brand"
            leftIcon={<AddIcon />}
          >
            add
          </Button>
          {/* <Button
            ml="2"
            variant="brand"
            leftIcon={<Icon as={BsBoxArrowUpRight} />}
          >
            withdraw
          </Button> */}
        </Flex>
      </SimpleGrid>
    </Card>
  );
};
