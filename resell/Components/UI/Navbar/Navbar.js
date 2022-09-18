import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>Resell.</div>

      <ul className={classes.navmenu}>
        <li className={classes["nav-items"]}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes["nav-items"]}>
          <Link href="/">Tickets</Link>
        </li>
        <li className={classes["nav-items"]}>
          <Link href="/">Features</Link>
        </li>
        <li className={classes["nav-items"]}>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <ConnectWallet accentColor="#6f5cf1" colorMode="light" />
        </li>
      </ul>

      <div onClick={() => setMenuOpen(!menuOpen)} className={classes.hamburger}>
        <FaBars />
      </div>

      {menuOpen && (
        <div className={classes["ham-menu"]}>
          <div>
            <ul className={classes.newmenu}>
              <li className={classes["nav-ham-items"]}>
                <Link href="/">Home</Link>
              </li>
              <li className={classes["nav-ham-items"]}>
                <Link href="/">Tickets</Link>
              </li>
              <li className={classes["nav-ham-items"]}>
                <Link href="/">Features</Link>
              </li>
              <li className={classes["nav-ham-items"]}>
                <Link href="/">Contact</Link>
              </li>
              <li className={classes["nav-ham-items"]}>
                <ConnectWallet accentColor="#6f5cf1" colorMode="dark" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
