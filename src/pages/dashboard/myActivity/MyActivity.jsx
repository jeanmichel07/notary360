import React from "react";
import useStyles from "./style";
import TopicIcon from "@mui/icons-material/Topic";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";

const MyActivity = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 6">
      <DashboardCard
        title="Mon activite"
        icon={<TopicIcon sx={{ color: "blue" }} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default MyActivity;
