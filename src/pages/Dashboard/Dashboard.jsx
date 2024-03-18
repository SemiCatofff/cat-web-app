import React from "react";
import styles from "../../styles/style";
import { homeHeader } from "../../assets/images";

const Dashboard = () => {
  return (
    <>
      <div className={`${styles.paddingX}`}>
        <div className="relative">
          <div className="w-full absolute z-20 flex  justify-center">
            <div className="flex-col">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcset=""
                className="rounded-full w-32 h-32 object-cover
              "
              />
              <h1 className={`${styles.heading2} text-center pt-4`}>
                Alice James
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-2`}>
                alicejames21@gmail.com
              </h1>
              <h1 className={`${styles.paragraph} text-white text-center pt-1`}>
                52fs5ge5g45sov45a
              </h1>
            </div>
          </div>
        </div>
        <img src={homeHeader} alt="" className="pt-20 w-full" />
      </div>

      <div className={`${styles.paddingX} ${styles.marginY} `}>
        <div
          className={`flex justify-between bg-white rounded-xl ${styles.paddingX} ${styles.paddingY} `}
        >
          <div className="flex">
            <img src="" alt="img" />
            <div className="texts">
              <p className={`${styles.caption1} text-black`}>Wager Earned</p>
              <p className={`${styles.heading2} text-black`}>3 SOL</p>
            </div>
          </div>

          <div className="flex">
            <img src="" alt="img" />
            <div className="texts">
              <p className={`${styles.caption1} text-black`}>Wager Earned</p>
              <p className={`${styles.heading2} text-black`}>3 SOL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
