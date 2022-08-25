import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    border: "1px solid",
    borderColor: "#80808059",
    borderRadius: 5,
    padding: "5px 10px 10px 10px",
  },
  titleContainer: {},
  title: {
    fontSize: 14,
    fontWeight: "bolder",
    marginBottom: 5,
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  firstValueContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 30,
    color: "#0000ffe0",
    fontWeight: "bolder",
  },
  valueLabel: {
    fontWeight: "bolder",
    fontSize: 12,
    color: "#0000ffe0",
  },
  secondValueContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
});

export default useStyles;
