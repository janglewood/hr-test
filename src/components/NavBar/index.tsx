import { Flex, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "@chakra-ui/next-js";
import { User } from "../../types/user";
import Image from "next/image";

export default function NavBar() {
  const [user] = useLocalStorage<User>("user", {});
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex as="nav" justify="space-between">
      <Box fontSize={32}>⚛️</Box>

      {/* check if user is signed in. Is fo - show user info and add the link to edit data */}
      {user && (
        <Link
          href="/"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Flex gap="16">
            <Image
              src={isHovered ? "/icons/edit.svg" : "/icons/user.svg"}
              alt="500 Server Error"
              width={24}
              height={24}
            />
            <Flex direction="column" alignItems="flex-end">
              <Text fontSize="16px" fontWeight={600}>
                {user.name}
              </Text>
              <Text>{user.jobTitle}</Text>
            </Flex>
          </Flex>
        </Link>
      )}
    </Flex>
  );
}
