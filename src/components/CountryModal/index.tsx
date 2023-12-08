import React, { Dispatch, FC, SetStateAction } from "react";

import {
  Box,
  Flex,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface IProps {
  country: any;
  onClose: () => void;
}
export const CountryModal: FC<IProps> = ({ country, onClose }) => {
  return (
    <Modal isOpen={!!country} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex
          direction="column"
          p={5}
          color="#000"
          bg="#f2c0f2;"
          rounded="xl"
          shadow="xl"
        >
          <ModalHeader>
            <Box>{`${country?.name} ${country?.emoji}`}</Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mt={5}>
              <List>
                <ListItem display="flex" gap={2}>
                  <Text fontWeight={600}>Capital:</Text>
                  <Text>{country?.capital}</Text>
                </ListItem>
                <ListItem display="flex" gap={2}>
                  <Text fontWeight={600}>Native:</Text>
                  <Text>{country?.native}</Text>
                </ListItem>
                <ListItem display="flex" gap={2}>
                  <Text fontWeight={600}>Currency:</Text>
                  <Text>{country?.currency}</Text>
                </ListItem>
              </List>
            </Box>
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
