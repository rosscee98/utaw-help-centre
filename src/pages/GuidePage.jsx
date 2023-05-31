import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";
import ContentsMenu from "../components/ContentsMenu";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";

export default function GuidePage({ guide }) {
  const { title, sections } = guide;

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
        {sections?.map(({ title, slug, content, children }) => (
          <Box key={title} marginY="30px">
            <Heading id={slug.current} key={slug.current}>
              {title}
            </Heading>
            <PortableText value={content} />
            {children?.map(({ title, slug, content }) => (
              <Box key={slug.current} marginY="10px">
                <Heading id={slug.current} as="h3" size="md">
                  {title}
                </Heading>
                <PortableText value={content} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
}

GuidePage.propTypes = {
  guide: PropTypes.object,
};
