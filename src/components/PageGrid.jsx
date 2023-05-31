import PropTypes from "prop-types";
import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function PageGrid({ guides }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
      {guides?.map(({ title, slug, color }) => (
        <LinkBox
          key={slug.current}
          as={Flex}
          color="white"
          bg={color}
          height={{ base: "120px", md: "140px" }}
          alignItems="end"
          padding="10px"
        >
          <Heading color="white" size="lg">
            <LinkOverlay as={ReactRouterLink} to={slug.current}>
              {title}
            </LinkOverlay>
          </Heading>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
}

PageGrid.propTypes = {
  guides: PropTypes.array,
};
