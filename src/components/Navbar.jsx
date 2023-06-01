import { HStack, Heading, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <HStack borderBottom="1px solid lightgray" paddingBottom="10px">
      <LinkBox as={HStack} gap="5px">
        <Image src="utaw-logo.webp" alt="UTAW" width="70px" height="70px" />
        <LinkOverlay
          as={ReactRouterLink}
          to="/"
          _hover={{ textDecoration: "underline tomato" }}
        >
          <Heading size="lg" color="red">
            Help Centre
          </Heading>
        </LinkOverlay>
      </LinkBox>
    </HStack>
  );
}
