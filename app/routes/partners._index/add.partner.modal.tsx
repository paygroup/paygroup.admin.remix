/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useActionData, useNavigation, Form } from "@remix-run/react";

import type { partner } from "~/graphql/genql-sdk";
import type { RouteAction } from "~/types";

import { InputControl } from "./input.control";

export const AddPartnerModal = () => {
  const { state } = useNavigation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const action = useActionData<RouteAction<partner>>();
  usePartnerCreated({ onClose });

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

      <Modal
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={state === "idle"}
      >
        <ModalOverlay />
        <ModalContent>
          <Form method="post">
            <ModalHeader>Add new partner</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <VStack spacing="5" alignItems="flex-start">
                <InputControl
                  label="partner name"
                  isRequired
                  error={action?.errors?.partner_name?.[0]}
                >
                  <Input
                    name="partner_name"
                    variant="main"
                    placeholder="partner name"
                  />
                </InputControl>

                <InputControl
                  label="address"
                  isRequired
                  error={action?.errors?.partner_address?.[0]}
                >
                  <Input
                    name="partner_address"
                    variant="main"
                    placeholder="partner address"
                  />
                </InputControl>

                <Flex
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <InputControl
                    label="email"
                    isRequired
                    error={action?.errors?.partner_email?.[0]}
                  >
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
                    error={action?.errors?.partner_phone?.[0]}
                  >
                    <Input
                      name="partner_phone"
                      variant="main"
                      placeholder="partner phone"
                    />
                  </InputControl>
                </Flex>

                <InputControl
                  label="description"
                  isRequired
                  error={action?.errors?.partner_description?.[0]}
                >
                  <Textarea
                    placeholder="Partner description"
                    name="partner_description"
                  />
                </InputControl>
              </VStack>
            </ModalBody>

            <Divider mt="8" />

            <ModalFooter>
              <Button
                type="submit"
                size="sm"
                variant="brand"
                mr="4"
                isLoading={state === "submitting"}
              >
                Create
              </Button>
              <Button
                colorScheme="red"
                size="sm"
                onClick={state === "idle" ? onClose : undefined}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
};

const usePartnerCreated = (props: { onClose: () => void }) => {
  const { onClose } = props;
  const toast = useToast();
  const { state } = useNavigation();
  const action = useActionData<RouteAction<partner>>();

  useEffect(() => {
    if (action?.done) {
      onClose();
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
};
