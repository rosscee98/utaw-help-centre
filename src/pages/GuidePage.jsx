import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import ContentsMenu from "../components/ContentsMenu";
import { redundancyPageData } from "../redundancy-data";

export default function GuidePage() {
  const { title, sections } = redundancyPageData;

  return (
    <>
      <Heading as="h1" size="2xl" marginBottom="30px">
        {title}
      </Heading>
      <ContentsMenu sections={sections} />
      <Divider marginY="20px" />
      <Box>
        {sections.map(({ title, content, children }) => (
          <Box key={title} marginY="30px">
            <Heading key={title}>{title}</Heading>
            {content ? <Text>{content}</Text> : null}
            {children
              ? children.map(({ title, content }) => (
                  <Box key={title} marginY="10px">
                    <Heading as="h3" size="md">
                      {title}
                    </Heading>
                    <Text>{content}</Text>
                  </Box>
                ))
              : null}
          </Box>
        ))}
      </Box>
    </>
  );
}
