import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useAddItemMutation } from "../api/api";
import SnackBarAlert from "../components/SnackBarAlert";

const AddItemScreen = () => {
  const [addItem] = useAddItemMutation();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img: "",
  });

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newItem = {
        ...formData,
        price: parseFloat(formData.price),
      };

      await addItem(newItem).unwrap();

      setAlert({
        open: true,
        message: "Item added successfully!",
        severity: "success",
      });

      setFormData({
        name: "",
        price: "",
        img: "",
      });
    } catch (err) {
      console.error("Failed to add item:", err);
      setAlert({
        open: true,
        message: "Failed to add item. Please try again.",
        severity: "error",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
        Add New Item
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "#2C3440",
          width: "70%",
          border: "2px solid #2C3440",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Item Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "#D6D6D6",
                "& fieldset": {
                  borderColor: "#D6D6D6",
                },
                "&:hover fieldset": {
                  borderColor: "#4CAF50",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4CAF50",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D6D6D6",
              },
            }}
          />

          <TextField
            fullWidth
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            inputProps={{ step: "0.01", min: "0" }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "#D6D6D6",
                "& fieldset": {
                  borderColor: "#D6D6D6",
                },
                "&:hover fieldset": {
                  borderColor: "#4CAF50",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4CAF50",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D6D6D6",
              },
            }}
          />

          <TextField
            fullWidth
            label="Image URL"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                color: "#D6D6D6",
                "& fieldset": {
                  borderColor: "#D6D6D6",
                },
                "&:hover fieldset": {
                  borderColor: "#4CAF50",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4CAF50",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D6D6D6",
              },
            }}
          />

          <Button
            type="submit"
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
            Add Item
          </Button>
        </Box>
      </Paper>
      <SnackBarAlert alert={alert} handleCloseAlert={handleCloseAlert} />
    </Container>
  );
};

export default AddItemScreen;
