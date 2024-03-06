import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";

function BalanceOf() {
  const [balance, setBalance] = useState(0);
  const [show, setShow] = useState(false);

  const { contract } = useContract(
    "0xA311Bd1f0A775DEe970eEF395FAa050589042e15"
  );
  const { data, isLoading } = useContractRead(contract, "balanceOf", [balance]);

  return (
    <>
      <div className="flex items-center">
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
          type="text"
          name="value"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Enter amount..."
        />
        <button
          className="bg-gray-200 p-4 font-bold rounded"
          onClick={() => setShow(true)}
        >
          Check balance
        </button>
      </div>
      {show ? (
        <p>
          {" "}
          <span className=" text-lg font-bold">Your Balance is Here:</span>{" "}
          {data / 10 ** 18}
        </p>
      ) : (
        <p>
          <span className=" text-lg font-bold">Your Balance is Here:</span> 0
        </p>
      )}
    </>
  );
}

export default BalanceOf;
