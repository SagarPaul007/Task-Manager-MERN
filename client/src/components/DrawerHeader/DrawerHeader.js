import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const DrawerHeader = ({ message, close }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "5px",
        padding: "5px",
      }}
    >
      <IconButton
        style={{ marginRight: "5px" }}
        onClick={close}
        color="primary"
      >
        <CloseIcon />
      </IconButton>
      <Typography style={{ textTransform: "capitalize" }} variant="h6">
        {message}
      </Typography>
    </div>
  );
};

export default DrawerHeader;
