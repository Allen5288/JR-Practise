import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    onLogin();
    navigate("/projects");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h6">Please Login to continue</Typography>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
