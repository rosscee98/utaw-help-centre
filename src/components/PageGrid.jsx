import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const pages = [
  { title: "Redundancy", color: "tomato" },
  { title: "Issues with management", color: "blue" },
  { title: "Organising", color: "green" },
  { title: "tbc", color: "orange" },
];

export default function PageGrid() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ sm: 5, md: 10 }}>
      {pages.map(({ title, color }) => (
        <Flex
          key={title}
          bg={color}
          height="100px"
          alignItems="end"
          padding="10px"
        >
          <Heading color="white" size="lg">
            {title}
          </Heading>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
