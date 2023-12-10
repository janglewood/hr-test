import React, { FC } from "react";
import { Box, ListItem } from "@chakra-ui/react";

interface IProps {
  onClick: () => void;
  name: string;
  emoji: string;
}
export const InfoListItem: FC<IProps> = ({ onClick, name, emoji }) => {
  return (
    <ListItem
      cursor="pointer"
      onClick={onClick}
      py={1}
      px={2}
      display="flex"
      rounded="md"
      transition="all .15s ease-in"
      _hover={{ background: "#e9e9e9" }}
    >
      <Box mr={2}>{emoji}</Box>
      {name}
    </ListItem>
  );
};
