import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackBarAlert = ({ alert, handleCloseAlert }) => {
  return (
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
          backgroundColor: alert.severity === "success" ? "#4CAF50" : "#f44336",
          color: "#fff",
        }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarAlert;
