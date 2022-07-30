import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Nav from "../../components/Nav/Nav";
import Snackbar from "../../components/Snackbar";
import { fetchAPI } from "../../utils/common";
import useStyles from "./SignUp.styles";

const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [snackbarData, setSnackbarData] = React.useState({
    open: false,
    message: "",
    type: "",
  });
  const [userData, setUserData] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const pushToSnackbar = (message, type) => {
    setSnackbarData({
      open: true,
      message,
      type,
    });
  };

  const signup = async (data = {}, match = "") => {
    if (!data.name || !data.username || !data.email || !data.password) {
      pushToSnackbar("Please fill in all fields", "error");
      return;
    } else if (data.password !== match) {
      pushToSnackbar("Passwords do not match", "error");
      return;
    } else {
      const res = await fetchAPI({
        url: "/users/register",
        method: "POST",
        body: data,
      });
      if (res?.success) {
        localStorage.setItem("taskAuthToken", res.token);
        navigate("/");
      } else {
        pushToSnackbar(res?.message || "Something went wrong", "error");
        return;
      }
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Nav />
        <Grid
          container
          direction="column"
          spacing={1}
          className={classes.container}
        >
          <Grid item xs={12}>
            <h1 className={classes.colorPrimary}>Sign Up</h1>
          </Grid>
          <Grid item xs={12} className={classes.formContainer}>
            <TextField
              className={classes.mb2}
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              onChange={handleChange}
            />
            <TextField
              className={classes.mb2}
              variant="outlined"
              fullWidth
              label="Username"
              name="username"
              onChange={handleChange}
            />
            <TextField
              className={classes.mb2}
              variant="outlined"
              fullWidth
              label="Email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              className={classes.mb2}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              autoComplete="current-password"
              name="password"
              onChange={handleChange}
            />
            <TextField
              className={classes.mb2}
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className={classes.mb2}
              onClick={() => signup(userData, confirmPassword)}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Already have an account? <a href="/login">Login</a>
            </Typography>
          </Grid>
        </Grid>
      </div>
      {snackbarData.open && (
        <Snackbar data={snackbarData} setData={setSnackbarData} />
      )}
    </>
  );
};

export default SignUp;
