import React from "react";
import useStyles from "./style";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";

const Meteo = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 2">
      <DashboardCard
        whiteBg
        title="Meteo"
        icon={<LightModeIcon sx={{ color: "yellow" }} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default Meteo;
