import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { CONTRACT_ADDRESS } from "./contract";
import Abi from "./Abi.json";
/* global BigInt */

function UnStake() {
  const [RemoveStake, setRemoveStake] = useState(0);

  const { contract } = useContract(
    CONTRACT_ADDRESS, Abi
  );

  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "unStake"

  );
  return (
    <>


      <div class="w-full  mb-10 sm:mb-0 sm:w-1/2">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">



            <div className="flex flex-col space-y-5 ">
              <input
                className=" border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="value"
                value={RemoveStake}
                onChange={(e) => setRemoveStake(e.target.value)}
                placeholder="Enter amount..."
              />
              <Web3Button className="bg-blue-500"
                contractAddress={CONTRACT_ADDRESS}
                action={() => mutateAsync({ args: [BigInt(RemoveStake * 10 ** 18)] })}
                onError={(error) => alert("Please Wait!")}
                style={{ background: "blue", color: "white", fontFamily: "Times New Roman", fontWeight: "bold", width: "300px" }}


              >
                Unstake
              </Web3Button>

            </div>




          </div>
        </div>
      </div>


















    </>
  );
}

export default UnStake;