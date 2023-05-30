import { Box, HStack, Heading, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <HStack gap="20px">
      <Box>
        <Heading>Something went wrong.</Heading>
        <Box marginTop="20px">
          <Link as={ReactRouterLink} to="/" marginTop="20px">
            Home
          </Link>
        </Box>
      </Box>
    </HStack>
  );
}
