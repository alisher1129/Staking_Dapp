import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";

function StakeToken() {
  const [countStake, setCountStake] = useState(0);

  const { contract } = useContract(
    "0xA311Bd1f0A775DEe970eEF395FAa050589042e15"
  );
  const { mutateAsync: stakeToken, isLoading } = useContractWrite(
    contract,
    "stakeToken"
  );

  return (
    <>
      <div className="flex items-center">
        {/* Input field */}
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
          type="text"
          name="value"
          value={countStake}
          onChange={(e) => setCountStake(e.target.value)}
          placeholder="Enter amount..."
        />

        <Web3Button
          contractAddress={"0xA311Bd1f0A775DEe970eEF395FAa050589042e15"}
          action={() => stakeToken({ args: [countStake] })}
        >
          Stake Token
        </Web3Button>
      </div>
    </>
  );
}

export default StakeToken;
