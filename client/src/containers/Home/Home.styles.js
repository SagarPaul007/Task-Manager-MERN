import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
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
  container: {
    padding: theme.spacing(0, 2),
    width: "100%",
    minHeight: "calc(100vh - 64px)",
    alignItems: "center",
  },
  bg: {
    width: "100%",
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  content: {
    marginTop: theme.spacing(2),
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    padding: theme.spacing(4, 3),
  },
  paper: {
    padding: theme.spacing(2),
  },
  user: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 3),
  },
}));
