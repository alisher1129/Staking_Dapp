import { Web3Button } from "@thirdweb-dev/react";


function CalculateReward() {
    return ( <>
      <Web3Button
          contractAddress={"0xA311Bd1f0A775DEe970eEF395FAa050589042e15"}
          action={(contract) => contract.call("") }
        >
          Claim Your Reward
        </Web3Button>
    </> );
}

export default CalculateReward;