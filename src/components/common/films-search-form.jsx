import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star.js";

export default function FilmsSearchForm() {
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [filmName, setFilmName] = useState("");

  const [listYear, setListYear] = useState([
    { label: "Year", value: "" },
    { label: "Upcoming", value: "upcomming" },
    { label: "2020s", value: "2020s" },
    { label: "2010s", value: "2010s" },
    { label: "2000s", value: "2000s" },
    { label: "1990s", value: "1990s" },
    { label: "1980s", value: "1980s" },
    { label: "1970s", value: "1970s" },
    { label: "1960s", value: "1960s" },
    { label: "1950s", value: "1950s" },
    { label: "1940s", value: "1940s" },
    { label: "1930s", value: "1930s" },
    { label: "1920s", value: "1920s" },
    { label: "1910s", value: "1910s" },
    { label: "1900s", value: "1900s" },
    { label: "1890s", value: "1890s" },
    { label: "1880s", value: "1880s" },
    { label: "1870s", value: "1870s" },
  ]);

  const [listRating, setListRating] = useState([
    { label: "Rating", value: "" },
    { label: "5", value: "5" },
    { label: "4", value: "4" },
    { label: "3", value: "3" },
    { label: "2", value: "2" },
    { label: "1", value: "1" },
  ]);

  const [listGenre, setListGenre] = useState([
    { label: "Genre", value: "" },
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Animation", value: "animation" },
    { label: "Comedy", value: "comedy" },
    { label: "Crime", value: "crime" },
    { label: "Documentary", value: "documentary" },
    { label: "Drama", value: "srama" },
    { label: "Family", value: "family" },
    { label: "Fantasy", value: "fantasy" },
    { label: "History", value: "history" },
    { label: "Horror", value: "horror" },
    { label: "History", value: "history" },
    { label: "Music", value: "music" },
    { label: "Mystery", value: "mystery" },
    { label: "Romance", value: "romance" },
    { label: "Since Fiction", value: "since-fiction" },
    { label: "TV Movie", value: "tv-movie" },
    { label: "Thriller", value: "thriller" },
    { label: "War", value: "war" },
    { label: "Western", value: "western" },
  ]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleFilmNameChange = (event) => {
    setFilmName(event.target.value);
  };

  const handleSubmitFormSearch = (event) => {
    event.preventDefault();

    // Router to page '/films/search?filmName=...&year=...&genre=...&rating=...
    let url =
      "/films/search?" +
      (filmName.length > 0 ? "filmName=" + filmName + "&" : "") +
      (rating.length > 0 ? "rating=" + rating + "&" : "") +
      (genre.length > 0 ? "genre=" + genre + "&" : "") +
      (year.length > 0 ? "year=" + year : "");

    console.log("url", url);
  };

  const handleClear = () => {
    setYear("");
    setGenre("");
    setRating("");
    setFilmName("");
  };

  return (
    <Box className="films-search-form">
      <form onSubmit={handleSubmitFormSearch}>
        <FormControl
          sx={{
            minWidth: 120,
            marginRight: "16px",
            marginBottom: "16px",
            " fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
            ":hover fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
          }}
          size="small"
        >
          <InputLabel sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }} id="films-search-year-label">
            Year
          </InputLabel>
          <Select
            labelId="films-search-year-label"
            id="films-search-year"
            value={year}
            onChange={handleYearChange}
            sx={{ color: "#9ab" }}
          >
            {listYear.map((year, idx) => (
              <MenuItem key={idx} value={year.value}>
                {year.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            minWidth: 120,
            marginRight: "16px",
            marginBottom: "16px",
            " fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
            ":hover fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
          }}
          size="small"
        >
          <InputLabel
            sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }}
            id="films-search-rating-label"
          >
            Rating
          </InputLabel>
          <Select
            labelId="films-search-rating-label"
            id="films-search-rating"
            value={rating}
            onChange={handleRatingChange}
            sx={{ color: "#9ab" }}
          >
            {listRating.map((rating, idx) => (
              <MenuItem key={idx} value={rating.value}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {rating.label}{" "}
                  {rating.value > 0 && <StarIcon sx={{ marginLeft: "4px", fontSize: "22px" }}></StarIcon>}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            minWidth: 180,
            marginRight: "16px",
            marginBottom: "16px",
            " fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
            ":hover fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
          }}
          size="small"
        >
          <InputLabel
            sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }}
            id="films-search-genre-label"
          >
            Genre
          </InputLabel>
          <Select
            labelId="films-search-genre-label"
            id="films-search-genre"
            value={genre}
            onChange={handleGenreChange}
            sx={{ color: "#9ab" }}
          >
            {listGenre.map((genre, idx) => (
              <MenuItem key={idx} value={genre.value}>
                {genre.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="film-name-search"
          label="Find a film..."
          variant="outlined"
          value={filmName}
          onChange={handleFilmNameChange}
          size="small"
          sx={{
            marginRight: "24px",
            marginBottom: "16px",
            " input,label,fieldset": {
              borderColor: "#9ab",
              color: "#9ab",
            },
            ":hover input,label,fieldset": {
              borderColor: "#9ab",
              color: "#9ab",
            },
          }}
        />
        <Box sx={{ display: { xs: "block", md: "inline-block" } }}>
          <Button
            type="clear"
            size="medium"
            sx={{
              marginRight: "16px",
              border: "1px solid #9ab",
              ":hover": { border: "1px solid #9ab" },
            }}
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            type="submit"
            size="medium"
            sx={{
              backgroundColor: "#9ab !important",
              color: "#000",
              ":hover": { backgroundColor: "#9ab !important" },
            }}
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}