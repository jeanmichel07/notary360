import React from "react";
import Paper from "@mui/material/Paper";
import useStyles from "./style";

const DashboardCard = (props) => {
  const { children, showRightContent, title, icon } = props;
  const classes = useStyles();
  const paperElevation = 16;

  return (
    <Paper sx={{ borderRadius: 2 }} elevation={paperElevation}>
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          <div className={classes.icon}>{icon}</div>
          <div className={classes.title}>{title}</div>
        </div>

        {showRightContent && <div>Right</div>}
      </div>
      <div className={classes.content}>{children}</div>
    </Paper>
  );
};

export default DashboardCard;
