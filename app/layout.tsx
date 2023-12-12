// layout component to wrap all app in container

import React from "react";
import { Providers } from "./providers";
import { Center, Flex } from "@chakra-ui/react";
import NavBar from "../src/components/NavBar";
import { fonts } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* chakra ui provider to allow use chakra components on server side */
    <Providers>
      <Flex
        direction="column"
        color="#000"
        padding={16}
        pt={8}
        minHeight="100vh"
        gap={4}
        bgColor="#eaeaea"
      >
        {/* header */}
        <NavBar />

        {/* content */}
        <Flex
          width={"100%"}
          h={"100%"}
          flex={1}
          // initial font
          className={fonts.OpenSans.className}
        >
          <Center width={"100%"} alignSelf={"center"}>
            {children}
          </Center>
        </Flex>
      </Flex>
    </Providers>
  );
}
