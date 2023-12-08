// we need this for using Chakra UI components in server components

"use client";

import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
