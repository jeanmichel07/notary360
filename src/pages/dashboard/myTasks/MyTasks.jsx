import React from "react";
import useStyles from "./style";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { ListItemIcon } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const MyTasks = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 4">
      <DashboardCard
        title="Mes taches"
        icon={<AssignmentIcon sx={sxStyles.iconSize} />}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemIcon>
              <CheckBoxOutlineBlankIcon />
            </ListItemIcon>
            <ListItemText
              primary="Faire un point avec l'equipe"
              secondary="23/12/2022"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckBoxOutlineBlankIcon />
            </ListItemIcon>
            <ListItemText
              primary="Faire un point avec l'equipe"
              secondary="23/12/2022"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckBoxOutlineBlankIcon />
            </ListItemIcon>
            <ListItemText
              primary="Faire un point avec l'equipe"
              secondary="23/12/2022"
            />
          </ListItem>
        </List>
      </DashboardCard>
    </Box>
  );
};

export default MyTasks;
