import React from "react";
import useStyles from "./style";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";
import MyTaskItem from "../../../components/myTaskItem/MyTaskItem";

const MyTasks = (props) => {
  const {} = props;
  const classes = useStyles();
  const items = [
    {
      id: 1,
      label: "Faire un point avec l'equipe",
      date: "23/12/2022",
      status: "Terminé",
    },
    {
      id: 2,
      label: "Faire un point avec l'equipe",
      date: "23/12/2022",
      status: "Terminé",
    },
    {
      id: 3,
      label: "Faire un point avec l'equipe",
      date: "23/12/2022",
      status: "Terminé",
    },
    {
      id: 4,
      label: "Faire un point avec l'equipe",
      date: "23/12/2022",
      status: "Terminé",
    },
  ];

  return (
    <Box gridColumn="span 4">
      <DashboardCard
        title="Mes taches"
        icon={<AssignmentIcon sx={sxStyles.iconSize} />}
      >
        <div>
          {items.map((item) => (
            <MyTaskItem
              key={item.id}
              label={item.label}
              date={item.date}
              status={item.status}
            />
          ))}
        </div>
      </DashboardCard>
    </Box>
  );
};

export default MyTasks;
