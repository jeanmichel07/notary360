import React from "react";
import Box from "@mui/material/Box";
import MyActivity from "./myActivity/MyActivity";
import FolderEvolution from "./folderEvolution/FolderEvolution";
import MyTasks from "./myTasks/MyTasks";
import Statistic from "./statistic/Statistic";
import Meteo from "./meteo/Meteo";
import Actuality from "./actuality/Actuality";

const Dashboard = () => {
  return (
    <Box sx={{ width: 1, padding: 3 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
        <MyActivity />

        <FolderEvolution />

        <MyTasks />

        <Statistic />

        <Meteo />

        <Actuality />
      </Box>
    </Box>
  );
};

export default Dashboard;
