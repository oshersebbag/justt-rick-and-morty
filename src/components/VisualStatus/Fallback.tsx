import { Alert } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "styled-components";

const Fallback: React.FC = () => {
  return (
    <FallbackContainer>
      <StatusBar />
      <FallbackMsg severity="info">
        I'm Loading here! take a deep breath :)
      </FallbackMsg>
      <StatusBar />
    </FallbackContainer>
  );
};

export default Fallback;

const FallbackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;
const FallbackMsg = styled(Alert)`
  width: 80%;
`;

const StatusBar = styled(LinearProgress)`
  width: 80%;
`;