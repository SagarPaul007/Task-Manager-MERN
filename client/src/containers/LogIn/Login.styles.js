import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  mb1: {
    marginBottom: theme.spacing(1),
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  container: {
    padding: theme.spacing(0, 2),
    maxWidth: "100%",
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    maxWidth: 500,
  },
}));
