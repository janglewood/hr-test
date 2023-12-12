import {
  Flex,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "@chakra-ui/next-js";
import { User } from "../../types/user";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NavBar() {
  const [user] = useLocalStorage<User>("user", {});

  const router = useRouter();

  return (
    <Flex as="nav" justify="flex-end">
      {/* check if user is signed in and page is not 'editing page'. Is fo - show user info and add the link to edit data */}
      {user.name && router.pathname !== "/" && (
        <Popover>
          <PopoverTrigger>
            <Flex
              cursor="pointer"
              bgColor="#fff"
              width={8}
              height={8}
              rounded={100}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/icons/user.svg"
                alt="500 Server Error"
                width={16}
                height={16}
              />
            </Flex>
          </PopoverTrigger>
          <PopoverContent
            border="1px solid #e9e9e9"
            rounded="xl"
            shadow="xl"
            boxShadow="none !important"
            width="fit-content"
          >
            <Flex direction="column" rounded="xl" shadow="xl" padding={4}>
              <PopoverHeader>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bgColor="purple.500"
                  color="white"
                  width={24}
                  height={24}
                  rounded={100}
                  mx="auto"
                >
                  <Text fontSize="4xl">
                    {(user.name as string)[0].toLocaleUpperCase()}
                  </Text>
                </Flex>
              </PopoverHeader>
              <PopoverBody mx="auto">
                <Link href="/">Change information</Link>
              </PopoverBody>
            </Flex>
          </PopoverContent>
        </Popover>
      )}
    </Flex>
  );
}
