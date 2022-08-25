import React from "react";
import useStyles from "./style";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";
import CustomizedSteppers from "../../../components/customizedSteppers/CustomizedSteppers";

const FolderEvolution = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 6">
      <DashboardCard
        withoutPadding
        height={300}
        title="Evolution des dossiers"
        icon={<FolderIcon sx={sxStyles.iconSize} />}
      >
        <div className={classes.items}>
          <Box sx={{ flex: 0.6, backgroundColor: "#dbe6ef", height: 125 }}>
            Left
          </Box>
          <Box sx={{ flex: 0.5 }} style={{ transform: "scale(0.8)" }}>
            <CustomizedSteppers />
          </Box>
        </div>
        <div className={classes.items}>
          <Box sx={{ flex: 0.6, backgroundColor: "#dbe6ef", height: 125 }}>
            Left
          </Box>
          <Box sx={{ flex: 0.5 }} style={{ transform: "scale(0.8)" }}>
            <CustomizedSteppers />
          </Box>
        </div>
      </DashboardCard>
    </Box>
  );
};

export default FolderEvolution;
