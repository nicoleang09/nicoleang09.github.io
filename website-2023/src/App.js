import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themeTypography from "./theme-typography";
import ExperienceSection from "./sections/Experience";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeTypography}>
        <CssBaseline />
        <ExperienceSection />
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