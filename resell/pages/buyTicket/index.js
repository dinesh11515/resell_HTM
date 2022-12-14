import React, { useEffect } from "react";
import Ticket from "../../Components/Ticket/Ticket";
import classes from "./index.module.css";
import { ThirdwebSDK} from "@thirdweb-dev/sdk";
import { useSigner,useContract, useAddress,useContractRead,useContractWrite} from "@thirdweb-dev/react";
import { contract_address} from "../../constants";
import { ethers } from "ethers";

const BuyPage = () => {

  
  const signer = useSigner();
  const address = useAddress();
  const sdk = ThirdwebSDK.fromSigner(signer, "mumbai");
  const { contract } = useContract(contract_address);
  const { data, isLoading } = useContractRead(contract, "fetchTokensListed")

  const { mutateAsync: buyToken } = useContractWrite(contract, "buyToken")

  const buy = async (id,price) => {
    try {
      const data = await buyToken([ id ,{value:ethers.utils.parseEther(""+price)}]);
      console.info("contract call successs", data);
    } catch (err) {
      alert( err.message);
    }
  }
  console.log(data)
  return (
    <div className={classes.index}>
      {
        data != undefined && data.map((item) => {
        return <Ticket key={item[0]} address={item[0]} id={item[8]} price={ethers.BigNumber.from(item[2]).toNumber()} name={item[5]} image={item[4]} buy={buy}/>
      }
      )}
    </div>
  );
};

export default BuyPage;
