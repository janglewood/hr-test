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

const infoFields = [
  {
    title: "Capital",
    value: "capital",
  },
  {
    title: "Native",
    value: "native",
  },
  {
    title: "Currency",
    value: "currency",
  },
];

interface IProps {
  country: any;
  onClose: () => void;
}

export const CountryModal: FC<IProps> = ({ country, onClose }) => {
  return (
    <Modal isOpen={!!country} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex direction="column" p={5} color="#000" rounded="xl" shadow="xl">
          <ModalHeader>
            <Box>{`${country?.name} ${country?.emoji}`}</Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mt={5}>
              <List>
                {infoFields.map(({ title, value }) => (
                  <ListItem display="flex" gap={2} key={value}>
                    <Text fontWeight={600}>{`${title}:`}</Text>
                    <Text>{country?.[value]}</Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
