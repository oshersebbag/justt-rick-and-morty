import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SearchToView: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "background.default",
          padding: "50px 0px 100px",
        }}
      >
        <img src="/search.svg" alt="logo" />
        <SerchToViewText>
          Search for a character i.d in order to view a character
        </SerchToViewText>
      </Box>
    </Box>
  );
};

export default SearchToView;

const SerchToViewText = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  color: ${(props) => props.theme.palette.secondary.dark};
  margin: 10px 0px;
`;
