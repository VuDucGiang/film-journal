import { Box, Divider, Tooltip, Typography } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star.js";
const compiledRatings = {
  each: {
    1: 10,
    2: 0,
    3: 15,
    4: 342,
    5: 100,
    6: 203,
    7: 121,
    8: 500,
    9: 22,
    10: 11,
  },
  total: 1000,
  avg: 3.9,
};

const RatingColumnMaxHeight = 80;

const RatingColumn = (props) => {
  const { value, label, total } = props;

  return (
    <Tooltip title={`${value} ratings of ${label / 2} stars (${((value / total) * 100).toFixed(0)}%)`}>
      <Box
        flexGrow={1}
        height={RatingColumnMaxHeight}
        display={"flex"}
        alignItems={"flex-end"}
        mr={"1px"}
        sx={{
          "&:hover": {
            cursor: "pointer",
            background: "rgba(255,255,255,0.1)",
            "& .rating-column": {
              background: "#6C839B",
            },
          },
        }}
      >
        <Box
          className={"rating-column"}
          width={"100%"}
          height={`${(value / total) * 100}%`}
          sx={{ background: "#456", borderRadius: "3px 3px 0 0" }}
        ></Box>
      </Box>
    </Tooltip>
  );
};

export default function CompiledRatings(props) {
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} mb={1.2}>
        <Typography fontSize={15}>RATINGS</Typography>
        <Typography variant={"body2"}>{compiledRatings.total}</Typography>
      </Box>
      <Divider variant={"fullWidth"} />
      <Box display={"flex"} alignItems={"flex-end"} mt={1}>
        <Box display={"flex"} alignItems={"baseline"}>
          <StarHalfIcon sx={{ fontSize: 12, mr: 0.5, color: "#00c030" }} />
        </Box>
        {Object.entries(compiledRatings.each).map(([rating, numOfRatings], idx) => (
          <RatingColumn key={idx} value={numOfRatings} label={rating} total={compiledRatings.total} />
        ))}
        <Box width={"3px"} />
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} gap={1}>
          <Typography
            variant={"h5"}
            textAlign={"center"}
            color={"#dbecff"}
            fontWeight={600}
            sx={{ textShadow: "0px 0px 20px #fff,0px 0px 20px #614ad3" }}
          >
            {compiledRatings.avg}
          </Typography>
          <Box display={"flex"} alignItems={"baseline"}>
            {Array.from({ length: 5 }).map((i, idx) => (
              <StarIcon key={idx} sx={{ fontSize: 12, color: "#00c030" }} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}