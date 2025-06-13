import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ search, setSearch }) => {
  return (
    <TextField
      id="search"
      label="Search Items"
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        width: "30rem",
        "& .MuiOutlinedInput-root": {
          color: "#D6D6D6",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D6D6D6",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D6D6D6",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D6D6D6",
          },
          "& input": {
            color: "#D6D6D6",
            caretColor: "#D6D6D6",
          },
        },
        "& .MuiInputLabel-outlined": {
          color: "#D6D6D6",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
          color: "#D6D6D6",
        },
        "& .MuiSelect-icon": {
          color: "#D6D6D6",
        },
      }}
    />
  );
};

export default SearchBar;
