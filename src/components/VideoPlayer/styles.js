import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "white",
    minWidth: "70%",
  },
  inputRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  iFrame: {
    border: "none",
    width: 1,
    minWidth: "100%",
    minHeight: 500,
  },
}));

export default useStyles;
