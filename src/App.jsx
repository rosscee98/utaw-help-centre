import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GuidePage from "./pages/GuidePage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Box padding="15px">
      <Navbar />
      <Box marginY="20px">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/redundancy" element={<GuidePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
