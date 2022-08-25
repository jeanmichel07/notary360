import React from "react";
import Paper from "@mui/material/Paper";
import useStyles from "./style";
import { Box } from "@mui/material";

const DashboardCard = (props) => {
  const {
    children,
    showRightContent,
    title,
    icon,
    height,
    whiteBg,
    withoutPadding,
  } = props;
  const classes = useStyles();
  const paperElevation = 24;
  const headerStyles = whiteBg ? classes.headerWhite : classes.header;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        height: height ?? 285,
        cursor: "pointer",
        boxShadow:
          "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
      }}
      elevation={paperElevation}
    >
      <div className={headerStyles}>
        <div className={classes.titleContainer}>
          <div className={classes.icon}>{icon}</div>
          <div className={classes.title}>{title}</div>
        </div>

        {showRightContent && <p className={classes.status}>Voir tout</p>}
      </div>
      <Box style={{ padding: withoutPadding ? 0 : 10 }}>{children}</Box>
    </Paper>
  );
};

export default DashboardCard;
