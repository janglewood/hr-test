import { Flex, Fade, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "../../Input";

interface IProps {
  value: string;
  handleInputChange: ({
    target: { name, value },
  }: {
    target: { name: "name" | "jobTitle"; value: string };
  }) => void;
  handleBack: () => void;
  handleNextStage: () => void;
  isNextStepAlowed: boolean;
}

export const Step2: FC<IProps> = ({
  value,
  handleInputChange,
  isNextStepAlowed,
  handleNextStage,
  handleBack,
}) => {
  return (
    <Fade in transition={{ enter: { duration: 0.5 } }}>
      <Flex direction="column">
        <Text fontSize="4xl" fontWeight={600}>
          Almost done!
        </Text>

        <Text fontSize="sm" mt={0.5}>
          Provide your job title to sign in.
        </Text>
        <Input
          name="jobTitle"
          mt={6}
          value={value}
          placeholder="Your job title"
          onChange={handleInputChange}
        />
        <Flex mt={16} width={"100%"} justifyContent={"flex-end"}>
          <ButtonGroup>
            <Button
              colorScheme="purple"
              variant="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              colorScheme="purple"
              isDisabled={!isNextStepAlowed}
              onClick={handleNextStage}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Fade>
  );
};
