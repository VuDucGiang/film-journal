import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/common/error-page.jsx";
import ActiveUser from "./components/auth/active-user.jsx";
import ResetPassword from "./components/auth/reset-password.jsx";
import ForgotPassword from "./components/auth/forgot-password";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.js";
import Root from "./components/common/layout/root.jsx";
import Home from "./components/home/index.jsx";
import Journal from "./components/journal/index.jsx";
import Lists from "./components/lists/index.jsx";
import Members from "./components/members/index.jsx";
import ReviewDetail from "./components/review-detail/index.jsx";
import ProfileUser from "./components/profile-user/index.jsx";
import FilmDetail from "./components/film-detail/index.jsx";
import JournalArticle from "./components/journal-article/index.jsx";
import Films from "./components/films/index.jsx";
import ListDetail from "./components/list-detail/index.jsx";
import { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import SignInSide from "./components/auth/sign-in.jsx";
import SignUp from "./components/auth/sign-up.jsx";
import { ProfileTab } from "./components/profile-user/tabs/profile";
import { Box } from "@mui/material";
import SearchPage from "./components/search";
import FilmsSearch from "./components/search/films_search.jsx";
import AllFilmReviews from "./components/film-detail/collections/reviews.jsx";
import ReviewsTab from "./components/profile-user/tabs/reviews/index.jsx";
import ReviewsSearch from "./components/search/reviews_search.jsx";
import ListsSearch from "./components/search/lists_search.jsx";
import MemberSearch from "./components/search/members_search.jsx";
import AllFilmLists from "./components/film-detail/collections/lists.jsx";
import AllFilmLikes from "./components/film-detail/collections/likes.jsx";

const axios = Axios.create({
  baseURL: "https://localhost:44358/api/",
});
const cache = new LRU({ max: 10 });
configure({ axios, cache });

const router = createBrowserRouter([
  {
    path: "/active-user",
    element: <ActiveUser />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignInSide />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "films",
        element: <Films />,
      },
      {
        path: "films/:filmId",
        element: <FilmDetail />,
      },
      {
        path: "films/:filmId/reviews",
        element: <AllFilmReviews />,
      },
      {
        path: "films/:filmId/lists",
        element: <AllFilmLists />,
      },
      {
        path: "films/:filmId/likes",
        element: <AllFilmLikes />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "journals",
        element: <Journal />,
      },
      {
        path: "journals/:journalId",
        element: <JournalArticle />,
      },
      {
        path: "u/:username/",
        element: <ProfileUser />,
        children: [
          {
            path: "",
            element: <ProfileTab />,
          },
          {
            path: "reviews",
            element: <ReviewsTab></ReviewsTab>,
          },
          {
            path: "watchlist",
            element: <Box />,
          },
          {
            path: "lists",
            element: <Box />,
          },
          {
            path: "likes",
            element: <Box />,
          },
          // {
          //   path: "tags",
          //   element: <Box />,
          // },
          {
            path: "activity",
            element: <Box />,
          },
          {
            path: "network",
            element: <Box />,
          },
          {
            path: "edit-profile",
            element: <Box />,
          },
        ],
      },
      {
        path: "u/:username/reviews/:reviewId",
        element: <ReviewDetail />,
      },
      {
        path: "u/:username/lists/:listId",
        element: <ListDetail />,
      },
      {
        path: "search/",
        element: <SearchPage />,
        children: [
          {
            path: "films/:searchParams",
            element: <FilmsSearch />,
          },
          {
            path: "reviews/:searchParams",
            element: <ReviewsSearch />,
          },
          {
            path: "lists/:searchParams",
            element: <ListsSearch />,
          },
          {
            path: "members/:searchParams",
            element: <MemberSearch />,
          },
          // {
          //   path: "tags/:searchParams",
          //   element: <FilmsSearch />,
          // },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
