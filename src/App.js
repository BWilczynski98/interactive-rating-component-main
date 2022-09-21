import React from "react";
import RateCard from "./components/RateCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {useTheme} from '@emotion/react'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: " hsl(216, 12%, 54%)",
        darkBlue: "#1e252f",
        mediumDarkBlue: "#242c36",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  });

  theme.typography.h5 = {
    color: theme.palette.primary.white,
    fontSize: "1.563rem",
    fontFamily: "Overpass, sans-serif",
    fontWeight: "700",
  };

  theme.typography.body1 = {
    color: theme.palette.primary.lightGrey,
    fontSize: "0.938rem",
    fontFamily: "Overpass, sans-serif",
    fontWeight: "400",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <RateCard />
      </ThemeProvider>
    </>
  );
}

export default App;
