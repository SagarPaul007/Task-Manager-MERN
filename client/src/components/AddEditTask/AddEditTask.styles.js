import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: 500,
    height: "100vh",
    backgroundColor: "#F7FBFC",
  },
  flex: {
    display: "flex",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  mt1: {
    marginTop: theme.spacing(1),
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
  mr1: {
    marginRight: theme.spacing(1),
  },
  mr2: {
    marginRight: theme.spacing(2),
  },
  placeCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    margin: theme.spacing(0, 1),
  },
}));
