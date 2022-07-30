import React from "react";
import cx from "classnames";
import dayjs from "dayjs";

import {
  TextField,
  InputAdornment,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import CreateIcon from "@material-ui/icons/Create";
import DescriptionIcon from "@material-ui/icons/Description";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import CallMadeIcon from "@material-ui/icons/CallMade";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import ErrorIcon from "@material-ui/icons/Error";

import { fetchAPI } from "../../utils/common";
import DrawerHeader from "../DrawerHeader";

import useStyles from "./AddEditTask.styles";

const AddEditTask = ({ initialDetails, close, action, pushToSnackbar }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  const [taskData, setTaskData] = React.useState(
    initialDetails
      ? initialDetails
      : {
          title: "",
          description: "",
          priority: "low",
          dueDate: new Date(),
        }
  );

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const addEditHandler = async (data, action) => {
    setLoading(true);
    const res = await fetchAPI({
      url: `/tasks/${action}`,
      method: "POST",
      body: data,
    });
    if (res?.success) {
      pushToSnackbar(res.message, "success");
      setLoading(false);
      close();
    } else {
      pushToSnackbar(res.message || "Something went wrong", "error");
      setLoading(false);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <DrawerHeader message={`${action} task`} close={close} />
        <div className={classes.form}>
          <TextField
            variant="outlined"
            fullWidth
            label="Title"
            name="title"
            className={classes.mt2}
            value={taskData.title}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CreateIcon color="primary" />
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Description"
            name="description"
            required
            className={classes.mt2}
            value={taskData.description}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <DescriptionIcon color="primary" />
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
          <TextField
            id="datetime-local"
            label="Due Date"
            type="datetime-local"
            className={classes.mt2}
            fullWidth
            required
            variant="outlined"
            name="dueDate"
            defaultValue={new Date(dayjs().add(1, "day"))
              .toISOString()
              .slice(0, -8)}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              svg: { color: "primary" },
              input: { color: "primary" },
              label: { color: "primary" },
            }}
            onChange={handleChange}
          />
          <Grid
            alignItems="center"
            container
            spacing={1}
            className={classes.mt2}
          >
            <Grid item xs={3}>
              <Typography
                style={{ color: "gray" }}
                variant="body1"
                className={cx(classes.flex, classes.alignCenter)}
              >
                <ErrorIcon color="primary" className={classes.mr1} />
                <span>Priority :</span>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <ToggleButtonGroup
                color="primary"
                value={taskData.priority}
                exclusive
                name="priority"
                onChange={(event, newValue) =>
                  setTaskData({ ...taskData, priority: newValue })
                }
              >
                <ToggleButton value="low">
                  <CallReceivedIcon className={classes.mr1} color="primary" />
                  <span>Low</span>
                </ToggleButton>
                <ToggleButton value="medium">
                  <SwapVertIcon className={classes.mr1} color="primary" />
                  <span>Medium</span>
                </ToggleButton>
                <ToggleButton value="high">
                  <CallMadeIcon className={classes.mr1} color="primary" />
                  <span>High</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            className={classes.mt2}
            disabled={loading}
            onClick={() => addEditHandler(taskData, action)}
          >
            {action}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddEditTask;
