import { HStack, Heading, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack gap="5px">
      <Image src="utaw-logo.webp" width="70px" />
      <Heading size="lg" color="tomato">
        Help Centre
      </Heading>
    </HStack>
  );
}
