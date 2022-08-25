import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    marginBottom: 0,
  },
  date: {
    fontSize: 12,
    borderRadius: 10,
    color: "grey",
    marginBottom: 0,
  },
  status: {
    padding: "2px 7px 2px 7px",
    fontSize: 10,
    fontWeight: "bolder",
    backgroundColor: "#ff000029",
    borderRadius: 10,
    color: "red",
    marginBottom: 0,
    marginLeft: 5,
  },
  content: {
    marginLeft: 10,
  },
});

export default useStyles;
