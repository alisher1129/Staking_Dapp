import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { CONTRACT_ADDRESS } from "./contract";
import Abi from "./Abi.json";

function BalanceOf() {
  // const [balance, setBalance] = useState(0);
  // const [show, setShow] = useState(false);
  const account = "0x13101a2e6497817C2307E932F0bC90bD8f52b1d3";

  const { contract } = useContract(CONTRACT_ADDRESS, Abi);
  const { data } = useContractRead(contract, "balanceOf", [account]);

  return (
    <>
      <div class="w-[330px] mb-10 sm:mb-0 sm:w-[750px]">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-500 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-red-500 rounded-lg">
            <div class="flex items-center -mt-1">
              <h3 class="my-2 ml-3 text-4xl font-mono font-bold text-gray-800">
                Balance
              </h3>
            </div>
            <div className="ml-4 text-2xl">{data / 10 ** 18}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BalanceOf;

