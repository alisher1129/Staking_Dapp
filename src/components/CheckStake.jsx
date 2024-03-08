import {
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import  { CONTRACT_ADDRESS  } from "./contract";
import  Abi  from "./Abi.json";


function CheckStake() {
  const account = "0x13101a2e6497817C2307E932F0bC90bD8f52b1d3";
  const { contract } = useContract(
    CONTRACT_ADDRESS , Abi
  );
  const { data } = useContractRead(contract, "userStake", [account]);
  console.log(data);
  return (
    <>
      <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
            <div class="flex items-center -mt-1">
              <h3 class="my-2 ml-3 text-4xl font-bold text-gray-800">
                Stake Tokens
              </h3>
            </div>
            <div className="ml-4 text-2xl">{data ? data.amount/10**18: "0"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckStake;
