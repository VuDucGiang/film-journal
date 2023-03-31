import { Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";

export default function ReviewCard(props) {
  const [review, setReview] = React.useState(props.review);

  const handleLikeFilm = (filmId) => {};

  const formatTotalNumber = (number) => {
    if (number < 1000) return number;
    if (number < 10000) return Math.round((number / 1000) * 10) / 10 + "k";
    else return Math.round(number / 1000) + "k";
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        marginBottom: "24px",
        paddingBottom: "24px",
        borderBottom: "1px solid #9ab",
        color: "#9ab",
        ":last-child": {
          border: "none",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "60px", md: "80px" },
          aspectRatio: "2/3",
          overflow: "hidden",
          marginRight: "20px",
          border: "2px solid #9ab0",
          transition: "0.2s",
          boxSizing: "content-box",
          ":hover": {
            border: "2px solid #9ab",
          },
          ":hover .btn-action-card-film": {
            opacity: "1",
          },
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={review.film.thumbnail}
          alt="Image-review-film"
          sx={{ width: "100%", minHeight: "100%" }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            transition: "0.2s",
            opacity: "0",
          }}
          className="btn-action-card-film"
        >
          <Box
            sx={{
              backgroundColor: "#000000d1",
              lineHeight: "1px",
              borderRadius: "6px",
            }}
          >
            <FavoriteIcon
              sx={{
                cursor: "pointer",
                color: review.film.isLiked ? "#ff9010" : "inherit",
                margin: "2px 4px",
                ":hover": {
                  color: review.film.isLiked ? "#e08012" : "#8592a0",
                },
                fontSize: "18px",
              }}
              onClick={() => handleLikeFilm(review.film.id)}
            ></FavoriteIcon>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "1" }}>
        <Box
          sx={{
            marginBottom: "6px",
            " a": {
              fontSize: { xs: "22px", md: "28px" },
            },
            " a:hover": {
              color: "#40bcf4",
            },
          }}
        >
          <Link
            to={"/" + review.user.userName + "/reviews/" + review.id}
            style={{
              fontWeight: "700",
              marginRight: "8px",
              display: "inline-block",
              transition: "0.2s",
              textDecoration: "none",
            }}
          >
            {review.film.name}
          </Link>
          <Box sx={{ display: "inline-block" }}>{review.film.yearRelease}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "star", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "start" },
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: { xs: "8px", sm: "0" },
              "a:nth-child(1):hover": {
                border: "1px solid #9ab",
              },
              "a:nth-child(2)": {
                fontSize: { xs: "14px", md: "16px" },
              },
              "a:nth-child(2):hover": {
                color: "#fff",
              },
            }}
          >
            <Link
              to={"/" + review.user.userName}
              style={{
                width: "24px",
                aspectRatio: "1/1",
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "6px",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                src={review.user.avatar}
              ></Box>
            </Link>
            <Link
              to={"/" + review.user.userName}
              style={{
                textDecoration: "none",
                fontWeight: "600",
                marginRight: "12px",
                transition: "0.2s",
              }}
            >
              {review.user.userFullname}
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", "a:hover": { color: "#fff" } }}>
            <Box sx={{ lineHeight: "1px", marginRight: "12px" }}>
              {Array.from({ length: review.rate }).map((i, idx) => (
                <StarIcon key={idx} sx={{ color: "#00c030", fontSize: { xs: "18px", md: "20px" } }}></StarIcon>
              ))}
            </Box>
            <Link
              to={"/" + review.user.userName + "/reviews/" + review.id}
              style={{
                display: "flex",
                alignItems: "center",
                transition: "0.2s",
                textDecoration: "none",
              }}
            >
              <ChatBubbleIcon sx={{ fontSize: "20px", marginRight: "4px" }}></ChatBubbleIcon>
              <Box sx={{ fontSize: { xs: "14px", md: "14px" } }}>{formatTotalNumber(review.totalComment)}</Box>
            </Link>
          </Box>
        </Box>

        <Box sx={{ fontSize: { xs: "14px", md: "16px" } }}>{review.content}</Box>
      </Box>
    </Box>
  );
}