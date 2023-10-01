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
import ExpandCircleDownSharpIcon from "@mui/icons-material/ExpandCircleDownSharp";
import { useEffect, useState } from "react";
import CharacterCard from "../CharcterCard/CharacterCard";

interface CharacterRowProps {
  character: Character;
  isSingleResult: boolean;
}

export default function CharacterRow({
  character,
  isSingleResult,
}: CharacterRowProps) {
  const [open, setOpen] = useState(isSingleResult);

  useEffect(() => {
    setOpen(isSingleResult);
  }, [isSingleResult]);

  return (
    <>
      <StyledTableRow key={character.name}>
        <StyledTableCell>{character.id}</StyledTableCell>
        <StyledTableCell>{character.name}</StyledTableCell>
        <StyledTableCell>{character.species}</StyledTableCell>
        <StyledTableCell>{character.status}</StyledTableCell>
        <StyledTableCell>{character.origin.name}</StyledTableCell>
        <StyledTableCell>{character.gender}</StyledTableCell>
        <StyledTableCell>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandUp /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <StyledCollapsable colSpan={7}>
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
        </StyledCollapsable>
      </TableRow>
    </>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.secondary.dark,
  },
}));

const StyledCollapsable = styled(TableCell)(({ theme }) => ({
  padding: "0px !important",
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

const ExpandUp = styled(ExpandCircleDownSharpIcon)`
color: ${(props) => props.theme.palette.primary.main};
transform: rotate(180deg);
`
