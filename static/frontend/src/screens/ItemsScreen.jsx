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
} from "@mui/material";
import { useGetItemsQuery } from "../api/api";

const ItemsScreen = () => {
    const {data: items, isLoading, isError} = useGetItemsQuery();

  console.log(items);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/items");
//         if (!response.ok) {
//           throw new Error("Failed to fetch items");
//         }
//         const data = await response.json();
//         setItems(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          backgroundColor: "#1F262E",
        }}
      >
        <CircularProgress sx={{ color: "#D6D6D6" }} />
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
          backgroundColor: "#1F262E",
        }}
      >
        <Typography color="#D6D6D6">Failed to fetch items</Typography>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 8,
        backgroundColor: "#1F262E",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#D6D6D6",
          mb: 6,
          fontWeight: "bold",
          letterSpacing: "0.1rem",
        }}
      >
        Browse Our Items
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                width: "20rem",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                backgroundColor: "#2C3440",
                border: "2px solid transparent",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.name}
                sx={{
                  objectFit: "cover",
                  borderBottom: "2px solid #1F262E",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#D6D6D6",
                    fontWeight: "bold",
                    letterSpacing: "0.05rem",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#D6D6D6",
                    fontWeight: "bold",
                    letterSpacing: "0.05rem",
                  }}
                >
                  ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ItemsScreen;
