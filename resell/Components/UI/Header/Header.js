import React from "react";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import { CgMouse } from "react-icons/cg";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Resell.</h1>
      <p className={classes.subtitle}>
        Buy and Sell purchased tickets with your fingertips.
      </p>
      <div className={classes.buttons}>
        <Button>Buy</Button>

        <CgMouse className={classes.mouse} />

        <Button>Sell</Button>
      </div>
    </div>
  );
};

export default Header;
