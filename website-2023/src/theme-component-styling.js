import { createTheme } from "@mui/material";
import themeColors from "./theme-colors";

const themeComponentStyling = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&.selected": {
            padding: "12px",
            color: themeColors.darkBrown,
            fontWeight: "bold",
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "10px",
            transition: "textDecoration 0.5s ease-in-out",
          },
        },
        text: {
          color: themeColors.textGrey,
          fontWeight: "bold",
          fontSize: "0.9rem",
          padding: "12px",
          "&:hover": {
            color: themeColors.darkBrown,
            backgroundColor: "transparent",
          },
        },
        contained: {
          backgroundColor: themeColors.darkBrown,
          border: "2px solid transparent",
          "&:hover": {
            backgroundColor: themeColors.pureWhite,
            color: themeColors.darkBrown,
            border: "2px solid",
            borderColor: themeColors.darkBrown,
          },
        },
        outlined: {
          color: themeColors.darkBrown,
          border: "2px solid",
          borderColor: themeColors.darkBrown,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: themeColors.darkBrown,
            color: themeColors.pureWhite,
            border: "2px solid transparent",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: "block",
          color: themeColors.darkBrown,
          textDecoration: "none",
          marginBottom: "8px",
        },
      },
    },
  },
};

export default themeComponentStyling;
