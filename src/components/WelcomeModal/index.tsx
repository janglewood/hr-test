import { Flex, Fade, Box, Text } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useRouter } from "next/router";
import { User } from "../../types/user";
import Image from "next/image";
import { fonts } from "../../../app/fonts";

// common interface for both step components
export interface IStepProps {
  value: string;
  handleInputChange: ({
    target: { name, value },
  }: {
    target: { name: "name" | "jobTitle"; value: string };
  }) => void;
  handleNextStage: () => void;
  isNextStepAlowed: boolean;
  handleBack?: () => void;
}

const stepsConfig = [Step1, Step2];

export const WelcomeModal: FC = () => {
  // hook to retrieve user data from localStorage
  const [user, setUser] = useLocalStorage<User>("user", {});

  // keep steps for modal (1 - name "step", 2 - jobTitle "step")
  const [step, setStep] = useState(1);
  // keep userData that user type
  const [userData, setUserData] = useState<User>(user);

  // effect to populate userData from localStorage
  useEffect(() => {
    setUserData({
      name: user.name,
      jobTitle: user.jobTitle,
    });
  }, [user]);

  const { push } = useRouter();

  // checking if the next button should be disabled
  const isNextStepAlowed = useMemo(
    () =>
      (step === 1 && (userData.name?.length as number) > 0) ||
      (step === 2 && (userData.jobTitle?.length as number) > 0),
    [step, userData]
  );

  // handle user prompt
  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // save user data to localStorage on 2 step
  const handleSubmit = useCallback(() => {
    setUser(userData);
  }, [setUser, userData]);

  // go back to previous step
  const handleBack = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  // handle switching between steps
  const handleNextStage = useCallback(() => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      handleSubmit();
      push("/info");
    }
  }, [handleSubmit, push, step]);

  // step component depends on step
  const CurrentStep = useMemo(() => stepsConfig[step - 1], [step]);

  return (
    <Box width="100%">
      <Fade in={true} delay={0.5}>
        <Flex
          color="#000"
          bgColor="white"
          width={{ sm: "fit-content", md: "100%" }}
          margin={{ sm: "0 auto", md: "0" }}
          alignItems="center"
          gap={4}
        >
          <Flex
            p={6}
            direction="column"
            textTransform="uppercase"
            width="100%"
            maxWidth="350px"
          >
            <Text color="#7E7E7E" fontWeight={700} fontSize={10}>
              The Grand Moment
            </Text>
            <Text
              className={fonts.PlayfairDisplay.className}
              fontSize={44}
              fontWeight={700}
              color="#2C2C2C"
              letterSpacing="3px"
              mt="15px"
            >
              Le tour
            </Text>
            <CurrentStep
              value={userData[step === 1 ? "name" : "jobTitle"] || ""}
              handleInputChange={handleInputChange}
              isNextStepAlowed={isNextStepAlowed}
              handleNextStage={handleNextStage}
              handleBack={handleBack}
            />
          </Flex>
          {/* image for desktop screens */}
          <Box width="100%" height="100%" display={{ sm: "none", md: "block" }}>
            <Image
              priority
              src="/images/bg.jpeg"
              width={500}
              height={300}
              style={{ width: "100%", height: "100%" }}
              alt="Background"
            />
          </Box>
        </Flex>
      </Fade>
    </Box>
  );
};
