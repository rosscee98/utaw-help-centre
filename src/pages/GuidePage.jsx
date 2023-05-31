import PropTypes from "prop-types";
import { Box, Divider, Heading, Link } from "@chakra-ui/react";
import ContentsMenu from "../components/ContentsMenu";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const portableTextComponents = {
  marks: {
    link: ({ value, children }) => (
      <Link isExternal href={value?.href} color="blue">
        {children} <ExternalLinkIcon />
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          "ul ul &": { marginBottom: "0" },
        }}
      >
        {children}
      </ul>
    ),
  },
};

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
      <Heading as="h1" size="2xl" marginY="30px">
        {title}
      </Heading>
      <ContentsMenu sections={sections} />
      <Box>
        {sections?.map(({ title, slug, content, children }, index) => (
          <Box key={title}>
            <Box marginY="40px">
              <Heading id={slug.current} key={slug.current} marginBottom="20px">
                {title}
              </Heading>
              <PortableText
                value={content}
                components={portableTextComponents}
              />
              {children?.map(({ title, slug, content }) => (
                <Box key={slug.current} marginY="30px">
                  <Heading
                    id={slug.current}
                    as="h3"
                    size="md"
                    marginBottom="10px"
                  >
                    {title}
                  </Heading>
                  <PortableText
                    value={content}
                    components={portableTextComponents}
                  />
                </Box>
              ))}
            </Box>
            {index < sections.length - 1 ? <Divider /> : null}
          </Box>
        ))}
      </Box>
    </>
  );
}

GuidePage.propTypes = {
  guide: PropTypes.object,
};
