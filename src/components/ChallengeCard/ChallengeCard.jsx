import { cardImg } from "../../assets/images";
import styles from "../../styles/style";
import { useNavigate } from "react-router";

const ChallengeCard = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/challenge");
  };
  return (
    <>
      <div className="relative mr-2 cursor-pointer" onClick={handleOnclick}>
        <img src={cardImg} alt="" />

        <div className={`absolute top-2 w-64 ${styles.paddingX}`}>
          <div className={`${styles.flexBetween}`}>
            <h1 className={`${styles.heading2} ${styles.marginY}`}>
              Step Challenge
            </h1>
            <p
              className={`${styles.caption2} ${styles.marginY} mt-4 text-right`}
            >
              10 Days Left
            </p>
          </div>
          <div className={``}>
            <p
              className={`${styles.caption2} !text-black bg-slate-100 w-28 py-1 rounded-xl text-center px-2`}
            >
              + 54 members
            </p>
          </div>
        </div>
        <div className={`absolute bottom-2 w-64 ${styles.paddingX}`}>
          <div className={`${styles.flexBetween}`}>
            <h1 className={`${styles.caption2} ${styles.marginY} text-yellow`}>
              Live Prize Pool
              <br />
              <span className={`${styles.heading2}`}>2 SOL</span>
            </h1>
            <h1
              className={`${styles.caption2} ${styles.marginY} text-right text-yellow`}
            >
              Entry Wager
              <br />
              <span className={`${styles.heading2} `}>0.005 SOL</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;
