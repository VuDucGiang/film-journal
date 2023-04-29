import Container from "@mui/system/Container";
import { Box } from "@mui/material";
import ReviewDetailMain from "./review-detail-main.jsx";
import ReviewCommentSection from "./review-comment-section.jsx";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import React from "react";
import { Loading } from "../common/loading.jsx";
import { PageNotExist } from "../common/page-not-exist.jsx";

const TakeLikedReviews = 10;
export default function ReviewDetail() {
  const { reviewId } = useParams();
  const [{ data: detail, loading: detailLoading, error: detailError }] = useAxios(
    `Reviews/${reviewId}/detail?limitUser=${TakeLikedReviews}`,
  );
  if (!detailLoading && !detail) return <PageNotExist />;

  return (
    <Container>
      <Box sx={{ marginTop: 10, mx: { md: 10, lg: 20 } }}>
        {/* Main */}
        {detailLoading ? <Loading paddingY={15} /> : <ReviewDetailMain data={detail} />}
        {/* Comments */}
        <ReviewCommentSection reviewId={reviewId} />
      </Box>
    </Container>
  );
}
