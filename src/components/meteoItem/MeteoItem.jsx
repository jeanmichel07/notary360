import React from "react";
import useStyles from "./style";
import LightModeIcon from "@mui/icons-material/LightMode";

const MeteoItem = (props) => {
  const { icon, label, value, content, isMain } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isMain ? (
        <div className={classes.infos}>
          <p className={classes.icon}>
            {icon ?? (
              <LightModeIcon sx={{ color: "yellow", height: 50, width: 50 }} />
            )}
          </p>
          <div>
            <p className={classes.label}>{label}</p>
            <div className={classes.row}>
              <p className={classes.label}>{content?.label}</p>
              <p className={classes.value}>{`${content?.value}°C`}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className={classes.icon}>
            {icon ?? <LightModeIcon sx={{ color: "yellow" }} />}
          </p>
          <p className={classes.label}>{label}</p>
          <p className={classes.value}>{` ${value}°C`}</p>
        </div>
      )}
    </div>
  );
};

export default MeteoItem;
