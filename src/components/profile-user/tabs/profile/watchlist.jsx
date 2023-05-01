import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../../../home/popular-lists.jsx";
import { Link } from "react-router-dom";

export const WatchList = ({ data }) => {
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={3}>
          watchlist
        </Typography>
        <Link to={"watchlist"}>
          <Typography variant={"caption"} textTransform={"uppercase"} sx={{ ":hover": { color: "#40bcf4" } }}>
            {"More"}
          </Typography>
        </Link>
      </Box>
      <Divider />
      <Link to={`watchlist`}>
        <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
          {data?.List && <FilmCardsStackedFive posters={data.List} />}
        </Box>
      </Link>
    </Box>
  );
};
