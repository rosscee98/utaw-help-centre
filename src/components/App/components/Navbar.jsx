import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  HStack,
  Heading,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack paddingBottom="10px" justifyContent="space-between">
      <LinkBox as={HStack} gap="5px">
        <Image src="utaw-logo.webp" alt="UTAW" width="70px" height="70px" />
        <LinkOverlay
          as={ReactRouterLink}
          to="/"
          _hover={{
            textDecoration: `underline ${
              colorMode === "light" ? "red" : "gold"
            }`,
          }}
        >
          <Heading size="lg" color={colorMode === "light" ? "red" : "gold"}>
            Help Centre
          </Heading>
        </LinkOverlay>
      </LinkBox>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </HStack>
  );
}
