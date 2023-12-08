import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "@chakra-ui/next-js";
import { User } from "../../types/user";

export default function NavBar() {
  const [user, setUser] = useLocalStorage<User>("user", {});

  return (
    <Flex as="nav" justify="space-between">
      <Box fontSize={32}>⚛️</Box>

      {/* check if user is signed in. Is fo - show user info and add the link to edit data */}
      {user && (
        <Link href="/">
          <Flex direction="column" alignItems="flex-end">
            <Text fontSize="20px" fontWeight={600}>
              {user.name}
            </Text>
            <Text>{user.jobTitle}</Text>
          </Flex>
        </Link>
      )}
    </Flex>
  );
}
