import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content: {
    padding: 5,
    minHeight: 240,
    cursor: "pointer",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dbe6ef",
    padding: "10px 20px 10px 20px",
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
