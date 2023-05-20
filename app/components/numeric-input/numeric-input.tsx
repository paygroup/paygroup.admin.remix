import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorModeValue,
} from "@chakra-ui/react";

export const NumericInput: React.FC<
  React.ComponentProps<typeof NumberInputField>
> = (props) => {
  const color = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue(
    "secondaryGray.100",
    "rgba(135, 140, 189, 0.3)"
  );

  return (
    <NumberInput
      variant="main"
      precision={2}
      step={0.2}
      borderColor={borderColor}
    >
      <NumberInputField color={color} borderColor={borderColor} {...props} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
