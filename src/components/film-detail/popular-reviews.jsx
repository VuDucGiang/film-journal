import { Avatar, Box } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

const Populer_reviews = [
  {
    id: 1,
    name: "sophie",
    image: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    rating: 3.5,
    number_comment_reply: 53,
    comment: "james cameron had 13 years to change the font for the subtitles and still went with fucking papyrus",
    likes: 18491,
  },
  {
    id: 2,
    name: "Patrick Willems",
    image: "https://a.ltrbxd.com/resized/avatar/upload/2/6/7/4/1/9/shard/avtr-0-80-0-80-crop.jpg?v=a856408a78",
    rating: 4.5,
    number_comment_reply: 162,
    comment:
      "I don’t want to reduce this movie to just its technical aspects because I think the storytelling is genuinely pretty great but…I don’t know how they did this. Like watching the scenes where a live action human is running around the jungle with big blue aliens and I know the whole world is digital and the aliens are digital but I can’t see a single seam. Is the live action guy shot on a green screen? Is he actually just animated? How is none of this real? How is that water not real? Or is some of it real? I don’t get it. In this time where we’re used to vfx doing anything, nothing has really impressed us in years, but this? This is fucking impressive. Also Sigourney Weaver as her own teen alien daughter is such a wild move and she’s so great. Jim you madman.",
    likes: 12123,
  },
  {
    id: 3,
    name: "the film drunk",
    image:
      "https://a.ltrbxd.com/resized/avatar/twitter/1/2/7/3/1/1/1/shard/http___pbs.twimg.com_profile_images_1571602042879365120_ghpMDAQT-0-80-0-80-crop.jpg?v=f62659ab1b",
    rating: 4,
    number_comment_reply: 47,
    comment: "Leaving Pandora and coming back into our shit reality after the movie ends top 10 saddest moments",
    likes: 11338,
  },
];

export default function PopularReviews() {
  const calculate_rating = (number) => {
    let star = "";
    let int_number = parseInt(number);
    let redundancy = number - int_number;
    for (let n = 0; n < int_number; n++) {
      star += "★";
    }
    redundancy > 0 ? (star += "½") : (star += "");
    return star;
  };

  return (
    <Box className="populer_reviews">
      <Box className="tag_reviews">
        <p>POPULER REVIEWS</p>
        <p>MORE</p>
      </Box>
      {Populer_reviews.map((review_item, i) => (
        <Box key={i} className={"review_item"}>
          <Avatar src={review_item.image} />
          <Box className="title_review">
            <p className="attribution">
              Review by <b>{review_item.name}</b>{" "}
              <span className="rating_green rated-7"> {calculate_rating(review_item.rating)}</span>{" "}
              <ChatBubbleIcon fontSize="13px" style={{ lineHeight: "19.5px" }}></ChatBubbleIcon>{" "}
              {review_item.number_comment_reply}
            </p>
            <p className="comment">{review_item.comment}</p>
            <p className="like_link">
              <FavoriteIcon fontSize="19px"></FavoriteIcon>
              {review_item.likes} likes
            </p>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
