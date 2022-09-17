import React from "react";
import classes from "./TicketSection.module.css";
import Ticket from "../Ticket/Ticket";

const TicketSection = () => {
  return (
    <div className={classes.section}>
      <h2>Premium Tickets</h2>
      <div className={classes.tickets}>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>

      <h2>Newly added</h2>
      <div className={classes.tickets}>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
};

export default TicketSection;
