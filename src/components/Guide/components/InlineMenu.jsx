import PropTypes from "prop-types";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

export default function InlineMenu({ sections }) {
  return (
    <Accordion allowToggle width="100%" marginBottom="30px">
      <AccordionItem>
        <AccordionButton>
          <Text>Contents</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <OrderedList>
            {sections?.map(({ title, slug, children }) => (
              <Box key={title}>
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
                      marginY="4px"
                      lineHeight="18px"
                    >
                      {title}
                    </Link>
                  ))}
                </Flex>
              </Box>
            ))}
          </OrderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

InlineMenu.propTypes = {
  sections: PropTypes.array,
};
