import React from "react";
import useStyles from "./style";
import TopicIcon from "@mui/icons-material/Topic";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";

const MyActivity = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 6">
      <DashboardCard
        height={300}
        title="Mon activite"
        icon={<TopicIcon sx={sxStyles.iconSize} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default MyActivity;
