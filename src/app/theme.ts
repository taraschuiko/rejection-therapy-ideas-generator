"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5009b",
    },
    secondary: {
      main: "#00dbeb",
    },
  },
  typography: {
    fontFamily: "Jaro, sans-serif",
    h1: {
      fontWeight: 900,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "#a323d1",
      },
    },
    MuiChip: {
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
});

export default theme;
