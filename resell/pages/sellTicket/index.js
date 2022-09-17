import React, { useState } from "react";
import classes from "./index.module.css";

const SellPage = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState(0);
  const [tokenType, setTokenType] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const ticketData = {
      address: address,
      tokenId: tokenId,
      price: price,
      tokenType: tokenType,
    };

    console.log(ticketData);

    setAddress("");
    setTokenId("");
    setPrice("");
    setTokenType("");
  };

  const addressInputHandler = (event) => {
    setAddress(event.target.value);
  };

  const tokenIdInputHandler = (event) => {
    setTokenId(event.target.value);
  };

  const priceInputHandler = (event) => {
    if (event.target.value >= 0) {
      setPrice(event.target.value);
    } else return alert("Add a valid price");
  };

  const tokenTypeInputHandler = (event) => {
    setTokenType(event.target.value);
  };

  return (
    <div className={classes.index}>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <input
          required
          value={address}
          onChange={addressInputHandler}
          type="text"
          placeholder="Contract Address"
        />
        <input
          required
          value={tokenId}
          onChange={tokenIdInputHandler}
          type="text"
          placeholder="Token ID"
        />
        <input
          required
          value={price}
          onChange={priceInputHandler}
          type="number"
          placeholder="Price"
        />
        <select
          onChange={tokenTypeInputHandler}
          type="text"
          placeholder="Token type"
          value={tokenType}
        >
          <option value={null}>Token Type</option>
          <option value={"erc721"}>Erc721</option>
          <option value={"erc1155"}>Erc1155</option>
        </select>
        <button type="submit">Sell Ticket</button>
      </form>
    </div>
  );
};

export default SellPage;
