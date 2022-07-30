import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Nav from "../../components/Nav/Nav";
import useStyles from "./SignUp.styles";

const SignUp = () => {
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
          <h1 className={classes.colorPrimary}>Sign Up</h1>
        </Grid>
        <Grid item xs={12} className={classes.formContainer}>
          <TextField
            className={classes.mb2}
            variant="outlined"
            fullWidth
            label="Name"
          />
          <TextField
            className={classes.mb2}
            variant="outlined"
            fullWidth
            label="Username"
          />
          <TextField
            className={classes.mb2}
            variant="outlined"
            fullWidth
            label="Email"
          />
          <TextField
            className={classes.mb2}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            autoComplete="current-password"
          />
          <TextField
            className={classes.mb2}
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className={classes.mb2}
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
  );
};

export default SignUp;
