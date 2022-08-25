import React from "react";
import useStyles from "./style";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";

const FolderEvolution = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 6">
      <DashboardCard
        height={300}
        title="Evolution des dossiers"
        icon={<FolderIcon sx={sxStyles.iconSize} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default FolderEvolution;
