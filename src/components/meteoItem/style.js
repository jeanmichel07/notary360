import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 18,
    fontWeight: "bolder",
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: "bolder",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  value: {
    color: "gray",
    fontSize: 9,
    fontWeight: "normal",
    marginBottom: 5,
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infos: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default useStyles;
