import { Box, Text } from "@chakra-ui/react";
import PageGrid from "../components/PageGrid";

export default function LandingPage() {
  return (
    <>
      <Box marginBottom="20px">
        <Text fontSize="lg">
          Find advice by tech workers, for tech workers.
        </Text>
        <Text fontSize="lg">
          Joining UTAW takes two minutes:{" "}
          <a href="https://utaw.tech/join">utaw.tech/join</a>.
        </Text>
      </Box>
      <PageGrid />
    </>
  );
}
