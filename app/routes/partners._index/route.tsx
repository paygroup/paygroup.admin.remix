import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import type { LoaderFunction } from "react-router";

import { Card } from "~/components/card";
import { Pagination } from "~/components/pagination";

import { AddPartnerModal } from "./add.partner.modal";
import { PartnersTable } from "./route.partners.table";
import { useRouteTable } from "./route.table.use";
import { PAGE_SIZE, loadPartners } from "./services";

export const loader: LoaderFunction = async ({ request }) =>
  loadPartners(request.url);

export default function Partners() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const navigate = useNavigate();
  const table = useRouteTable();

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Flex alignItems="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            All partners
          </Text>
          <Box ml="4">
            <AddPartnerModal />
          </Box>
        </Flex>

        <Pagination
          prev={table.getCanPreviousPage()}
          next={table.getCanNextPage()}
          page={table.data.page}
          pageSize={PAGE_SIZE}
          recordCount={table.data.recordCount}
          pageCount={table.getPageCount()}
          onChange={(page) => {
            navigate(`/partners?page=${page}`);
          }}
          goNext={table.nextPage}
          goPrev={table.previousPage}
        />
      </Flex>

      <PartnersTable
        columnGroups={table.getHeaderGroups()}
        rowModel={table.getRowModel()}
      />
    </Card>
  );
}
