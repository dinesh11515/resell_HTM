import React from "react";
import classes from "./Feature.module.css";

const Feature = ({ icon, title, subtitle }) => {
  return (
    <div className={classes.feature}>
      <div className={classes.icon}>{icon}</div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
};

export default Feature;
