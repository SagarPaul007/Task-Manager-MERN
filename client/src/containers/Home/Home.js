import React from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import {
  CircularProgress,
  Typography,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import PendingIcon from "@material-ui/icons/AssignmentLate";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import bg from "../../static/bg.svg";
import Nav from "../../components/Nav";
import Tasks from "../../components/Tasks";
import { useFetchUser } from "./Home.hooks";
import useStyles from "./Home.styles";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { data, isLoading } = useFetchUser();

  if (isLoading) {
    return (
      <div className={cx(classes.root, classes.placeCenter)}>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Nav data={data} />
      {!data?.success && (
        <Grid container spacing={1} className={classes.container}>
          <Grid item xs={12} md={6} sm={6}>
            <img src={bg} alt="bg" className={classes.bg} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <Container className={classes.content}>
              <Typography variant="h6">
                This is the only Task Manager that you will ever need.
              </Typography>
              <div
                className={cx(classes.flex, classes.alignCenter, classes.mt2)}
              >
                <PendingIcon color="primary" className={classes.mr1} />
                <Typography variant="subtitle2" color="textSecondary">
                  Plan and Schedule your tasks.
                </Typography>
              </div>
              <div
                className={cx(classes.flex, classes.alignCenter, classes.mt1)}
              >
                <AccessTimeIcon color="primary" className={classes.mr1} />
                <Typography variant="subtitle2" color="textSecondary">
                  Set a reminder.
                </Typography>
              </div>
              <div
                className={cx(classes.flex, classes.alignCenter, classes.mt1)}
              >
                <CheckCircleIcon color="primary" className={classes.mr1} />
                <Typography variant="subtitle2" color="textSecondary">
                  Complete your tasks and get stars.
                </Typography>
              </div>
              <div
                className={cx(classes.flex, classes.alignCenter, classes.mt3)}
              >
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.mr2}
                  onClick={() => navigate("/login")}
                >
                  Log In
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </div>
            </Container>
          </Grid>
        </Grid>
      )}
      {data.success && (
        <>
          <div className={classes.user}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.mr2}
            >
              {`Welcome, ${data.user?.name}.`}
            </Typography>
            <Button color="primary" variant="outlined">
              Create Task
            </Button>
          </div>
          <div className={classes.tasks}>
            <Tasks tasks={data?.user?.tasks || []} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
