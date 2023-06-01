import PropTypes from "prop-types";
import { Box, Flex, Link, OrderedList } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

export default function SidebarMenu({ sections }) {
  return (
    <OrderedList
      minWidth="310px"
      width="310px"
      position="sticky"
      top="0"
      maxHeight="100vh"
      paddingY="30px"
      paddingRight="30px"
      overflowY="auto"
      borderRight="1px solid lightgray"
    >
      {sections?.map(({ title, slug, children }) => (
        <Box key={title} marginY="6px">
          {/* TODO: remove hardcoded 'redundancy' from link */}
          <Link
            as={HashLink}
            to={`/redundancy#${slug.current}`}
            fontWeight="bold"
            smooth
          >
            {title}
          </Link>
          <Flex flexDirection="column" marginLeft="20px">
            {children?.map(({ title, slug }) => (
              <Link
                key={title}
                as={HashLink}
                to={`/redundancy#${slug.current}`}
                smooth
                marginY="6px"
                lineHeight="20px"
              >
                {title}
              </Link>
            ))}
          </Flex>
        </Box>
      ))}
    </OrderedList>
  );
}

SidebarMenu.propTypes = {
  sections: PropTypes.array,
};
