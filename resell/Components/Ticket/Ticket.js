import React from "react";
import classes from "./Ticket.module.css";
import Image from "next/image";
import img from "../../public/images/image-product.jpg";

const Ticket = () => {
  return (
    <div className={classes.ticket}>
      <Image className={classes.img} src={img} height={300} width={300} />
      <div className={classes.info}>
        <p>Random Event Name</p>
        <p className={classes.price}>$ 2.99</p>
      </div>
      <div className={classes.btn}>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Ticket;
