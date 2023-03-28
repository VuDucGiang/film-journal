import Container from "@mui/system/Container";
import { Box, Grid } from "@mui/material";
import FilmsListPopularFilms from "./list-popular-films";
import FilmsListPopularReviews from "./list-popular-reviews";
import FilmsSearchForm from "./films-search-form";
import FilmsAside from "./films-aside";

export default function Films() {
  return (
    <Container>
      <Box sx={{ marginTop: { xs: "32px", ms: "80px" }, color: "#9ab" }}>
        <FilmsSearchForm></FilmsSearchForm>
        <FilmsListPopularFilms></FilmsListPopularFilms>
        <Box>
          <Grid container spacing={8} columns={12}>
            <Grid item xs={12} md={9}>
              <FilmsListPopularReviews></FilmsListPopularReviews>
            </Grid>
            <Grid item xs={12} md={3}>
              <FilmsAside></FilmsAside>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}