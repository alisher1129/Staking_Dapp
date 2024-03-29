import { useContract, useContractWrite , Web3Button } from "@thirdweb-dev/react";
import  { CONTRACT_ADDRESS  } from "./contract";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClaimYourReward() {
 
  return (
    <>
     <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          action={(contract) => contract.call("claimYourReward") }
          onError={(error) => toast.error("Please Wait!")}
          style={{
            background: "blue",
            color: "white",
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            height: "50px",  // Default height for all screen sizes
            width: "100%",   // Default width to fill the container
            maxWidth: "700px", // Maximum width for larger screens
            margin: "10px0 auto", // Center the button horizontally
            padding: "0 20px", // Add some horizontal padding
            boxSizing: "border-box",
             // Ensure padding doesn't affect width
          }}
        >
          Claim Your Reward
        </Web3Button>
     

  
    </>
  );
}

export default ClaimYourReward;
