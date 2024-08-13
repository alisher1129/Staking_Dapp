import {
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button, useAddress
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import  { CONTRACT_ADDRESS  } from "./contract";
import  Abi  from "./Abi.json";


function CheckStake() {
  // const account = "0x13101a2e6497817C2307E932F0bC90bD8f52b1d3";
  // const account = "0xb42d3ac85E7188316eb7f145AaDDE716a7a8553A";

  const address = useAddress();
  const { contract } = useContract(
    CONTRACT_ADDRESS , Abi
  );
  const { data } = useContractRead(contract, "userStake" , [address]);
  return (
    <>
      <div className="w-[330px] sm:mb-0 sm:w-[750px]">
        <div className="relative h-full ml-0 mr-0 sm:mr-10">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
          <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
            <div className="flex items-center -mt-1">
              <h3 className="my-2 ml-3 text-4xl font-mono font-bold text-gray-800">
                Stake Tokens
              </h3>
            </div>
            <div className="ml-4 text-2xl">{data ? data.amount/10**18 :  "0"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckStake;
