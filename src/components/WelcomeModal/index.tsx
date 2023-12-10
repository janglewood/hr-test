import { Flex, Fade } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useRouter } from "next/router";
import { User } from "../../types/user";

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
    <Fade in={true} delay={0.5}>
      <Flex
        p={10}
        pt={20}
        color="#000"
        border="1px solid #e9e9e9"
        rounded="xl"
        shadow="xl"
      >
        <CurrentStep
          value={userData[step === 1 ? "name" : "jobTitle"] || ""}
          handleInputChange={handleInputChange}
          isNextStepAlowed={isNextStepAlowed}
          handleNextStage={handleNextStage}
          handleBack={handleBack}
        />
      </Flex>
    </Fade>
  );
};
