import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import themeTypography from "./theme-typography";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import themeComponentStyling from "./theme-component-styling";
import ContactSection from "./sections/Contact";
import HomeSection from "./sections/Home";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { initLinks, initOffsets } from "./components/main";

function App() {
  const mergedTheme = createTheme({
    ...themeTypography,
    ...themeComponentStyling,
  });

  useEffect(() => {
    initLinks();
    initOffsets();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={mergedTheme}>
        <CssBaseline />
        <NavBar />
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </ThemeProvider>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
