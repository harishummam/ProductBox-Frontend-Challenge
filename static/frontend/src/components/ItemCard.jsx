import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemCard = ({ item, handleAddToCart }) => {
  const getImageUrl = (img) => {
    try {
      const url = new URL(img);
      console.log(url);
      return img;
    } catch {
      return `http://localhost:3000/img/${img.split("/").pop()}`;
    }
  };

  return (
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
  );
};

export default ItemCard;
