import { HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <HStack borderBottom="1px solid lightgray" paddingBottom="10px">
      <Link to="/">
        <HStack gap="5px">
          <Image src="utaw-logo.webp" width="70px" />
          <Heading size="lg" color="tomato">
            Help Centre
          </Heading>
        </HStack>
      </Link>
    </HStack>
  );
}
