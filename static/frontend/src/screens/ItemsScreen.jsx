import React from "react";
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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGetItemsQuery } from "../api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ItemsScreen = () => {
  const dispatch = useDispatch();
  const { data: items, isLoading, isError } = useGetItemsQuery();


  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
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
      <Grid container spacing={4} sx={{ marginX: "5rem" }}>
        {items.map((item) => (
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
                image={`http://localhost:3000/img/${item.img.split("/").pop()}`}
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
    </Container>
  );
};

export default ItemsScreen;
