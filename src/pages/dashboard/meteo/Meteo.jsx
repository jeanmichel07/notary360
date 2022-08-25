import React from "react";
import useStyles from "./style";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import MeteoItem from "../../../components/meteoItem/MeteoItem";

const Meteo = (props) => {
  const {} = props;
  const classes = useStyles();

  const rows1 = [
    {
      id: 1,
      label: "Lun 10",
      value: 32,
    },
    {
      id: 2,
      label: "Mar 11",
      value: 32,
    },
    {
      id: 3,
      label: "Mer 12",
      value: 32,
    },
  ];

  const rows2 = [
    {
      id: 1,
      label: "Jeu 13",
      value: 32,
    },
    {
      id: 2,
      label: "Ven 14",
      value: 32,
    },
    {
      id: 3,
      label: "Sam 15",
      value: 32,
    },
  ];

  return (
    <Box gridColumn="span 2">
      <DashboardCard
        whiteBg
        title="Meteo"
        icon={<LightModeIcon sx={{ color: "yellow" }} />}
      >
        <Box>
          <MeteoItem isMain label="Montpelier" content={rows1[0]} />
        </Box>

        <Box
          style={{
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {rows1.map((item) => (
            <MeteoItem key={item.id} label={item.label} value={item.value} />
          ))}
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {rows2.map((item) => (
            <MeteoItem key={item.id} label={item.label} value={item.value} />
          ))}
        </Box>
      </DashboardCard>
    </Box>
  );
};

export default Meteo;
