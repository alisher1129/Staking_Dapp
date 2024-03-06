import {  useContract, useContractRead  } from "@thirdweb-dev/react";
import React, { useState } from "react";


function CheckStake() {
    const account = "0xA311Bd1f0A775DEe970eEF395FAa050589042e15";
    const { contract } = useContract("0xA311Bd1f0A775DEe970eEF395FAa050589042e15");
  const { data, isLoading } = useContractRead(contract, "userStake", [account]);

    return ( <>
    <div><span className=" text-lg font-bold">Your stake is Here:</span>{'0'}</div>
    
    
    </> );
}

export default CheckStake;
