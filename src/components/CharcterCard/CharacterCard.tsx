import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface CharacterCardProps {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: "Male" | "Female" | "Genderless" | "unknown";
  origin: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = (props) => {
  const { id, name, status, species, gender, origin, image } = props;

  return (
    <CardContainer>
      <Box>
        <CharacterImage src={image} alt={name} />
      </Box>
      <DescriptionContainer>
        <Title>DESCRIPTION</Title>
        <Grid container rowSpacing={2} columnSpacing={5}>
          <Grid item xs={4}>
            <ItemLabel>i.d</ItemLabel>
            <ItemInfo>{id}</ItemInfo>
          </Grid>
          <Grid item xs={4}>
            <ItemLabel>Name</ItemLabel>
            <ItemInfo>{name}</ItemInfo>
          </Grid>
          <Grid item xs={4}>
            <ItemLabel>Gender</ItemLabel>
            <ItemInfo>{gender}</ItemInfo>
          </Grid>
          <Grid item xs={4}>
            <ItemLabel>Origin</ItemLabel>
            <ItemInfo>{origin}</ItemInfo>
          </Grid>
          <Grid item xs={4}>
            <ItemLabel>Species</ItemLabel>
            <ItemInfo>{species}</ItemInfo>
          </Grid>
          <Grid item xs={4}>
            <ItemLabel>Status</ItemLabel>
            <ItemInfo>{status}</ItemInfo>
          </Grid>
        </Grid>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default CharacterCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
  gap: 50px;
  background: ${(props) => props.theme.palette.background.default};
`;

const CharacterImage = styled.img`
  border: ${(props) => props.theme.palette.primary.main} 5px solid;
  border-radius: 20px;
  height: inherit;
`;

const DescriptionContainer = styled.div`
  width: calc(100% - 50px);
  background-color: ${(props) => props.theme.palette.primary.light};
  box-shadow: ${(props) => props.theme.palette.secondary.light} -10px 10px 10px;
  border: 1px solid #f6f4fb;
  border-radius: 11px;
  padding: 30px;
`;

const ItemInfo = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.dark};
  margin: 10px 0px;
`;

const ItemLabel = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.secondary.dark};
  margin: 10px 0px;
`;
const Title = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.main};
`;
