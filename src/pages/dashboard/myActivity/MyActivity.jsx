import React from "react";
import useStyles from "./style";
import TopicIcon from "@mui/icons-material/Topic";
import Box from "@mui/material/Box";
import DashboardCard from "../../../components/dashboardCard/DashboardCard";
import { sxStyles } from "../style";
import MyActivityItem from "../../../components/myActivityItem/MyActivityItem";

const MyActivity = (props) => {
  const {} = props;
  const classes = useStyles();
  const rows1 = [
    {
      id: 1,
      title: "Comptabilite",
      firstValue: 1,
      firstValueLabel: "virements a valider",
    },
    {
      id: 2,
      title: "Appelles telephoniques",
      firstValue: 3,
      firstValueLabel: "urgents",
      secondValue: 7,
      secondValueLabel: "en cours",
    },
  ];

  const rows2 = [
    {
      id: 1,
      title: "Signature a valider",
      firstValue: 6,
      firstValueLabel: "documents a signer",
    },
    {
      id: 2,
      title: "Autres authentiques",
      firstValue: 1,
      firstValueLabel: "mentions posterieurs a signer",
    },
  ];

  return (
    <Box gridColumn="span 6">
      <DashboardCard
        height={300}
        title="Mon activite"
        icon={<TopicIcon sx={sxStyles.iconSize} />}
      >
        <div className={classes.activities}>
          {rows1.map((activitie) => (
            <Box key={activitie.id} sx={{ flex: 0.48 }}>
              <MyActivityItem
                title={activitie.title}
                firstValueLabel={activitie.firstValueLabel}
                firstValue={activitie.firstValue}
                secondValue={activitie.secondValue}
                secondValueLabel={activitie.secondValueLabel}
              />
            </Box>
          ))}
        </div>

        <div className={classes.activities}>
          {rows2.map((activitie) => (
            <Box key={activitie.id} sx={{ flex: 0.48 }}>
              <MyActivityItem
                title={activitie.title}
                firstValueLabel={activitie.firstValueLabel}
                firstValue={activitie.firstValue}
              />
            </Box>
          ))}
        </div>
      </DashboardCard>
    </Box>
  );
};

export default MyActivity;
