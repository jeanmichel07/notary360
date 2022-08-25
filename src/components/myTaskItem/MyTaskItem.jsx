import React from "react";
import useStyles from "./style";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const MyTaskItem = (props) => {
  const { label, date, status } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MoreVertIcon sx={{ color: "gray" }} />
      <CheckBoxOutlineBlankIcon sx={{ color: "gray", height: 20, width: 20 }} />
      <div className={classes.content}>
        <div>
          <p className={classes.label}>{label}</p>
        </div>
        <div className={classes.row}>
          <p className={classes.date}>{date}</p>
          <p className={classes.status}>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default MyTaskItem;
