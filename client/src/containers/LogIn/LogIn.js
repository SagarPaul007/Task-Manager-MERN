import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Nav from "../../components/Nav/Nav";
import useStyles from "./Login.styles";

const Login = () => {
  const classes = useStyles();
  return (
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
          />
          <TextField
            className={classes.mb1}
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            autoComplete="current-password"
          />
          <Typography align="right" variant="subtitle2" className={classes.mb2}>
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
  );
};

export default Login;
