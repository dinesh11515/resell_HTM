import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useSigner } from "@thirdweb-dev/react";
import { erc721_abi , erc1155_abi,contract_address} from "../../constants";
import { BigNumber } from "ethers";
const SellPage = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState(0);
  const [tokenType, setTokenType] = useState("");
  const [data,setData] = useState([]);
  const signer = useSigner();
  const sdk = ThirdwebSDK.fromSigner(signer, "mumbai");
    
  const sellTicket = async () => {
    try{
      const name = data["data"]["items"][0]["contract_name"];
      const url = data["data"]["items"][0]["nft_data"][0]["external_data"]["image"]
      const contract = await sdk.getContract(contract_address);
      if(tokenType === "erc721"){
        const erc721contract = sdk.getContractFromAbi(address, erc721_abi);
        await erc721contract.call("approve",contract_address, tokenId);
        await contract.call("resellToken721", address, price,u0x6F3b4C839e7f1D9d989E8456cE3F52DF22a76b8Bl,name);
      }
      else if(tokenType === "erc1155"){
        const erc1155contract = sdk.getContractFromAbi(address, erc1155_abi);
        await erc1155contract.call("setApprovalForAll",contract_address, true);
        await contract.call("resellToken1155", address, tokenId,price,url,name);
      }
    }
    catch(err){
      alert(err.message);
    }
  };
  

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const ticketData = {
      address: address,
      tokenId: tokenId,
      price: price,
      tokenType: tokenType,
    };
    sellTicket()
    console.log(ticketData);

    setAddress("");
    setTokenId("");
    setPrice("");
    setTokenType("");
  };

  const addressInputHandler = (event) => {
    setAddress(event.target.value);
  };0x6F3b4C839e7f1D9d989E8456cE3F52DF22a76b8B

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

  const getData = async () => {
    try{
      await fetch(`https://api.covalenthq.com/v1/80001/tokens/${address}/nft_metadata/${tokenId}/?quote-currency=USD&format=JSON&key=ckey_4760467d5dde4c2f902585f848d`)
        .then(response => response.json())
        .then(data => setData(data));
    }
    catch(err){
      alert(err)
    }
  }

  useEffect(() => {
    if(tokenId !== "" && address !== ""){
      getData();
      
    }
  }, [tokenId, address]);
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
