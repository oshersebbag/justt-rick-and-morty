import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SearchId from "../SearchId/SearchId";
import SearchName from "../SearchName/SearchName";

const Menu: React.FC = () => {
  const [value, setValue] = React.useState<0 | 1>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: 0 | 1) => {
    setValue(newValue);
  };

  return (
    <>
      <TabsContainer>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="BROWSE" />
          <Tab label="PICK A CHARACTER" />
        </Tabs>
      </TabsContainer>
      {value === 0 && <SearchName />}
      {value === 1 && <SearchId />}
    </>
  );
};

export default Menu;

const TabsContainer = styled.div`
  margin-bottom: 20px;
`;
