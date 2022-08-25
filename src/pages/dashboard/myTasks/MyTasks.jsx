import React from "react";
import useStyles from "./style";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";

const MyTasks = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 4">
      <DashboardCard
        title="Mes taches"
        icon={<AssignmentIcon sx={{ color: "blue" }} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default MyTasks;
