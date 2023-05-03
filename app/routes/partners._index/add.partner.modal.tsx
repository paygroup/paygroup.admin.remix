import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { InputControl } from "./input.control";

export const AddPartnerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        ml="4"
        size="sm"
        onClick={onOpen}
        variant="brand"
        leftIcon={<AddIcon />}
      >
        add partner
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new partner</ModalHeader>

          <ModalBody>
            <VStack spacing="5" alignItems="flex-start">
              <InputControl label="partner name" isRequired>
                <Input
                  name="partner_name"
                  variant="main"
                  placeholder="partner name"
                />
              </InputControl>

              <InputControl label="address" isRequired>
                <Input
                  name="partner_address"
                  variant="main"
                  placeholder="partner address"
                />
              </InputControl>

              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <InputControl label="email" isRequired>
                  <Input
                    name="partner_email"
                    variant="main"
                    placeholder="partner email"
                  />
                </InputControl>

                <InputControl
                  label="phone"
                  isRequired
                  _formControl={{ ml: "4" }}
                >
                  <Input
                    name="partner_phone"
                    variant="main"
                    placeholder="partner phone"
                  />
                </InputControl>
              </Flex>
            </VStack>
          </ModalBody>

          <Divider mt="8" />

          <ModalFooter>
            <Button type="submit" size="sm" variant="brand" mr="4">
              Create
            </Button>
            <Button colorScheme="red" size="sm" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
