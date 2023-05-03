/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  IconButton,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import type { StringOrNumber } from "@chakra-ui/utils";
import throttle from "lodash/throttle";

import type { usePagination } from "./pagination.use";

const Span: React.FC<React.PropsWithChildren<any>> = ({ children }) => (
  <Box mr="2" className="span">
    {children}
  </Box>
);

type PaginationProps = ReturnType<typeof usePagination>;
export const Pagination = ({
  page,
  showing,
  pageCount,
  recordCount,
  canGoNext,
  canGoPrevious,
  goNext,
  onChange,
  goPrevious,
}: PaginationProps & { onChange: (page?: StringOrNumber) => void }) => (
  <Flex alignItems="center" color="gray.500" className="pagination">
    <Span>showing</Span>
    <Span>{showing}</Span>
    <Span>of</Span>
    <Span>{recordCount}</Span>
    <Span>{recordCount > 1 ? "records" : "record"}</Span>
    <IconButton
      onClick={canGoPrevious ? goPrevious : undefined}
      ml="2"
      aria-label="previous page"
      colorScheme={canGoPrevious ? "brand" : undefined}
      size="sm"
      opacity={0.8}
      icon={<ChevronLeftIcon fontSize="2xl" />}
    />
    <IconButton
      onClick={canGoNext ? goNext : undefined}
      ml="1"
      mr="2"
      aria-label="next page"
      colorScheme={canGoNext ? "brand" : undefined}
      size="sm"
      opacity={0.8}
      icon={<ChevronRightIcon fontSize="2xl" />}
    />
    <PageInput page={page} pageCount={pageCount} onChange={onChange} />
    <Span>of</Span>
    <Span>{pageCount}</Span>
    <Span>{pageCount > 1 ? "pages" : "page"}</Span>
    <Select display="none" ml="2" defaultValue={10}>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </Select>
  </Flex>
);

type PageInputProps = {
  page: StringOrNumber;
  pageCount: number;
  onChange: (index?: StringOrNumber) => void;
};
const PageInput = ({ page, pageCount, onChange }: PageInputProps) => {
  const [pageValue, setPageValue] = useState<StringOrNumber>(page ?? 0);
  const [previousValue, setPreviousValue] = useState<StringOrNumber>(page);
  const setPageValueThrottle = useCallback(
    throttle((val: StringOrNumber) => setPageValue(val), 1000),
    []
  );
  const textColor = useColorModeValue("secondaryGray.500", "white");

  const invalidNum = (num: StringOrNumber) =>
    typeof num !== "number" ||
    isNaN(num as number) ||
    (Number(num) === 0 && pageCount > 0);
  const emptyString = (str: string) => !str.length;

  const handleChange = (str: string, value: number) => {
    if (emptyString(str)) {
      setPreviousValue(page);
      setPageValue(str);
    } else {
      if (invalidNum(value)) {
        return;
      }
      if (value < 0 || value > pageCount) {
        return;
      }
      setPageValueThrottle(value);
    }
  };

  const handleBlur = () => {
    if (invalidNum(pageValue)) {
      setPageValue(previousValue);
    } else {
      onChange?.(pageValue);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      onChange?.(pageValue);
    }
  };

  useEffect(() => {
    if (page !== pageValue) {
      setPageValue(page);
    }
  }, [page]);

  return (
    <NumberInput
      className="pagination-input"
      name="page"
      width={["16"]}
      mr="2"
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={pageCount ? pageValue : 0}
    >
      <NumberInputField readOnly={!pageCount} color={textColor} />
    </NumberInput>
  );
};
