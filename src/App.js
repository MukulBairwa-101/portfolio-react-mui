import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Tech from "./Components/Skills/Tech";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import Contact2 from "./Components/Contact/Contact2";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header theme={theme} />
      <ToastContainer />
      <Home />
      <About />
      <Tech />
      <Portfolio />
      <Contact2 />
    </ThemeProvider>
  );
};

export default App;
