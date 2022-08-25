import React from "react";
import useStyles from "./style";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";
import CustomizedSteppers from "../../../components/customizedSteppers/CustomizedSteppers";
import PendingIcon from "@mui/icons-material/Pending";

const FolderEvolution = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box gridColumn="span 6">
      <DashboardCard
        showRightContent
        withoutPadding
        height={300}
        title="Evolution des dossiers"
        icon={<FolderIcon sx={sxStyles.iconSize} />}
      >
        <div className={classes.items}>
          <Box
            sx={{
              flex: 0.6,
              padding: 1,
              backgroundColor: "#dbe6ef",
              height: 125,
            }}
          >
            <div className={classes.item1}>
              <p className={classes.ref}>1256789</p>
              <div className={classes.status}>
                <PendingIcon sx={{ color: "orange", height: 18, width: 18 }} />
                <p className={classes.statusLabel}>EN COURS</p>
              </div>
            </div>

            <p className={classes.vent}>Vente</p>
            <p className={classes.name}>MICHAEL/LAVOIE</p>

            <div className={classes.row}>
              <div>
                <p className={classes.ref}>Notaire</p>
                <p className={classes.name}>Marie</p>
              </div>
              <div>
                <p className={classes.ref}>Client(e)</p>
                <p className={classes.name}>Justin</p>
              </div>
            </div>
          </Box>
          <Box sx={{ flex: 0.5 }} style={{ transform: "scale(0.8)" }}>
            <CustomizedSteppers />
          </Box>
        </div>

        <div className={classes.items}>
          <Box
            sx={{
              flex: 0.6,
              padding: 1,
              backgroundColor: "#dbe6ef",
              height: 125,
            }}
          >
            <div className={classes.item1}>
              <p className={classes.ref}>1256789</p>
              <div className={classes.status}>
                <PendingIcon sx={{ color: "purple", height: 18, width: 18 }} />
                <p className={classes.statusLabel}>EN ATTENTE</p>
              </div>
            </div>

            <p className={classes.vent}>Vente</p>
            <p className={classes.name}>MICHAEL/LAVOIE</p>

            <div className={classes.row}>
              <div>
                <p className={classes.ref}>Notaire</p>
                <p className={classes.name}>Marie</p>
              </div>
              <div>
                <p className={classes.ref}>Client(e)</p>
                <p className={classes.name}>Justin</p>
              </div>
            </div>
          </Box>
          <Box sx={{ flex: 0.5 }} style={{ transform: "scale(0.8)" }}>
            <CustomizedSteppers />
          </Box>
        </div>
      </DashboardCard>
    </Box>
  );
};

export default FolderEvolution;
