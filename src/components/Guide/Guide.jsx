import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import SidebarContents from "./components/SidebarMenu";
import GuideContents from "./components/GuideContents";
import { DesktopViewContext } from "../../contexts";

export default function Guide({ guide }) {
  const isDesktopView = useContext(DesktopViewContext);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView();
    }
  });

  return (
    <Flex
      alignItems="start"
      gap="20px"
      width={isDesktopView ? "90%" : "100%"}
      marginX="auto"
    >
      {isDesktopView ? <SidebarContents sections={guide.sections} /> : null}
      <GuideContents guide={guide} />
    </Flex>
  );
}

Guide.propTypes = {
  guide: PropTypes.object,
};
