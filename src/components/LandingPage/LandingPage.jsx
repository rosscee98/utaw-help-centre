import PropTypes from "prop-types";
import { Box, Link, Text } from "@chakra-ui/react";
import PageGrid from "./components/PageGrid";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function LandingPage({ guides }) {
  return (
    <Box width={{ base: "auto", md: "60vw" }} marginX="auto">
      <Box marginBottom="20px">
        <Text fontSize="lg">
          Find advice by tech workers, for tech workers.
        </Text>
        <Text fontSize="lg">
          Joining UTAW takes two minutes:{" "}
          <Link color="blue" href="https://utaw.tech/join" isExternal>
            utaw.tech/join <ExternalLinkIcon />
          </Link>
          .
        </Text>
      </Box>
      <PageGrid guides={guides} />
    </Box>
  );
}

LandingPage.propTypes = {
  guides: PropTypes.array,
};
