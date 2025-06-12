import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  IconButton,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  if (items.length === 0) {
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
          Your cart is empty
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: "90vh" }}>
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
        Shopping Cart
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center",  marginX: "5rem"}}>
        <Grid item xs={12} md={7} sx={{ width: "45%" }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#2C3440",
              border: "2px solid #2C3440",
            }}
          >
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 3,
                  p: 2,
                  backgroundColor: "#1F262E",
                  borderRadius: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#D6D6D6",
                      fontWeight: "bold",
                      minWidth: "200px",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                      size="small"
                      onClick={() => handleDecreaseQuantity(item.id)}
                      sx={{ color: "#D6D6D6" }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography
                      sx={{
                        color: "#D6D6D6",
                        minWidth: "30px",
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleIncreaseQuantity(item.id)}
                      sx={{ color: "#D6D6D6" }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#D6D6D6",
                      fontWeight: "bold",
                      minWidth: "100px",
                      textAlign: "right",
                    }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveItem(item.id)}
                    sx={{ color: "#D6D6D6" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={5} sx={{ width: "45%" }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "#2C3440",
              border: "2px solid #2C3440",
              height: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: "bold",
                letterSpacing: "0.1rem",
                color: "#D6D6D6",
              }}
            >
              Order Summary
            </Typography>

            <Box sx={{ mb: 4 }}>
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography sx={{ color: "#D6D6D6" }}>
                    {item.name} ({item.quantity})
                  </Typography>
                  <Typography sx={{ color: "#D6D6D6" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 3, backgroundColor: "#D6D6D6" }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#D6D6D6" }}
              >
                Total
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#D6D6D6" }}
              >
                ${total.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#4CAF50",
                height: "48px",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartScreen;
