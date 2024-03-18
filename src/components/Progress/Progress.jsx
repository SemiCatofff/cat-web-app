import styles from "../../styles/style";
import profile from "../../assets/images/prof.png";
import insta from "../../assets/images/insta.svg"
import discord from "../../assets/images/discord.svg"
import tg from "../../assets/images/tg.svg"
import twitter from "../../assets/images/twitter.svg"

function Progress() {
  return (
    <div className="flex flex-col mt-4 gap-[13px] ">
      <div className="h-[256px] flex mx-4 rounded-box gap-[2%]">
        <div className="bg-black flex flex-col justify-center rounded-box w-[64%] gap-[20px] px-4">
          <div className="flex items-center gap-[10px]">
            <img src={profile}></img>
            <div className={`flex flex-col gap-[1px] text-white`}>
              <div className={`${styles.heading1}`}>82%</div>
              <div className={`${styles.paragraph}`}>of the goal</div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src={profile}></img>
            <div className={`flex flex-col gap-[1px] text-white`}>
              <div className={`${styles.heading1}`}>10000</div>
              <div className={`${styles.paragraph}`}>Total steps counted</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-box w-[35%] gap-[2%]">
          <div className="flex flex-col justify-center bg-black rounded-box h-[49%] gap-[10px]">
            <div className="flex flex-col justify-center mx-4">
              <div className={`${styles.paragraph} `}>Staked Wager </div>
              <div className={`${styles.heading2} !text-[#C5B7FF]`}>100</div>
            </div>
            <div className="flex flex-col justify-center mx-4">
              <div className={`${styles.paragraph}`}>Prize Pool</div>
              <div className={`${styles.heading2} text-yellow`}>1000</div>
            </div>
          </div>

          <div className="bg-yellow border-[1px] border-[#000000] rounded-box h-[49%] flex flex-col items-center">
          <p className={`${styles.paragraph} !text-[#000000] `}>
          GIVE UP?
        </p> 
          </div>
        </div>
      </div>
      <div className="h-[333px] mx-4 bg-black rounded-box"></div>
      <div className="h-[92px] mx-4 mb-[110px] bg-yellow rounded-box border-[1px] border-[#000000] flex flex-col items-center justify-center gap-[9px]">
        <p className={`${styles.subheading} !text-[#000000] `}>
          Flex Your Progress on Socials
        </p>

        <div className="flex gap-[12px]">
          <img src={insta}>
          </img>
          <img src={discord}>
          </img>
          <img src={tg}>
          </img>
          <img src={""}>
          </img>

        </div>

      </div>
    </div>
  );
}

export default Progress;
