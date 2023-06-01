import PropTypes from "prop-types";
import { Box, Link, Text, useColorMode } from "@chakra-ui/react";
import PageGrid from "./components/PageGrid";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Landing({ guides }) {
  const { colorMode } = useColorMode();

  return (
    <Box width={{ base: "auto", md: "60vw" }} marginX="auto">
      <Box marginBottom="20px">
        <Text fontSize="lg">
          Find advice for tech workers, by tech workers.
        </Text>
        <Text fontSize="lg">
          Joining UTAW takes two minutes:{" "}
          <Link
            href="https://utaw.tech/join"
            isExternal
            variant={`${colorMode}Emphasis`}
          >
            utaw.tech/join <ExternalLinkIcon />
          </Link>
          .
        </Text>
      </Box>
      <PageGrid guides={guides} />
    </Box>
  );
}

Landing.propTypes = {
  guides: PropTypes.array,
};
