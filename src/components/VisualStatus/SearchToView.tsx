import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SearchToView: React.FC = () => {
  return (
    <SearchToViewContainer>
      <ContentContainer>
        <img src="/search.svg" alt="logo" />
        <SerchToViewText>
          Search for a character i.d in order to view a character
        </SerchToViewText>
      </ContentContainer>
    </SearchToViewContainer>
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

const SearchToViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
background: ${(props) => props.theme.palette.background.default};
padding: 50px 0px 100px;
`;
