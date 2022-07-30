import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({ data, setData }) {
  const handleClose = () => {
    setData({
      ...data,
      open: false,
    });
  };

  return (
    <Snackbar
      open={data?.open || false}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={data?.type || "success"}
        sx={{ width: "100%" }}
      >
        {data?.message || "Done!"}
      </Alert>
    </Snackbar>
  );
}
