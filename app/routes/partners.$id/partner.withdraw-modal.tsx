import type { InputProps, SelectProps } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  Input,
  VStack,
  Select,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFetcher } from "@remix-run/react";
import { useController, useForm } from "react-hook-form";

import type { en_payment_providers_enum } from "~/graphql/genql-sdk";

export const PartnerWithdrawModal: React.FC<{
  isOpen: boolean;
  isProcessing: boolean;
  onClose: () => void;
}> = ({ isOpen, isProcessing, onClose }) => {
  const { amount, carrier, phone, submit } = useWithdrawForm();

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={!isProcessing}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Withdraw funds</ModalHeader>
        <ModalCloseButton />

        <ModalBody py="4" borderTopWidth={1} borderBottomWidth={1}>
          <VStack spacing="6" alignItems="flex-start">
            <WithdrawAmountControl
              value={amount.field.value}
              onChange={amount.field.onChange}
              onBlur={amount.field.onBlur}
              error={amount.fieldState.error?.message}
            />
            <PhoneCarrierSelectControl
              value={carrier.field.value}
              onChange={carrier.field.onChange}
              onBlur={carrier.field.onBlur}
              error={carrier.fieldState.error?.message}
            />
            <DestinationPhoneControl
              value={phone.field.value}
              onChange={phone.field.onChange}
              onBlur={phone.field.onBlur}
              error={phone.fieldState.error?.message}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="brand" isLoading={isProcessing} onClick={submit}>
            withdraw
          </Button>
          <Button
            ml="3"
            colorScheme="red"
            isLoading={isProcessing}
            onClick={isProcessing ? undefined : onClose}
          >
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const useWithdrawForm = () => {
  const fetcher = useFetcher();

  const { control, handleSubmit } = useForm<{
    amount: number;
    phone: string;
    carrier: en_payment_providers_enum;
  }>();

  const amount = useController({
    control,
    name: "amount",
    rules: { required: "amount required" },
  });
  const phone = useController({
    control,
    name: "phone",
    rules: { required: "phone required" },
  });
  const carrier = useController({
    control,
    name: "carrier",
    rules: { required: "carrier required" },
  });

  const submit = handleSubmit((data) => {
    fetcher.submit(data as any, { method: "POST" });
  });

  return {
    amount,
    phone,
    carrier,
    submit,
  };
};

const WithdrawAmountControl: React.FC<
  React.ComponentProps<typeof NumberInputField> & { error?: string }
> = ({ error, ...rest }) => {
  const color = useColorModeValue("secondaryGray.900", "white");

  return (
    <FormControl isRequired isInvalid={!!error?.length}>
      <FormLabel>withdraw amount</FormLabel>
      <NumberInput variant="main" precision={2} step={0.2}>
        <NumberInputField
          placeholder="enter withdraw amount"
          color={color}
          {...rest}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

const PhoneCarrierSelectControl: React.FC<SelectProps & { error?: string }> = ({
  error,
  onChange,
  ...rest
}) => (
  <FormControl isRequired isInvalid={!!error?.length}>
    <FormLabel>Phone carrier</FormLabel>
    <Select
      placeholder="enter phone carrier"
      variant="main"
      onChange={(e) => {
        const value = e.target.value;
        onChange?.(value as any);
      }}
      {...rest}
    >
      <option value={"AIRTEL_CD" as en_payment_providers_enum}>Airtel</option>
      <option value={"VODACOM_CD" as en_payment_providers_enum}>Mpesa</option>
      <option value={"ORANGE_MONEY_CD" as en_payment_providers_enum}>
        Orange Money
      </option>
      <option value={"AFRICELL_CD" as en_payment_providers_enum}>
        Africell
      </option>
    </Select>
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

const DestinationPhoneControl: React.FC<InputProps & { error?: string }> = ({
  error,
  ...rest
}) => (
  <FormControl isRequired isInvalid={!!error?.length}>
    <FormLabel>Destination phone</FormLabel>
    <Input variant="main" placeholder="enter destination phone" {...rest} />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);
