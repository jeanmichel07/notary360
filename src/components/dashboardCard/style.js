import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content: {
    padding: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dbe6ef",
    padding: "5px 20px 5px 20px",
  },
  headerWhite: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f4ff",
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
});

export default useStyles;
