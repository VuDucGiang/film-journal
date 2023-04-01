import { Button, Tooltip, Typography } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { formatCompactNumber } from "../../utils/number.js";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  textTransform: "none",
  color: "#bcd",
  background: "transparent",
  "&:hover": {
    background: "#456",
  },
});

export default function ViewsLikesLists(props) {
  const { views, likes, lists } = props;
  return (
    <>
      <Tooltip title={`Reviewed by ${views} users`}>
        <CustomButton>
          <RemoveRedEyeRoundedIcon style={{ fontSize: "18px", color: "#00c030" }} />
          <Typography
            fontSize={14}
            pl={0.5}
            sx={(theme) => ({ color: "#00c030", [theme.breakpoints.not("xs")]: { display: "none" } })}
          >
            Views
          </Typography>
          <Typography fontSize={13} pl={1}>
            {formatCompactNumber(views)}
          </Typography>
        </CustomButton>
      </Tooltip>
      <Tooltip title={`Appears in ${lists} lists`}>
        <CustomButton>
          <GridViewSharpIcon style={{ fontSize: "18px", color: "#40bcf4" }} />
          <Typography
            fontSize={14}
            pl={0.5}
            sx={(theme) => ({ color: "#40bcf4", [theme.breakpoints.not("xs")]: { display: "none" } })}
          >
            Lists
          </Typography>
          <Typography fontSize={13} pl={1}>
            {formatCompactNumber(lists)}
          </Typography>
        </CustomButton>
      </Tooltip>
      <Tooltip title={`Liked by ${likes} users`}>
        <CustomButton>
          <FavoriteIcon style={{ fontSize: "18px", color: "#ff9010" }} />
          <Typography
            fontSize={14}
            pl={0.5}
            sx={(theme) => ({ color: "#ff9010", [theme.breakpoints.not("xs")]: { display: "none" } })}
          >
            Likes
          </Typography>
          <Typography fontSize={13} pl={1}>
            {formatCompactNumber(likes)}
          </Typography>
        </CustomButton>
      </Tooltip>
    </>
  );
}
