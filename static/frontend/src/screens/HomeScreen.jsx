import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const HomeScreen = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          height: "90vh",
          gap: 4,
          p: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            width: "65%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Typography variant="h2" color="#D6D6D6" fontWeight="bold">
            Welcome to RandoStore
          </Typography>
          <Typography variant="h5" color="#D6D6D6">
            Your one-stop shop for all your needs
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "65%",
              color: "#D6D6D6",
              borderColor: "#D6D6D6",
              height: "64px",
              borderRadius: 0,
              fontSize: "1.25rem",
              borderWidth: 3,
              "&:hover": {
                borderWidth: 3.5,
              },
            }}
          >
            View our Items
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "65%",
              color: "#D6D6D6",
              borderColor: "#D6D6D6",
              height: "64px",
              borderRadius: 0,
              fontSize: "1.25rem",
              borderWidth: 3,
              "&:hover": {
                borderWidth: 3.5,
              },
            }}
          >
            Add an Item
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeScreen;
