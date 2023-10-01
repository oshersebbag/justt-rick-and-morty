import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useState, KeyboardEvent } from "react";
import { useGetCharactersById } from "../../hooks/characters/useGetCharactersById";
import CharacterCard from "../CharcterCard/CharacterCard";
import Loading from "../VisualStatus/Loading";
import Error from "../VisualStatus/Error";
import SearchToView from "../VisualStatus/SearchToView";
import Fallback from "../VisualStatus/Fallback";
import { styled } from "styled-components";

const SearchId: React.FC = () => {
  const [searchId, setSearchId] = useState("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [{ data, loading, error }, refetch] = useGetCharactersById(searchId);

  const handleSearch = async () => {
    if (searchId.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      try {
        await refetch();
      } catch (error) {
        console.error("Error while fetching:", error);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Container>
        <SearchContainer>
          <OutlinedInput
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            onKeyDownCapture={handleKeyDown}
            placeholder="Search for characters by I.d."
            id="fullWidth"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />

          <Button disableElevation onClick={handleSearch}>
            GO
          </Button>
        </SearchContainer>
      </Container>

      {isEmpty ? (
        <SearchToView />
      ) : error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : data ? (
        <CharacterCardContainer>
          <CharacterCard
            name={data.name}
            id={data.id}
            image={data.image}
            status={data.status}
            origin={data.origin.name}
            gender={data.gender}
            species={data.species}
          />
        </CharacterCardContainer>
      ) : (
        <Fallback />
      )}
    </>
  );
};

export default SearchId;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  width: 80%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.palette.success.light};
  padding: 20px;
  gap: 10px;
`;

const SearchIcon = styled(Search)`
  fill: ${(props) => props.theme.palette.success.dark};
`;

const CharacterCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 10%;
`;
