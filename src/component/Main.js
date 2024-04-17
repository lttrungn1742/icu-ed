
import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Box } from "@mui/material";
import Volumn from "./Volumn";
import _Date from "./_Date";

const Main = () => {

  const [value, setValue] = React.useState(0);

  return (
    <Box width="80%" margin="auto">
       <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Thời gian" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Thể tích kết thúc" icon={<DateRangeIcon />} />
      </BottomNavigation>
      <div hidden={value != 0}>
        <Volumn/>
      </div>
      <div hidden={value != 1}>
        <_Date/>
      </div>
    </Box>

  );
};

export default Main;
