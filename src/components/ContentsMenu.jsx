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

export default function ContentsMenu({ sections }) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Text>Contents</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <OrderedList>
            {sections.map(({ title, id, children }) => (
              <Box key={title}>
                <Link as={HashLink} to={`/redundancy#${id}`} fontWeight="bold">
                  {title}
                </Link>
                <Flex flexDirection="column">
                  {children
                    ? children.map(({ title, id }) => (
                        <Link
                          key={title}
                          as={HashLink}
                          to={`/redundancy#${id}`}
                          marginLeft="20px"
                          smooth
                          marginY="4px"
                          lineHeight="18px"
                        >
                          {title}
                        </Link>
                      ))
                    : null}
                </Flex>
              </Box>
            ))}
          </OrderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

ContentsMenu.propTypes = {
  sections: PropTypes.array,
};
