import { Alert, Box } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Fallback: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        gap: "20px",
      }}
    >
      <LinearProgress  sx={{ width: "80%" }} />
      <Alert severity="info" sx={{ width: "80%" }}>
        I'm Loading here! take a deep breath :)
      </Alert>
      <LinearProgress sx={{ width: "80%" }} />
    </Box>
  );
};

export default Fallback;