import { Box, Heading, Text } from "@chakra-ui/react";
import ContentsMenu from "../components/ContentsMenu";
import { redundancyPageData } from "../redundancy-data";
import { useEffect } from "react";

export default function GuidePage() {
  const { title, sections } = redundancyPageData;

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView();
    }
  });

  return (
    <>
      <Heading as="h1" size="2xl" marginBottom="30px">
        {title}
      </Heading>
      <ContentsMenu sections={sections} />
      <Box>
        {sections.map(({ title, id, content, children }) => (
          <Box key={title} marginY="30px">
            <Heading id={id} key={id} tabindex="-1">
              {title}
            </Heading>
            {content ? <Text>{content}</Text> : null}
            {children
              ? children.map(({ title, id, content }) => (
                  <Box key={id} marginY="10px">
                    <Heading id={id} as="h3" size="md" tabindex="-1">
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
