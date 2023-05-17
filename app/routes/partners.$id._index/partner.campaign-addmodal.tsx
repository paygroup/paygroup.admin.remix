/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Flex,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

import type { partner_campaign } from "~/graphql/genql-sdk";
import type { RouteAction } from "~/types";

export const PartnerCampaignAddModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { state, contribColor, start, end, yesterday, errors } = useCampaignAdd(
    {
      onClose,
    }
  );

  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={state === "idle"}
    >
      <ModalOverlay />
      <ModalContent>
        <Form method="post">
          <ModalHeader>Add new campaign</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="8" alignItems="flex-start">
              <FormControl
                isRequired
                isInvalid={!!errors?.campaign_title?.length}
              >
                <FormLabel>Campaign name</FormLabel>
                <Input
                  name="campaign_title"
                  variant="main"
                  placeholder="Campaign name"
                />
                <FormErrorMessage>
                  {errors?.campaign_title?.[0]}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={!!errors?.contribution_amount?.length}
              >
                <FormLabel>Campaign contribution</FormLabel>
                <NumberInput variant="main" precision={2} step={0.2}>
                  <NumberInputField
                    name="contribution_amount"
                    placeholder="enter contribution amount"
                    color={contribColor}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {errors?.contribution_amount?.[0]}
                </FormErrorMessage>
              </FormControl>

              <Flex w="100%" justifyContent="space-between">
                <FormControl
                  isRequired
                  mr="8"
                  isInvalid={!!errors?.campaign_starting_date?.length}
                >
                  <FormLabel>Campaign start date</FormLabel>
                  <SingleDatepicker
                    name="campaign_start_date"
                    minDate={yesterday}
                    date={start.value}
                    onDateChange={start.onChange}
                  />
                  <input
                    type="hidden"
                    name="campaign_starting_date"
                    value={start.value?.toISOString()}
                  />
                  <FormErrorMessage>
                    {errors?.campaign_starting_date?.[0]}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors?.campaign_ending_date?.length}>
                  <FormLabel>Campaign end date</FormLabel>
                  <SingleDatepicker
                    date={end.value}
                    name="campaign_end_date"
                    minDate={yesterday}
                    onDateChange={end.onChange}
                  />
                  <input
                    type="hidden"
                    name="campaign_ending_date"
                    value={end.value?.toISOString()}
                  />
                  <FormErrorMessage>
                    {errors?.campaign_ending_date?.[0]}
                  </FormErrorMessage>
                </FormControl>
              </Flex>

              <FormControl
                isRequired
                mt="6"
                isInvalid={!!errors?.campaign_description?.length}
              >
                <FormLabel>Campaign description</FormLabel>
                <Textarea
                  placeholder="Campaign description"
                  name="campaign_description"
                />
                <FormErrorMessage>
                  {errors?.campaign_description?.[0]}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              variant="brand"
              isLoading={state === "submitting"}
            >
              Create
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={state === "idle" ? onClose : undefined}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  );
};

const useCampaignAdd = (props: { onClose: () => void }) => {
  const toast = useToast();
  const contribColor = useColorModeValue("secondaryGray.900", "white");
  const { start, end } = useDateValues();
  const yesterday = getYesteratday();
  const { state } = useNavigation();
  const action = useActionData<RouteAction<partner_campaign>>();

  useEffect(() => {
    if (action?.done) {
      props.onClose();
    } else {
      if (state === "idle" && action?.fatal && !toast.isActive("error")) {
        toast({
          id: "error",
          title: "Error",
          description: action.fatal,
          status: "error",
          position: "top",
          isClosable: true,
        });
      }
    }
  }, [state]);

  return {
    start,
    end,
    contribColor,
    yesterday,
    state,
    errors: action?.errors,
  };
};

const useDateValues = () => {
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();

  return {
    start: {
      value: start,
      onChange: setStart,
    },
    end: {
      value: end,
      onChange: setEnd,
    },
  };
};

const getYesteratday = () => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() - 1));
};
