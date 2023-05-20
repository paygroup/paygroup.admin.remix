import { Text } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";

import type { fetchPartnerData } from "./route.loader";

export const usePartnerWithdrawFormTitle = () => {
  const { partner } =
    useLoaderData<Awaited<ReturnType<typeof fetchPartnerData>>>();

  const balance = partner.groups?.[0]?.group_balance ?? 0;
  const title = `Withdraw funds`;
  const subtitle = balance > 0 ? undefined : "Insufficient funds";

  return {
    title,
    subtitle,
  };
};

export const PartnerWithdrawFormTitle: React.FC<{
  insufficientFunds?: boolean;
}> = ({ insufficientFunds }) => (
  <>
    <p>Withdraw funds</p>
    {insufficientFunds ? (
      <Text fontSize="sm" color="red.500">
        Insufficient funds
      </Text>
    ) : null}
  </>
);
