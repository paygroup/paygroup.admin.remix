import { useState } from "react";

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
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export const CampaignAddModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const contribColor = useColorModeValue("secondaryGray.900", "white");
  const { start, end } = useDateValues();
  const yesterday = getYesteratday();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new campaign</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="8" alignItems="flex-start">
            <FormControl isRequired>
              <FormLabel>Campaign name</FormLabel>
              <Input
                name="campaign_name"
                variant="main"
                placeholder="Campaign name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Campaign contribution</FormLabel>
              <NumberInput variant="main" precision={2} step={0.2}>
                <NumberInputField
                  name="campaign_contribution"
                  placeholder="enter contribution amount"
                  color={contribColor}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Flex w="100%" justifyContent="space-between">
              <FormControl isRequired mr="8">
                <FormLabel>Campaign start date</FormLabel>
                <SingleDatepicker
                  name="campaign_start_date"
                  minDate={yesterday}
                  date={start.value}
                  onDateChange={start.onChange}
                />
                <input
                  type="hidden"
                  name="campaign_start_date"
                  value={start.value?.toISOString()}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Campaign end date</FormLabel>
                <SingleDatepicker
                  date={end.value}
                  name="campaign_end_date"
                  minDate={yesterday}
                  onDateChange={end.onChange}
                />
                <input
                  type="hidden"
                  name="campaign_end_date"
                  value={end.value?.toISOString()}
                />
              </FormControl>
            </Flex>

            <FormControl isRequired mt="6">
              <FormLabel>Campaign description</FormLabel>
              <Textarea
                placeholder="Campaign description"
                name="campaign_description"
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button type="submit" variant="brand">
            Create
          </Button>
          <Button colorScheme="red" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
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
