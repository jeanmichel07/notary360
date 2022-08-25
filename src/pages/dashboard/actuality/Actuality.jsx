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
        <Box sx={{ overflow: "hidden", overflowY: "scroll", height: 225 }}>
          <p className={classes.title}>
            Teletravail : Soluta, nemo, corrupti consequuntur.
          </p>

          <p className={classes.description}>
            TLorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            delectus voluptatum? Quam, asperiores in! Soluta, nemo, corrupti
            consequuntur laudantium, architecto alias tenetur debitis in quia
            ipsam accusamus consequatur. Nam, ad.
          </p>
        </Box>
      </DashboardCard>
    </Box>
  );
};

export default Actuality;
