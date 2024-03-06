import "./styles/Home.css";
import StakeToken from "./components/StakeToken";
import UnStake from "./components/UnStake";
import ClaimYourReward from "./components/ClaimYourReward";
import BalanceOf from "./components/BalanceOf";
import { ConnectWallet } from "@thirdweb-dev/react";
import CheckStake from "./components/CheckStake";



export default function Home() {

  return (
   <>
   <div className=" flex flex-col  items-center">
   <h3 className="text-3xl font-bold">Staking Dapp</h3>
   <ConnectWallet/>
   <StakeToken/>
   <UnStake/>
   <BalanceOf/>
<CheckStake/>
<ClaimYourReward/>

 
   
   </div>
   

   </>
  );
}
