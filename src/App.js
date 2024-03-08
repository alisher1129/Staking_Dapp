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
      <div className=" mt-20  space-y-10">
        <div className="flex justify-evenly">
          <div className=" text-5xl font-bold">Staking Dapp</div>
          <ConnectWallet />
        </div>
        <div className="flex flex-col  justify-center items-center space-y-10 ">
          <CheckStake />
          <BalanceOf />
          <div className="flex ">
            <StakeToken />
            <UnStake />
          </div>

          <ClaimYourReward />
        </div>
      </div>
    </>
  );
}
