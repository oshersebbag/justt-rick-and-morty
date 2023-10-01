import styled from "styled-components";
import {
  Collapse,
  IconButton,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { Character } from "../../types/Character";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import CharacterCard from "../CharcterCard/CharacterCard";

interface CharacterRowProps {
  character: Character;
  isSingleResult: boolean;
}

export default function CharacterRow({ character, isSingleResult }: CharacterRowProps) {
  const [open, setOpen] = useState(isSingleResult);

  useEffect(() => {
    setOpen(isSingleResult);
  }, [isSingleResult]);

  return (
    <>
      <StyledTableRow key={character.name}>
        <StyledTableCell align="center">{character.id}</StyledTableCell>
        <StyledTableCell align="center">{character.name}</StyledTableCell>
        <StyledTableCell align="center">{character.species}</StyledTableCell>
        <StyledTableCell align="center">{character.status}</StyledTableCell>
        <StyledTableCell align="center">
          {character.origin.name}
        </StyledTableCell>
        <StyledTableCell align="center">{character.gender}</StyledTableCell>
        <StyledTableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CharacterCard
              name={character.name}
              id={character.id}
              image={character.image}
              status={character.status}
              origin={character.origin.name}
              gender={character.gender}
              species={character.species}
            />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.secondary.dark,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(4n + 1)": {
    backgroundColor: theme.palette.background.paper,
  },
  "&:nth-of-type(4n+3)": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-of-type(2n)": {
    backgroundColor: theme.palette.background.default,
  },
}));
