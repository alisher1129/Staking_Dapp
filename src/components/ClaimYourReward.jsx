import { useContract, useContractWrite , Web3Button } from "@thirdweb-dev/react";
import  { CONTRACT_ADDRESS  } from "./contract";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClaimYourReward() {
  // const { contract } = useContract("0xA311Bd1f0A775DEe970eEF395FAa050589042e15");
  // const { mutateAsync: claimYourReward, data } = useContractWrite(contract, "claimYourReward");
  const account = "0x36819BCF0968F3c3060cB8aF840D6FD18F6648ef";
  return (
    <>
     <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.call("claimYourReward") }
          onError={(error) => toast.error("Please Wait!")}
          style={{ background:"blue" , color: "white" , fontFamily: "Times New Roman" , fontWeight: "bold" , width: "700px" , height:"50px"}}

        >
          Claim Your Reward
        </Web3Button>
     

  
    </>
  );
}

export default ClaimYourReward;
