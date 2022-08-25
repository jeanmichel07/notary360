import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content: {},
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dbe6ef",
    padding: "5px 20px 5px 10px",
  },
  headerWhite: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f4",
    padding: "5px 20px 5px 20px",
  },
  icon: {},
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    fontSize: 14,
    marginTop: 4,
  },
  status: {
    padding: "2px 7px 2px 7px",
    fontSize: 10,
    fontWeight: "bolder",
    backgroundColor: "#228be630",
    borderRadius: 10,
    color: "blue",
    marginBottom: 0,
    marginLeft: 5,
  },
});

export default useStyles;
