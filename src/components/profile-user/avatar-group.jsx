import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Box, Typography } from "@mui/material";

export default function GroupAvatars(props) {
  const { followers } = props;
  // console.log(followers);

  if (!followers) return <></>;
  return (
    <Box display={"flex"} alignItems={"center"} sx={{ fontSize: 13 }} my={1.5}>
      {followers.Total >= 2 ? (
        <AvatarGroup
          max={3}
          sx={{
            "& .MuiAvatarGroup-avatar": { height: 30, width: 30, border: "1px solid #456", fontSize: "inherit" },
          }}
        >
          {followers.List.map((i, idx) => (
            <Avatar key={idx} alt={i.FullName} src={i.Avatar} />
          ))}
        </AvatarGroup>
      ) : (
        <Avatar key={idx} alt={followers.List[0].FullName} src={followers.List[0].Avatar} />
      )}
      <Typography fontSize={"inherit"} ml={1}>
        {"Followed by "}
        {followers.Total <= 3
          ? followers.List.map((i) => i.FullName ?? i.UserName).join(", ")
          : followers.List.map((i) => i.FullName ?? i.UserName).join(", ") + " and more"}
      </Typography>
    </Box>
  );
}
