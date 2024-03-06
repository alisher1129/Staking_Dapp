import { useContract, useContractWrite , Web3Button } from "@thirdweb-dev/react";


function ClaimYourReward() {
  // const { contract } = useContract("0xA311Bd1f0A775DEe970eEF395FAa050589042e15");
  // const { mutateAsync: claimYourReward, data } = useContractWrite(contract, "claimYourReward");
  const account = "0xA311Bd1f0A775DEe970eEF395FAa050589042e15";
  return (
    <>
     <Web3Button
          contractAddress={"0xA311Bd1f0A775DEe970eEF395FAa050589042e15"}
          action={(contract) => contract.call("claimYourReward") }
        >
          Claim Your Reward
        </Web3Button>
  
    </>
  );
}

export default ClaimYourReward;
