import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Nav from "../../components/Nav/Nav";
import Snackbar from "../../components/Snackbar";
import { fetchAPI } from "../../utils/common";
import useStyles from "./Login.styles";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [snackbarData, setSnackbarData] = React.useState({
    open: false,
    message: "",
    type: "",
  });
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

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

  const login = async (data) => {
    if (!data.username || !data.password) {
      pushToSnackbar("Please fill in all fields", "error");
      return;
    } else {
      const res = await fetchAPI({
        url: "/users/login",
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
            <h1 className={classes.colorPrimary}>Sign In</h1>
          </Grid>
          <Grid item xs={12} className={classes.formContainer}>
            <TextField
              className={classes.mb2}
              variant="outlined"
              fullWidth
              label="Username"
              name="username"
              onChange={handleChange}
            />
            <TextField
              className={classes.mb1}
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              autoComplete="current-password"
              name="password"
              onChange={handleChange}
            />
            <Typography
              align="right"
              variant="subtitle2"
              className={classes.mb2}
            >
              <a
                style={{ textDecoration: "none", color: "gray" }}
                href="/reset-password"
              >
                Forgot password?
              </a>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className={classes.mb2}
              onClick={() => login(userData)}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Don't have an account? <a href="/signup">Sign Up</a>
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

export default Login;
