import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  items: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #80808059",
    marginTop: 2,
  },
  item1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  status: {
    padding: "3px 10px 3px 10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  ref: {
    fontSize: 10,
    color: "gray",
    marginBottom: 0,
  },
  statusLabel: {
    fontSize: 8,
    fontWeight: "bolder",
    marginBottom: -2,
    marginLeft: 5,
  },
  vent: { fontSize: 14, marginBottom: 0 },
  name: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default useStyles;
