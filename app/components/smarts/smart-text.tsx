import { Text, useColorModeValue } from "@chakra-ui/react";

export const SmartText = (props: React.ComponentProps<typeof Text>) => {
  const color = useColorModeValue(props.color ?? "secondaryGray.900", "white");
  return <Text color={color} {...props} />;
};
