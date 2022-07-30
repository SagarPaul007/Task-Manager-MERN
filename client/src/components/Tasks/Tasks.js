import React from "react";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";

const Tasks = ({ tasks }) => {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Pending" />
          <Tab label="Completed" />
          <Tab label="Cancelled" />
          <Tab label="Archived" />
        </Tabs>
      </Box>
      {value === 0 && <Typography>pending</Typography>}
      {value === 1 && <Typography>completed</Typography>}
      {value === 2 && <Typography>cancelled</Typography>}
      {value === 3 && <Typography>archived</Typography>}
    </Box>
  );
};

export default Tasks;
