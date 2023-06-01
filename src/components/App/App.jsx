import { Box, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./helpers/Navbar";
import { Route, Routes } from "react-router-dom";
import Error from "../Error";
import Guide from "../Guide";
import Landing from "../Landing";
import { useEffect, useState } from "react";
import { getGuides } from "../../contentService";
import { DesktopViewContext } from "../../contexts";

export default function App() {
  const [guides, setGuides] = useState(null);

  useEffect(() => {
    getGuides().then(setGuides).catch(console.error);
  }, []);

  return (
    <DesktopViewContext.Provider
      value={useBreakpointValue({ base: false, xl: true })}
    >
      <Box padding="15px">
        <Navbar />
        <Box marginY="20px">
          <Routes>
            <Route path="/" element={<Landing guides={guides} />} />
            {guides?.map((guide) => (
              <Route
                path={guide.slug.current}
                key={guide.slug.current}
                element={<Guide guide={guide} />}
              />
            ))}
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>
      </Box>
    </DesktopViewContext.Provider>
  );
}
