import styles from "../../styles/style";
import profile from "../../assets/images/prof.png";
import insta from "../../assets/images/insta.svg";
import discord from "../../assets/images/discord.svg";
import tg from "../../assets/images/tg.svg";
import twitter from "../../assets/images/twitter.svg";
import boot from "../../assets/images/boot.svg";
import bg from "../../assets/images/bg.svg";
import bullets from "../../assets/images/bullets.svg";

function Progress() {
  return (
    <div className="flex flex-col mt-4 gap-[13px] ">
      <div className="h-[256px] flex justify-between mx-4 rounded-box gap-[3%]">
        <div className="bg-[#192126] relative flex flex-col justify-center rounded-box w-[62%] gap-[22px] px-[6%]">
          <img
            src={bg}
            className="absolute top-0 right-0 w-[90px] h-[90px]"
            alt=""
          ></img>
          <img
            src={bullets}
            className="absolute bottom-4 right-[40%]"
            alt=""
          ></img>

          <div className="flex items-center gap-[10px]">
            <img src={profile}></img>
            <div className={`flex flex-col gap-[1px] text-white`}>
              <div className={`${styles.heading1}`}>82%</div>
              <div className={`${styles.paragraph}`}>of the goal</div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={boot}></img>
            <div className={`flex flex-col gap-[1px] text-white`}>
              <div className={`${styles.heading1}`}>10000</div>
              <div className={`${styles.paragraph}`}>Total steps counted</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-box w-[36%] gap-[3%]">
          <div className="flex flex-col justify-center bg-[#192126] rounded-box h-[48%] gap-[10px]">
            <div className="flex flex-col justify-center mx-4">
              <div className={`${styles.paragraph} `}>Staked Wager </div>
              <div className={`${styles.heading2} !text-[#C5B7FF]`}>100</div>
            </div>
            <div className="flex flex-col justify-center mx-4">
              <div className={`${styles.paragraph}`}>Prize Pool</div>
              <div className={`${styles.heading2} text-yellow`}>1000</div>
            </div>
          </div>

          <div className="bg-yellow border-[1px] border-[#000000] rounded-box h-[48%] relative py-2 px-[7.5%] ">
            <div className="absolute top-1 h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div className={`${styles.subheading} !text-[#68783B]`}>
                GIVE UP
              </div>
            </div>

            <div className="absolute bottom-11 h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div className={`${styles.caption1} !text-[#68783B]`}>
                Yes, I wanna !
              </div>
            </div>
            <div className="absolute bottom-3 bg-[#192126] h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div className={`${styles.subheading} text-yellow `}>CATOFF </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[333px] mx-4 bg-[#192126] rounded-box"></div>
      <div className="h-[92px] mx-4 mb-[110px] bg-yellow rounded-box border-[1px] border-[#000000] flex flex-col items-center justify-center gap-[9px]">
        <p className={`${styles.subheading} !text-[#000000] `}>
          Flex Your Progress on Socials
        </p>

        <div className="flex gap-[14px]">
          <img src={insta}></img>
          <img src={discord}></img>
          <img src={tg}></img>
          <img src={""}></img>
        </div>
      </div>
    </div>
  );
}

export default Progress;
