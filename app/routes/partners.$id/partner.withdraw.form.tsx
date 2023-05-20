import type {
  InputProps,
  SelectProps,
  NumberInputField,
} from "@chakra-ui/react";
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
  useColorModeValue,
} from "@chakra-ui/react";

import { NumericInput } from "~/components/numeric-input";
import type { en_payment_providers_enum } from "~/graphql/genql-sdk";

import { PartnerWithdrawFormTitle } from "./partner.withdraw.form.title";
import { usePartnerWithdrawForm } from "./partner.withdraw.form.use";

export const PartnerWithdrawModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const {
    amount,
    carrier,
    phone,
    recipient,
    isProcessing,
    insufficientBalance,
    submit,
    handleClose,
  } = usePartnerWithdrawForm();

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={handleClose(onClose)}
      closeOnOverlayClick={!isProcessing}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <PartnerWithdrawFormTitle insufficientFunds={insufficientBalance} />
        </ModalHeader>
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

            <RecipientFullName
              value={recipient.field.value}
              onChange={recipient.field.onChange}
              onBlur={recipient.field.onBlur}
              error={recipient.fieldState.error?.message}
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
          <Button
            variant="brand"
            isLoading={isProcessing}
            isDisabled={insufficientBalance}
            onClick={submit}
          >
            withdraw
          </Button>

          <Button
            ml="3"
            colorScheme="red"
            isLoading={isProcessing}
            isDisabled={insufficientBalance || isProcessing}
            onClick={isProcessing ? undefined : handleClose(onClose)}
          >
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const WithdrawAmountControl: React.FC<
  React.ComponentProps<typeof NumberInputField> & { error?: string }
> = ({ error, ...rest }) => (
  <FormControl isRequired isInvalid={!!error?.length}>
    <FormLabel>withdraw amount</FormLabel>
    <NumericInput placeholder="enter withdraw amount" {...rest} />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

const PhoneCarrierSelectControl: React.FC<SelectProps & { error?: string }> = ({
  error,
  onChange,
  ...rest
}) => {
  const color = useColorModeValue("secondaryGray.900", "white");
  const placeHolderColor = "secondaryGray.500";

  const borderColor = useColorModeValue(
    "secondaryGray.100",
    "rgba(135, 140, 189, 0.3)"
  );

  return (
    <FormControl isRequired isInvalid={!!error?.length}>
      <FormLabel>Phone carrier</FormLabel>
      <Select
        fontSize="sm"
        color={rest.value ? color : placeHolderColor}
        bg="transparent"
        border="1px solid"
        borderRadius="16px"
        borderColor={borderColor}
        focusBorderColor={borderColor}
        placeholder="enter phone carrier"
        onChange={(e) => {
          onChange?.(e.target.value as any);
        }}
        _placeholder={{ color: "secondaryGray.400" }}
        _focus={{ borderColor }}
        _active={{ borderColor }}
        _selected={{ borderColor }}
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
};

const RecipientFullName: React.FC<InputProps & { error?: string }> = ({
  error,
  ...rest
}) => (
  <FormControl isRequired isInvalid={!!error?.length}>
    <FormLabel>Recipient fullname </FormLabel>
    <Input variant="main" placeholder="enter recipient full name" {...rest} />
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
