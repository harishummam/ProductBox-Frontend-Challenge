import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectSortBy = ({ sortBy, setSortBy }) => {
  return (
    <FormControl sx={{ width: "10rem" }} variant="outlined">
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          color: "#D6D6D6",
          "&.Mui-focused": {
            color: "#D6D6D6",
          },
        }}
      >
        Sort by
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Sort by"
        sx={{
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
          "& .MuiSelect-icon": {
            color: "#D6D6D6",
          },
        }}
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value={"descending"}>Price: High to Low</MenuItem>
        <MenuItem value={"ascending"}>Price: Low to High</MenuItem>
        <MenuItem value={"alphabetical"}>Name: A to Z</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSortBy;
