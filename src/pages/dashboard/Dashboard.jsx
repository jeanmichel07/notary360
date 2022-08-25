import React from "react";
import Box from "@mui/material/Box";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import TopicIcon from "@mui/icons-material/Topic";
import LightModeIcon from "@mui/icons-material/LightMode";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";

const Dashboard = () => {
  return (
    <Box sx={{ width: 1, padding: 3 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
        <Box gridColumn="span 6">
          <DashboardCard title="Mon activite" icon={<TopicIcon />} />
        </Box>

        <Box gridColumn="span 6">
          <DashboardCard title="Evolution des dossiers" icon={<FolderIcon />} />
        </Box>

        <Box marginTop={1} gridColumn="span 4">
          <DashboardCard title="Mes taches" icon={<AssignmentIcon />} />
        </Box>
        <Box marginTop={1} gridColumn="span 4">
          <DashboardCard
            title="Stats dossier en cours"
            icon={<DonutSmallIcon />}
          />
        </Box>
        <Box marginTop={1} gridColumn="span 2">
          <DashboardCard title="Meteo" icon={<LightModeIcon />} />
        </Box>
        <Box marginTop={1} gridColumn="span 2">
          <DashboardCard title="Actualite" icon={<ArticleIcon />} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
