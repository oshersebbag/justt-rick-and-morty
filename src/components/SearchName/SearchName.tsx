import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect, useState, KeyboardEvent } from "react";
import CharactersTable from "../CharactersTable/CharactersTable";
import { useGetCharactersByName } from "../../hooks/characters/useGetCharactersByName";
import Error from "../VisualStatus/Error";
import Loading from "../VisualStatus/Loading";
import Fallback from "../VisualStatus/Fallback";
import styled from "styled-components";

const SearchName: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [{ data, loading, error }, refetch] =
    useGetCharactersByName(searchName);

  useEffect(() => {
    refetch();
  }, []);

  const handleSearch = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error("Error while fetching:", error);
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
            value={searchName}
            onKeyDownCapture={handleKeyDown}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Browse for characters"
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

      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : data?.results ? (
        <CharactersTable characters={data.results} />
      ) : (
        <Fallback />
      )}
    </>
  );
};

export default SearchName;

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
