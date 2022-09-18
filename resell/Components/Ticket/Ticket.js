import React, { useEffect } from "react";
import classes from "./Ticket.module.css";
import Image from "next/image";
import { MediaRenderer } from "@thirdweb-dev/react";
import { ethers } from "ethers";
const Ticket = (props) => {
  console.log(props.price)
  return (
    <div className={classes.ticket}>
      {/* <Image className={classes.img} src={props.image+""} height={300} width={300} /> */}
      <MediaRenderer
      src={props.image}
      alt="nft.jpg"
      className={classes.img}
    />
      <div className={classes.info}>
        <p>{props.name}</p>
        <p className={classes.price}>{ethers.BigNumber.from(props.price).toNumber()}</p>
      </div>
      <div className={classes.btn}>
        <button onClick={()=>{props.buy(ethers.BigNumber.from(props.id).toNumber(),props.price)}}>Buy</button>
      </div>
    </div>
   
  )
};

export default Ticket;
