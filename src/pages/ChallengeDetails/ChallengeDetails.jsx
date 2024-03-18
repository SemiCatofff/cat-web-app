import { useState } from "react";
import styles from "../../styles/style";
import contest from "../../assets/images/player.png";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/prof.png";

function ChallengeDetails() {
  const [people, setPeople] = useState([
    {
      name: "Alice Doe",
      address: "0x7856...jh86sp09",
      timestamp: "5 Hours Ago",
      imageSrc: "/path-to-your-image.jpg",
    },
    {
      name: "Alice Doe",
      address: "0x7856...jh86sp09",
      timestamp: "15 Hours Ago",
      imageSrc: "/path-to-your-image.jpg",
    },
    {
      name: "Alice Doe",
      address: "0x7856...jh86sp09",
      timestamp: "2 Days Ago",
      imageSrc: "/path-to-your-image.jpg",
    },
    {
      name: "Alice Doe",
      address: "0x7856...jh86sp09",
      timestamp: "2 Days Ago",
      imageSrc: "/path-to-your-image.jpg",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-auto py-4 gap-[17px]">
      <div className="">
        <img src={contest} className="mx-4 rounded-[24px] w-[92%]"></img>
      </div>

      <div className="flex mx-4">
        <div className="w-[50%]">Creator</div>
        <div className="flex justify-end w-[50%]">
          <div
            className="flex items-center justify-center w-[112px] h-[25px] rounded-[20px] text-[#8567FF] bg-yellow border-[1px] border-[#8567FF]"
            onClick={() => {
              navigate("/challenge");
            }}
          >
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

        <div className="absolute top-[20px] left-[20px]">
          <div className={`${styles.subheading} text-[#000000]`}>
            Current Prize Pool
          </div>
          <div className={`${styles.subheading2} !text-yellow`}>$ 1000</div>
        </div>

        <div className="absolute top-[20px] right-[20px] text-right">
          <div className={`${styles.subheading} text-[#000000]`}>
            Entry Wager
          </div>
          <div className={`${styles.subheading2} !text-yellow`}>$ 1000</div>
        </div>

        <div className="absolute bottom-[20px] left-[20px]">
          <div className={`${styles.subheading} !text-[#B3A0FF] !text-[16px]`}>
            Target
          </div>
          <div className={`${styles.subheading2} !text-[#ffffff]`}>
            10000 steps in 4 days
          </div>
        </div>

        <div className="absolute bottom-[20px] right-[20px] text-right">
          <div className={`${styles.subheading} !text-[#B3A0FF] !text-[16px]`}>
            Starts In
          </div>
          <div className={`${styles.subheading2} !text-[#ffffff]`}>3 days</div>
        </div>
      </div>
      <div
        className="h-[60px] mx-4 bg-yellow rounded-box border-[1px] border-[#000000] flex items-center justify-center"
        onClick={() => {
          navigate("/challenge");
        }}
      >
        <p className={`${styles.subheading} !text-[#000000]`}>Join Challenge</p>
      </div>
      <div className="h-[60px] mx-4 rounded-box border-[1px] border-[#000000] flex items-center justify-center">
        <p className={`${styles.subheading} !text-[#000000]`}>Invite friends</p>
      </div>
      <div className="py-4 flex mx-4">
        <p className={`${styles.subheading} !text-[#000000]`}>
          Other People Joined
        </p>
      </div>
      <div className="flex flex-col mb-[30%] gap-[6px]">
        {people.map((item) => {
          return (
            <div className="h-[61px] mx-4 bg-[#FFFFFF] rounded-[12px] border-[1px] px-4 flex items-center justify-center">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={profile}
                alt=""
              />
              <div className="flex-1 ml-2 mr-2">
                <p className={`${styles.subheading} !text-[#000000]`}>
                  {item.name}
                </p>
                <p className={`${styles.paragraph} !text-[#696969]`}>
                  {item.address}
                </p>
              </div>
              <span className="flex justify-center w-[92px] h-[25px] items-center rounded-full text-[10px] font-medium bg-yellow text-[#3A3E31]">
                {item.timestamp}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChallengeDetails;
