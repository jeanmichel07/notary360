import React from "react";
import Paper from "@mui/material/Paper";
import useStyles from "./style";

const DashboardCard = (props) => {
  const { children, showRightContent, title, icon, height, whiteBg } = props;
  const classes = useStyles();
  const paperElevation = 16;
  const headerStyles = whiteBg ? classes.headerWhite : classes.header;

  return (
    <Paper
      sx={{ borderTopRadius: 2, height: height ?? 285, cursor: "pointer" }}
      elevation={paperElevation}
    >
      <div className={headerStyles}>
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
