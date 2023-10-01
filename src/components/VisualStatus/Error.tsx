import { Alert, Box } from "@mui/material";
import React from "react";

const Error: React.FC = () => {

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:"50px",
        gap: "20px"
      }}
    >
      <Alert  severity="info" sx={{width: "80%"}}>Please Try Again! I bet your search has a typo :)</Alert>
    </Box>
  );
};

export default Error;
