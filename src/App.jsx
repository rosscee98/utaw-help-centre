import { Box, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import PageGrid from "./components/PageGrid";

export default function App() {
  return (
    <Box padding="15px">
      <Navbar />
      <Box marginY="20px">
        <Text fontSize="lg">
          Find advice by tech workers, for tech workers.
        </Text>
        <Text fontSize="lg">
          Joining UTAW takes two minutes:{" "}
          <a href="utaw.tech/join">utaw.tech/join</a>.
        </Text>
      </Box>
      <PageGrid />
    </Box>
  );
}
