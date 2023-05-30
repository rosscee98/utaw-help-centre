import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const pages = [
  { title: "Redundancy", slug: "/redundancy", color: "tomato" },
  {
    title: "Issues with management",
    slug: "/issues-with-management",
    color: "blue",
  },
  { title: "Organising", slug: "/organising", color: "green" },
  { title: "tbc", color: "orange" },
];

export default function PageGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
      {pages.map(({ title, slug, color }) => (
        <LinkBox
          key={slug}
          as={Flex}
          color="white"
          bg={color}
          height="100px"
          alignItems="end"
          padding="10px"
        >
          <Heading color="white" size="lg">
            <LinkOverlay as={ReactRouterLink} to={slug}>
              {title}
            </LinkOverlay>
          </Heading>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
}
