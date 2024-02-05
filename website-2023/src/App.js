import logo from "./logo.svg";
import "./App.css";
import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import themeTypography from "./theme-typography";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import themeComponentStyling from "./theme-component-styling";
import ContactSection from "./sections/Contact";
import HomeSection from "./sections/Home";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { initLinks, initOffsets, scrollToTop } from "./components/main";
import Footer from "./components/Footer";
import scrollToTopButton from "./images/icons/top-arrow.png";

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
        <Footer />

        <IconButton
          sx={{ flexGrow: 0 }}
          onClick={scrollToTop}
          id="top-arrow-btn"
        >
          <img
            src={scrollToTopButton}
            style={{
              height: "2.25rem",
            }}
          />
        </IconButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
