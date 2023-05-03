import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

export const InputControl = (
  props: React.PropsWithChildren<{
    label?: string;
    error?: string;
    isRequired?: boolean;
    _formControl?: React.ComponentProps<typeof FormControl>;
  }>
) => {
  const { label, error, isRequired, _formControl, children } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} {..._formControl}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
