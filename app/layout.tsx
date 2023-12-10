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
      color="#000"
      padding={16}
      minHeight="100vh"
      gap={16}
    >
      {/* header */}
      <NavBar />
      {/* chakra ui provider to allow use chakra components on server side */}
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
