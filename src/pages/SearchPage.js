import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { ThemeContext } from "../components/ThemeContext";
import ProductCard from "../components/ProductCard";

import dummyData from "../data/dummy-data";

function SearchPage() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Box height="100vh" style={{ backgroundColor: theme.background }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            <Typography style={{ color: theme.text.main }}>
              SearchPage
            </Typography>
            <ProductCard product={dummyData[0]} />
          </Grid>
        </Box>
      )}
    </ThemeContext.Consumer>
  );
}

export default SearchPage;
