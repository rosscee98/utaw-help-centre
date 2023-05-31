import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GuidePage from "./pages/GuidePage";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import { getGuides } from "./contentService";

export default function App() {
  const [guides, setGuides] = useState(null);

  useEffect(() => {
    getGuides().then(setGuides).catch(console.error);
  }, []);

  return (
    <Box padding="15px">
      <Navbar />
      <Box marginY="20px" width={{ base: "auto", md: "60vw" }} marginX="auto">
        <Routes>
          <Route path="/" element={<LandingPage guides={guides} />} />
          {guides?.map((guide) => (
            <Route
              path={guide.slug.current}
              key={guide.slug.current}
              element={<GuidePage guide={guide} />}
            />
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
