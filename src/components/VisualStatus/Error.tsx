import { Alert, Box } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const Error: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorMsg severity="info">
        Please Try Again! I bet your search has a typo :)
      </ErrorMsg>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

const ErrorMsg = styled(Alert)`
  width: 80%;
`;
