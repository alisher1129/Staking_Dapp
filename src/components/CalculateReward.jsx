import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "./contract";

function CalculateReward() {
    return ( <>
      <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.call("") }
        >
          Claim Your Reward
        </Web3Button>
    </> );
}

export default CalculateReward;