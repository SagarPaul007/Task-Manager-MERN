import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  flex: {
    display: "flex",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  mr2: {
    marginRight: theme.spacing(2),
  },
}));
