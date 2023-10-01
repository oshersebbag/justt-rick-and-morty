import { Alert, Box } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "styled-components";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <StatusBar />
      <LoadingMsg severity="info">
        I'm Loading here! take a deep breath :)
      </LoadingMsg>
      <StatusBar />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;
const LoadingMsg = styled(Alert)`
  width: 80%;
`;

const StatusBar = styled(LinearProgress)`
  width: 80%;
`;
