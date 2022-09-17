import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>Resell.</div>
      <ConnectWallet  accentColor="#6f5cf1" colorMode="light" />
    </div>
  );
};

export default Navbar;
