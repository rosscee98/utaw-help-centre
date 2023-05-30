import PropTypes from "prop-types";
import { Box, Button, OrderedList, Text, useBoolean } from "@chakra-ui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function ContentsMenu({ sections }) {
  const [isOpen, setIsOpen] = useBoolean();

  return (
    <Box bg="lightgray" paddingY="10px">
      <Button
        rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
        onClick={setIsOpen.toggle}
        variant="link"
        marginLeft="15px"
      >
        Contents
      </Button>
      {isOpen ? (
        <OrderedList>
          {sections.map(({ title, children }) => (
            <Box key={title}>
              <Text fontWeight="bold">{title}</Text>
              {children
                ? children.map(({ title }) => (
                    <Text key={title} marginLeft="20px">
                      {title}
                    </Text>
                  ))
                : null}
            </Box>
          ))}
        </OrderedList>
      ) : null}
    </Box>
  );
}

ContentsMenu.propTypes = {
  sections: PropTypes.array,
};
