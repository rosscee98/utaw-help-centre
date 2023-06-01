import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ContentsMenu from "./InlineMenu";
import { PortableText } from "@portabletext/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { DesktopViewContext } from "../../../contexts";
import { useContext } from "react";

function computePortableTextComponents(colorMode) {
  return {
    marks: {
      link: ({ value, children }) => (
        <Link isExternal href={value?.href} variant={`${colorMode}Emphasis`}>
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
          }}
        >
          {children}
        </ul>
      ),
    },
  };
}

export default function GuideContents({ guide }) {
  const { title, sections } = guide;
  const isDesktopView = useContext(DesktopViewContext);
  const { colorMode } = useColorMode();
  const portableTextComponents = computePortableTextComponents(colorMode);

  if (!sections)
    return (
      <Flex
        flexDirection="column"
        width="100%"
        marginLeft={isDesktopView ? "20px" : "auto"}
      >
        <Heading as="h1" size="2xl" marginBottom="30px">
          {title}
        </Heading>
        <Text>There&apos;s nothing here yet.</Text>
      </Flex>
    );

  return (
    <Flex
      flexDirection="column"
      width="100%"
      marginLeft={isDesktopView ? "20px" : "auto"}
    >
      <Heading as="h1" size="2xl" marginBottom="30px">
        {title}
      </Heading>
      {isDesktopView ? null : <ContentsMenu sections={sections} />}
      {sections.map(({ title, slug, content, children }, index) => {
        const isFinalSection = index === sections.length - 1;
        return (
          <Box key={title}>
            <Heading id={slug.current} marginBottom="20px">
              {title}
            </Heading>
            <PortableText value={content} components={portableTextComponents} />
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
            {isFinalSection ? null : <Divider marginY="30px" />}
          </Box>
        );
      })}
    </Flex>
  );
}

GuideContents.propTypes = {
  guide: PropTypes.object,
};
