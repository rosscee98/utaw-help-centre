import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ sm: 5, md: 10 }}>
      {pages.map(({ title, slug, color }) => (
        <Link key={slug} to={slug}>
          <Flex bg={color} height="100px" alignItems="end" padding="10px">
            <Heading color="white" size="lg">
              {title}
            </Heading>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  );
}
