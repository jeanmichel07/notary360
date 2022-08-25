import React from "react";
import useStyles from "./style";

const MyActivityItem = (props) => {
  const { title, firstValueLabel, firstValue, secondValueLabel, secondValue } =
    props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>{title}</div>
      </div>

      <div className={classes.valueContainer}>
        <div className={classes.firstValueContainer}>
          <div className={classes.value}>{firstValue}</div>
          <div className={classes.valueLabel}>{firstValueLabel}</div>
        </div>
        {secondValue && (
          <div className={classes.secondValueContainer}>
            <div className={classes.value}>{secondValue}</div>
            <div className={classes.valueLabel}>{secondValueLabel}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyActivityItem;
