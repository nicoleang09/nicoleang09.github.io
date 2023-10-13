import { createTheme } from "@mui/material";
import themeColors from "./theme-colors";

const themeTypography = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Roboto Flex', sans-serif",
      fontSize: "18px",
      color: themeColors.textGrey,
    },
    h1: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
    h2: {
      fontSize: "1.7rem",
      lineHeight: "1.7rem",
    },
    h3: {
      fontSize: "1.4rem",
      lineHeight: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      fontFamily: "'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
    },
    h4: {
      fontSize: "1.2rem",
      lineHeight: "1.2rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      marginBottom: "1rem",
    },
    link: {
      color: themeColors.darkBrown,
      transition: "color 0.5s ease-in-out",
      "&:hover": {
        color: themeColors.lightBrown,
        transition: "color 0.5s ease-in-out",
      },
    },
  },
});

export default themeTypography;
