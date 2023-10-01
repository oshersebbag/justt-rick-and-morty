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

const SearchId: React.FC = () => {
  const [searchId, setSearchId] = useState("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [{ data, loading, error }, refetch] = useGetCharactersById(searchId);

  const handleSearch = () => {
    if (searchId.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      refetch();
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
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            onKeyDownCapture={handleKeyDown}
            placeholder="Search for characters by I.d."
            id="fullWidth"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <Search sx={{ fill: "#333333" }} />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              "&.MuiInputBase-input.MuiOutlinedInput-input ::placeholder": {
                color: "blue",
              },
            }}
          />

          <Button disableElevation onClick={handleSearch}>
            GO{" "}
          </Button>
        </Box>
      </Box>

      {isEmpty ? (
        <SearchToView />
      ) : error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : data ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "0px 10%",
          }}
        >
          <CharacterCard
            name={data.name}
            id={data.id}
            image={data.image}
            status={data.status}
            origin={data.origin.name}
            gender={data.gender}
            species={data.species}
          />
        </Box>
      ) : (
        <Fallback />
      )}
    </>
  );
};

export default SearchId;
