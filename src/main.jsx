import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  components: {
    Link: {
      variants: {
        dark: () => ({
          _hover: {
            color: "yellow.400",
          },
        }),
        lightEmphasis: () => ({
          color: "blue",
        }),
        darkEmphasis: () => ({
          color: "yellow",
          _hover: {
            color: "yellow.400",
          },
        }),
      },
      defaultProps: {
        variant: "default",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
