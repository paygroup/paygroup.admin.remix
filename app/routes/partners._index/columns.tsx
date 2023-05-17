import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import type { PartnerItem } from "./services";

const columnHelper = createColumnHelper<PartnerItem>();

export const useColumns = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const columns = [
    columnHelper.accessor("partner_name", {
      id: "partner_name",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          NAME
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Link to={`/partners/${info.row.original.id}`}>
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
          </Link>
        </Flex>
      ),
    }),

    columnHelper.accessor("created_at", {
      id: "created_at",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          DATE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {dayjs().to(dayjs(info.getValue()))}
        </Text>
      ),
    }),
  ];

  return { columns };
};
