"use client";

import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#f5009b",
      },
      secondary: {
        main: "#00dbeb",
      },
    },
    typography: {
      fontFamily: "VT323, monospace",
    },
    components: {
      MuiTypography: {
        defaultProps: {
          color: "#a323d1",
          lineHeight: 0.8,
        },
      },
      MuiChip: {
        defaultProps: {
          component: "button",
        },
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: "none",
          },
        },
      },
    },
  })
);

export default theme;
