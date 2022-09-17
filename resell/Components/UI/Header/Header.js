import React from "react";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import { CgMouse } from "react-icons/cg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const buyTicketHandler = () => {
    router.push("/buyTicket");
  };

  const sellTicketHandler = () => {
    router.push("/sellTicket");
  };

  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <h1 className={classes.title}>Resell.</h1>
        <p className={classes.subtitle}>
          Buy and Sell purchased tickets with your fingertips.
        </p>
        <div className={classes.buttons}>
          <Button onClick={buyTicketHandler}>Buy</Button>

          <CgMouse className={classes.mouse} />

          <Button onClick={sellTicketHandler}>Sell</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
