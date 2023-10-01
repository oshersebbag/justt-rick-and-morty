import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import SearchId from "../SearchId/SearchId";
import SearchName from "../SearchName/SearchName";

const Menu: React.FC = () => {
  const [value, setValue] = React.useState<0 | 1>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: 0 | 1) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="BROWSE" sx={{ borderRadius: "8px 0 0 8px" }} />
          <Tab label="PICK A CHARACTER" sx={{ borderRadius: "0 8px 8px 0" }} />
        </Tabs>
      </Box>
      {value === 0 && (<SearchName /> )}
      {value === 1 && (<SearchId />)}
    </>
  );
};

export default Menu;
