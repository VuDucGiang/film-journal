import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";
import ReviewPreview from "../../common/review-preview.jsx";

export default function AllFilmReviews() {
  return (
    <Container sx={{ mt: 10, color: "#9ab", pb: 5 }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={5}>
        <Stack gap={5} width={{ sm: 170 }}>
          <NavBar />
          <ReviewFilters
            filterValues={["Popularity", "Highest Rating", "Lowest Rating", "Most Recent", "Earliest"]}
            showFrom={true}
          />
        </Stack>
        <Box flex={1}>
          <Typography color={"#fff"} fontStyle={"italic"}>
            There are 200 reviews of <strong>Avatar the Airbender</strong>
          </Typography>
          <Stack divider={<Divider />}>
            {Array.from({ length: 15 }).map((i, idx) => (
              <React.Fragment key={idx}>
                <ReviewPreview
                  title={"A film title"}
                  releasedYear={2022}
                  content={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
                    " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                  }
                  username={"bahiepnguyen"}
                  fullname={"Nguyen Ba Hiep"}
                  ratings={4}
                  likeCount={10}
                  commentCount={50}
                  reviewDate={new Date()}
                  notShowFilmCard={true}
                  notShowTitle={true}
                />
              </React.Fragment>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
