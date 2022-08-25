import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content: {
    padding: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  statusCollab: {
    padding: "2px 7px 2px 7px",
    fontSize: 10,
    fontWeight: "bolder",
    backgroundColor: "#228be630",
    borderRadius: 10,
    color: "blue",
    marginBottom: 0,
  },
  status: {
    padding: "2px 7px 2px 7px",
    fontSize: 10,
    fontWeight: "bolder",
    backgroundColor: "#228be630",
    borderRadius: 10,
    color: "gray",
    marginBottom: 0,
    marginLeft: 5,
  },
});

export default useStyles;
