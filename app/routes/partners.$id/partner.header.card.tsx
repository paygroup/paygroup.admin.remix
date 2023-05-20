import { Icon, Flex, Button, Box, useDisclosure } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { Card } from "~/components/card";
import { MiniStats } from "~/components/mini-stats";

import { PartnerWithdrawModal } from "./partner.withdraw.form";
import type { fetchPartnerData } from "./route.loader";

export const PartnerHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { balance } =
    useLoaderData<Awaited<ReturnType<typeof fetchPartnerData>>>();

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
            onClick={onOpen}
            variant="brand"
            leftIcon={<Icon as={BsBoxArrowUpRight} />}
          >
            withdraw
          </Button>
        </Flex>
        <Box flex={1} />
      </Flex>

      <PartnerWithdrawModal isOpen={isOpen} onClose={onClose} />
    </Card>
  );
};
