import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CircularProgress,
  Button,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGetItemsQuery } from "../api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ItemsScreen = () => {
  const dispatch = useDispatch();
  const { data: items, isLoading, isError } = useGetItemsQuery();
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");

  const getImageUrl = (img) => {
    try {
      const url = new URL(img);
      console.log(url);
      return img;
    } catch {
      return `http://localhost:3000/img/${img.split("/").pop()}`;
    }
  };

  const getSortedItems = (items) => {
    if (!items) return [];

    const filteredItems = search
      ? items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : items;

    const sortedItems = [...filteredItems];
    switch (sortBy) {
      case "descending":
        return sortedItems.sort((a, b) => b.price - a.price);
      case "ascending":
        return sortedItems.sort((a, b) => a.price - b.price);
      case "alphabetical":
        return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sortedItems;
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAlert({
      open: true,
      severity: "success",
      message: "Item added to cart",
    });
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, severity: "success", message: "" });
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Typography>Failed to fetch items</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          color: "#D6D6D6",
          textAlign: "center",
        }}
      >
        Browse Our Items
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginBottom: 4,
          gap: 2,
          marginX: "5.5rem",
        }}
      >
        <Typography sx={{ color: "#D6D6D6" }}>Filters: </Typography>
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
      </Box>
      <Grid container spacing={4} sx={{ marginX: "5rem" }}>
        {getSortedItems(items).map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                width: "19rem",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                border: "2px solid #2C3440",
                backgroundColor: "#2C3440",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={getImageUrl(item.img)}
                alt={item.name}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: "0.05rem",
                    color: "#D6D6D6",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: "0.05rem",
                    color: "#D6D6D6",
                    mb: 2,
                  }}
                >
                  ${item.price}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleAddToCart(item)}
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    backgroundColor: "#4CAF50",
                    "&:hover": {
                      backgroundColor: "#45a049",
                    },
                    width: "100%",
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{
            width: "100%",
            backgroundColor:
              alert.severity === "success" ? "#4CAF50" : "#f44336",
            color: "#fff",
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ItemsScreen;
