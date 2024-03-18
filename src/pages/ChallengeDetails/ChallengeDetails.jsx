import { useState } from "react";
import styles from "../../styles/style";
import contest from "../../assets/images/player.png";
import { useNavigate } from "react-router-dom";

function ChallengeDetails() {
  const [people, setPeople] = useState([1, 1, 1]);
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-auto py-4 gap-[17px]">
      <div className="">
        <img src={contest} className="mx-4 rounded-[24px] w-[92%]"></img>
      </div>

      <div className="flex mx-4">
        <div className="w-[50%]">Creator</div>
        <div className="flex justify-end w-[50%]">
          <div className="flex items-center justify-center w-[112px] h-[25px] rounded-[20px] text-[#8567FF] bg-yellow border-[1px] border-[#8567FF]">
            Fitness
          </div>
        </div>
      </div>
      <div className={`${styles.paragraph} !text-[#555555] mx-4`}>
        Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </div>
      <div className="relative h-[198px] mx-4 rounded-box border-[1px] bg-[#282C2E] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-trophy bg-cover bg-center"
          style={{ opacity: "60%" }}
        ></div>
      </div>
      <div className="h-[60px] mx-4 bg-yellow rounded-box border-[1px] border-[#000000] flex items-center justify-center" 
      onClick={()=>{navigate('/challenge')}}>
      <p className={`${styles.subheading} !text-[#000000]`}>
          Join Challenge
        </p>
      </div>
      <div className="h-[60px] mx-4 rounded-box border-[1px] border-[#000000] flex items-center justify-center">
      <p className={`${styles.subheading} !text-[#000000]`}>
          Invite friends
        </p>
      </div>
      <div className="py-4 flex mx-4">
        <p className={`${styles.subheading} !text-[#000000]`}>
          Other People Joined
        </p>
      </div>
      <div className="flex flex-col mb-[30%] gap-[6px]">
        {people.map((item) => {
          return (
            <div className="h-[61px] mx-4 bg-[#FFFFFF] rounded-[12px] border-[1px] flex items-center justify-center"></div>
          );
        })}
      </div>
    </div>
  );
}

export default ChallengeDetails;
