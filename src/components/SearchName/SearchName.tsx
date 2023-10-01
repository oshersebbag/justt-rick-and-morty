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

const SearchName: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [{ data, loading, error }, refetch] =
    useGetCharactersByName(searchName);

  const handleInitial = () => {
    refetch();
  };

  useEffect(() => handleInitial(), []);

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
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "80%",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#EFEFF4",
            padding: "20px",
            gap: "10px",
          }}
        >
          <OutlinedInput
            value={searchName}
            onKeyDownCapture={handleKeyDown}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Browse for characters"
            id="fullWidth"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <Search sx={{ fill: "#333333" }} />
                </IconButton>
              </InputAdornment>
            }
          />

          <Button disableElevation onClick={handleSearch}>
            GO{" "}
          </Button>
        </Box>
      </Box>

      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : data?.results ? (
        <>
          <CharactersTable characters={data.results} />
        </>
      ) : (
        <Fallback />
      )}
    </>
  );
};

export default SearchName;
