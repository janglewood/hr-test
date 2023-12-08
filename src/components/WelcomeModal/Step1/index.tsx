import { Flex, Fade, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
import { Input } from "../../Input";

interface IProps {
  value: string;
  handleInputChange: ({
    target: { name, value },
  }: {
    target: { name: "name" | "jobTitle"; value: string };
  }) => void;
  handleNextStage: () => void;
  isNextStepAlowed: boolean;
}

export const Step1: FC<IProps> = ({
  value,
  handleInputChange,
  isNextStepAlowed,
  handleNextStage,
}) => {
  return (
    <Fade in transition={{ enter: { duration: 0.5 } }}>
      <Flex direction="column">
        <Text fontSize="4xl" fontWeight={600}>
          Welcome!
        </Text>

        <Text fontSize="sm" mt={0.5}>
          Provide your name to sign in.
        </Text>
        <Input
          mt={6}
          value={value}
          name="name"
          placeholder="Your name"
          onChange={handleInputChange}
        />
        <Flex mt={16} width={"100%"} justifyContent={"flex-end"}>
          <Button
            colorScheme="purple"
            isDisabled={!isNextStepAlowed}
            onClick={handleNextStage}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Fade>
  );
};
