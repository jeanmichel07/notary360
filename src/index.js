import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <div className="container-fluid">
          <App />
        </div>
      </BrowserRouter>
    </MantineProvider>
  </ThemeProvider>
);
