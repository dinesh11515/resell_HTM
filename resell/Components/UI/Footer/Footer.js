import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <h2>Resell.</h2>
        <p>
          We will help you sell your purchased ticket which you buy out for an
          event but not able to attend that event. We created this platform that
          will help you resell the ticket which you buyed out for a show.
        </p>
        <h5 className={classes.copyright}>
          Copyright @2022. All rights reserved
        </h5>
      </div>

      <div className={classes.links}>
        <ul className={classes.bottom}>
          <li>
            <span>
              <BsFacebook />
            </span>
            <Link href="https://www.facebook.com">Facebook</Link>
          </li>
          <li>
            <span>
              <BsInstagram />
            </span>
            <Link href="https://www.instagram.com">Instagram</Link>
          </li>
          <li>
            <span>
              <BsTwitter />
            </span>
            <Link href="https://www.twitter.com">Twitter</Link>
          </li>
          <li>
            <span>
              <BsYoutube />
            </span>
            <Link href="https://www.youtube.com">Youtube</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
