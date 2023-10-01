import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Box>
      <HeaderContainer />
      <LogoContainer>
        <img src="/logo.svg" alt="logo" /> <Circle />
      </LogoContainer>
    </Box>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(162, 131, 184, 0.8),
      #f7f7f7
    ),
    url("https://images6.alphacoders.com/909/909641.png");
  width: 100%;
  height: 217px;
  position: relative;
  background-size: cover;
  background-position: center;
  margin-bottom: 150px;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.palette.success.main};
  border: ${(props) => props.theme.palette.primary.main} 3px solid;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: circle 10s linear infinite;

  @keyframes circle {
    0% {
      transform: rotate(0deg) translate(-105px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(-105px) rotate(-360deg);
    }
  }
`;
