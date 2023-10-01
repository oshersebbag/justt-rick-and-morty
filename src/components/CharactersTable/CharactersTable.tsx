import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, TableSortLabel } from "@mui/material";
import CharacterRow from "./CharacterRow";
import { Character } from "../../types/Character";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useEffect } from "react";

interface CharactersTableProps {
  characters: Character[];
}

export default function CharactersTable({ characters = [] }: CharactersTableProps) {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [rows, setRows] = React.useState(characters);
  const [isSingleResult, setIsSingleResult] = React.useState<boolean>(
    characters.length === 1
  );

  useEffect(() => {
    setRows(characters);
    setIsSingleResult(characters.length === 1);
  }, [characters]);

  const sortById = () => {
    const sortedData = [...rows];
    if (order === "asc") setOrder("desc");
    else setOrder("asc");

    sortedData.sort((a, b) => {
      if (order === "asc") {
        return b.id - a.id;
      } else if (order === "desc") {
        return a.id - b.id;
      }
      return 0;
    });
    setRows(sortedData);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <TableContainer component="div" sx={{ width: "80%", height: "600px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" style={{ width: "10%" }}>
                <TableSortLabel
                  IconComponent={UnfoldMoreIcon}
                  sx={{
                    "& .MuiTableSortLabel-icon": {
                      color: "white !important",
                    },
                  }}
                  active
                  direction={order}
                  onClick={sortById}
                >
                  I.d
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "20%" }}>
                Name
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "15%" }}>
                Species
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "15%" }}>
                Status
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "15%" }}>
                Origin
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "15%" }}>
                Gender
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: "10%" }}>
                More
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <CharacterRow
                key={row.id}
                character={row}
                isSingleResult={isSingleResult}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
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
