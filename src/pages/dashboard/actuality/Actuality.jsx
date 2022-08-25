import React from "react";
import useStyles from "./style";
import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";

const Actuality = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 2">
      <DashboardCard
        whiteBg
        title="Actualite"
        icon={<ArticleIcon sx={{ color: "yellow" }} />}
      >
        Details
      </DashboardCard>
    </Box>
  );
};

export default Actuality;
