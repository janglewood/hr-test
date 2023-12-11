import { Flex, Fade, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "../../Input";
import { IStepProps } from "..";

export const Step2: FC<IStepProps> = ({
  value,
  handleInputChange,
  isNextStepAlowed,
  handleNextStage,
  handleBack,
}) => {
  return (
    <Fade in transition={{ enter: { duration: 0.5 } }}>
      <Flex direction="column">
        <Text
          fontSize={11}
          fontWeight={700}
          color="#000"
          textTransform="none"
          mt={6}
        >
          Job title
        </Text>
        <Input
          mb={6}
          mt={1}
          name="jobTitle"
          value={value}
          placeholder="Your job title"
          onChange={handleInputChange}
        />
        <Text fontSize={11} fontWeight={700} color="#2C2C2C">
          Explore The Tour
        </Text>
        <Flex mt={16} width={"100%"} justifyContent={"flex-end"}>
          <ButtonGroup>
            {/* move back to first step */}
            <Button
              colorScheme="purple"
              variant="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
            {/* move to next step */}
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
