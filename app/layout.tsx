// layout component to wrap all app in container

import React from "react";
import { Providers } from "./providers";
import { Center, Flex } from "@chakra-ui/react";
import NavBar from "../src/components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      direction="column"
      bgColor="#330c4a"
      color="#fff"
      padding={16}
      minHeight="100vh"
    >
      <NavBar />
      <Providers>
        <Flex width={"100%"} h={"100%"} flex={1}>
          <Center width={"100%"} alignSelf={"center"}>
            {children}
          </Center>
        </Flex>
      </Providers>
    </Flex>
  );
}
