import React from "react";
import useStyles from "./style";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";

const Statistic = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 4">
      <DashboardCard
        title="Stats dossier en cours"
        icon={<DonutSmallIcon sx={{ color: "blue" }} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default Statistic;
