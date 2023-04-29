/* eslint-disable unused-imports/no-unused-vars */
import { Flex } from "@chakra-ui/react";

export const HSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, ...rest } = props;
  return <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)" {...rest} />;
};

export const VSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, ...rest } = props;
  return <Flex w="1px" bg="rgba(135, 140, 189, 0.3)" {...rest} />;
};
