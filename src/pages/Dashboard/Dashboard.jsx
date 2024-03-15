import { useEffect, useState } from "react";
import {
  getUserCurrentTableAPI,
  getUserGraphAPI,
  getUserProfileDataAPI,
} from "../../utils/ApiCalls";

function Dashboard() {
  const [graphTab, setGraphTab] = useState(0);
  const [challengeTab, setChallengeTab] = useState(0);
  const [userDetail, setUserDetail] = useState({});

  // useEffect(() => {
  //   const getUserDashboardData = async () => {
  //     const userTable = await getUserCurrentTableAPI();

  //     const userGraph = await getUserGraphAPI("all");

  //     const userProfile = await getUserProfileDataAPI();

  //     if (userProfile.status === 200) {
  //       setUserDetail(userProfile.data);
  //     }
  //   };

  //   getUserDashboardData();
  // }, []);

  useEffect(() => {}, [graphTab]);

  useEffect(() => {}, [challengeTab]);

  const ProfileBox = () => {
    return (
      <div className="bg-white shadow-md p-4 m-8 rounded-md border-gray-400">
        <div className="flex flex-col">
          <div className="flex gap-5 ">
            <h2 className="text-gray-500 font-bold">User Name</h2>
            <p className="text-blue-600">{userDetail.UserName}</p>
          </div>
          <div className="flex gap-5 ">
            <h2 className="text-gray-500 font-bold">User Email</h2>
            <p className="text-blue-600">{userDetail.UserEmail}</p>
          </div>
          <div className="flex gap-5 ">
            <h2 className="text-gray-500 font-bold">Wallet Address</h2>
            <p className="text-blue-600">
              {userDetail.WalletAddress?.toString().slice(0, 7) + "....."}
            </p>
          </div>
          <div className="flex gap-5 ">
            <h2 className="text-gray-500 font-bold">User ID</h2>
            <p className="text-blue-600">{userDetail.UserID}</p>
          </div>
        </div>
      </div>
    );
  };

  const RewardBox = () => {
    return (
      <div className="bg-white flex shadow-md p-2 mx-8 my-2 rounded-md border-gray-400">
        <div className="bg-white w-1/2 flex shadow-md m-2 rounded-md border-gray-400 items-center justify-center">
          <div className="flex flex-col ">
            <h2 className="text-gray-500 font-bold">Rewards</h2>
            <p className="text-blue-600">{userDetail.TotalRewardsWon}</p>
          </div>
        </div>
        <div className="bg-white w-1/2 flex shadow-md m-2 rounded-md border-gray-400 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-gray-500 font-bold">Staked</h2>
            <p className="text-blue-600">{userDetail.CurrentStaked}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <ProfileBox />
      <RewardBox />
   

    </div>
  );
}

export default Dashboard;
