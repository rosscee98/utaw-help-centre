import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <HStack gap="20px">
      <Box>
        <Heading>Something went wrong.</Heading>
        <Box marginTop="20px">
          <Link to="/" marginTop="20px">
            Home
          </Link>
        </Box>
      </Box>
    </HStack>
  );
}
