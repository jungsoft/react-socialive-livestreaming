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
  }
}));

export default useStyles;
