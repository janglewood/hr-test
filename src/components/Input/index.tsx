import { Input as DefaultInput } from "@chakra-ui/react";
import React from "react";

export const Input = ({ ...props }) => {
  return (
    <DefaultInput
      width="auto"
      fontSize="sm"
      background="transparent"
      borderColor="purple.500"
      focusBorderColor="purple.500"
      placeholder="Your name"
      _hover={{ borderColor: "purple.500" }}
      {...props}
    />
  );
};
