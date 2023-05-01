import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

import type { RowObj } from "./types";

const columnHelper = createColumnHelper<RowObj>();

export const useColumns = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
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
      cell: (info: any) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),

    columnHelper.accessor("date", {
      id: "date",
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
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          PROGRESS
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}%
          </Text>
          <Progress
            variant="table"
            colorScheme="brandScheme"
            h="8px"
            w="63px"
            value={info.getValue()}
          />
        </Flex>
      ),
    }),
  ];

  return { columns };
};
