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
import SelectSortBy from "../components/SelectSortBy";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import SnackBarAlert from "../components/SnackBarAlert";

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
        <SelectSortBy sortBy={sortBy} setSortBy={setSortBy} />
        <SearchBar search={search} setSearch={setSearch} />
      </Box>
      <Grid container spacing={4} sx={{ marginX: "5rem" }}>
        {getSortedItems(items).map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <ItemCard item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      <SnackBarAlert alert={alert} handleCloseAlert={handleCloseAlert} />
    </Container>
  );
};

export default ItemsScreen;
