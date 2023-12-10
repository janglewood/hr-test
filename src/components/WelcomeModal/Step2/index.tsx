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
