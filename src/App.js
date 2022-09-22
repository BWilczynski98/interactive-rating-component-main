import React, { useState } from "react";
import RateCard from "./components/RateCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import SubmitAlert from "./components/SubmitAlert";

function App() {
  const [rating, setRating] = useState();
  const [submitHandle, setSubmitHandle] = useState(false);

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

  theme.typography.body2 = {
    color: theme.palette.primary.main,
    fontSize: "0.938rem",
    fontFamily: "Overpass, sans-serif",
    fontWeight: "400",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {!submitHandle ? (
          <RateCard setRating={setRating} setSubmitHandle={setSubmitHandle} />
        ) : (
          <SubmitAlert rating={rating} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
