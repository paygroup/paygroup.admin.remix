import {
  Table,
  Thead,
  Tr,
  Th,
  Flex,
  Tbody,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";
import type { HeaderGroup, RowModel } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

import type { PartnerItem } from "./services";

export const PartnersTable: React.FC<{
  columnGroups: HeaderGroup<PartnerItem>[];
  rowModel: RowModel<PartnerItem>;
}> = ({ columnGroups, rowModel }) => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Table variant="simple" color="gray.500" mb="24px" mt="12px">
      <Thead>
        {columnGroups.map((group) => (
          <Tr key={group.id}>
            {group.headers.map((header) => (
              <Th
                key={header.id}
                colSpan={header.colSpan}
                pe="10px"
                borderColor={borderColor}
                cursor="pointer"
                onClick={header.column.getToggleSortingHandler()}
              >
                <Flex
                  justifyContent="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.400"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: "",
                    desc: "",
                  }[header.column.getIsSorted() as string] ?? null}
                </Flex>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>

      <Tbody>
        {rowModel.rows.slice(0, 11).map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td
                key={cell.id}
                fontSize={{ sm: "14px" }}
                minW={{ sm: "150px", md: "200px", lg: "auto" }}
                borderColor="transparent"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
