import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1F262E",
        color: "white",
        margin: 0,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          onClick={() => navigate("/")}
          sx={{
            flexGrow: 1,
            fontSize: "1.5rem",
            letterSpacing: "0.2rem",
            cursor: "pointer",
            color: "#D6D6D6",
          }}
        >
          RANDO STORE
        </Typography>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Button
            color="inherit"
            sx={{
              color: "#D6D6D6",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
            }}
            component={Link}
            to="/items"
          >
            Items
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#D6D6D6",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
            }}
            component={Link}
            to="/add-item"
          >
            Add Item
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#D6D6D6",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
            }}
            component={Link}
            to="/cart"
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
