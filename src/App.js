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
      <div className="flex flex-col justify-center items-center space-y-2 md:flex mt-12">
        <div className=" text-4xl font-mono font-bold   md:text-5xl">Staking Dapp</div>
        <ConnectWallet />
      </div>

      <div className="flex  justify-center mt-14">
          <div className="  space-y-14">
            <div className="flex flex-col  justify-center items-center space-y-10 ">
              <CheckStake />
              <BalanceOf />
              <div className="flex flex-col md:flex-row "> 
                <StakeToken />
                <UnStake />
              </div>

              <ClaimYourReward />
            </div>
          </div>
        
      </div>
    </>
  );
}
