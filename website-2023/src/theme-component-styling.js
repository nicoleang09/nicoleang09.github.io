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
  },
};

export default themeComponentStyling;
