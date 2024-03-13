import { useContract, useContractWrite, Web3Button , useContractRead , useAddress} from "@thirdweb-dev/react";
import React, { useState } from "react";
import { CONTRACT_ADDRESS } from "./contract";
import Abi from "./Abi.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* global BigInt */
function StakeToken() {
  const [countStake, setCountStake] = useState(0);
  

const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS, Abi);
  const { mutateAsync: stakeToken } = useContractWrite(contract, "stakeToken");
  const { data } = useContractRead(contract, "balanceOf", [address]);

  const EmptyField = ()=> toast.error("Please Enter the amount");
  const LowBalance = ()=> toast.error("insufficient balance");

 
 
 
  return (
    <>
      <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
        <div className="relative h-full ml-0 mr-0 sm:mr-10">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
          <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
            <div className="flex flex-col space-y-5 ">
              {/* Input field */}
              <input
                className=" border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="value"
                value={countStake}
                onChange={(e) => setCountStake(e.target.value)}
                placeholder="Enter amount..."
              />

              <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={() => {
                  if (countStake > 0) {
                    if(countStake <= data ){
                      stakeToken({ args: [BigInt(countStake * 10 ** 18)] });
                    }else{
                      LowBalance()
                    }
                  }else{
                    EmptyField()
                  }
                }}
               
               
               
               
                onError={(error) => toast.error("Amount is bigger!")}
                style={{
                  background: "blue",
                  color: "white",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  width: "300px",
                }}
              >
                Stake
              </Web3Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StakeToken;
