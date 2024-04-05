import styles from '../../styles/style'
import profile from '../../assets/images/prof.png'
import boot from '../../assets/images/boot.svg'
import bg from '../../assets/images/bg.svg'
import bullets from '../../assets/images/bullets.svg'
import ChallengeSlider from '../ChallengeSlider/ChallengeSlider'
import moment from 'moment'
import Position from '../Position/Position'

function Progress({ value, target, prize, wager, type, game, item }) {
  const progressStyle = {
    backgroundImage: `conic-gradient(
      #E1F076 ${(value / target) * 100}%, 
      #555555 ${(value / target) * 100}% 100%
    )`,
  }
  return (
    <div className="flex flex-col mt-4 gap-[13px] ">
      <div className="h-[256px] flex justify-between mx-4 rounded-box gap-[2%]">
        <div className="bg-[#192126] relative flex flex-col justify-center items-center rounded-box w-[59%]">
          <img
            src={bg}
            className="absolute top-0 right-0 w-[90px] h-[90px]"
            alt=""
          ></img>
          <div className={`${styles.paragraph} absolute top-[8px] left-[12px]`}>
            {moment().format('DD-MM-YYYY')}
          </div>
          <img
            src={bullets}
            className="absolute bottom-4 right-[40%]"
            alt=""
          ></img>
          <div className="w-auto flex flex-col justify-center gap-[25px]">
            <div className="flex items-center gap-[10px]">
              <div
                className="rounded-full w-[66px] h-[66px] flex items-center justify-center"
                style={progressStyle}
              >
                <div className="rounded-full bg-black w-[64px] h-[64px] flex items-center justify-center">
                  <img
                    src={localStorage.getItem('profile')}
                    className="rounded-full w-[60px] h-[60px]"
                  ></img>
                </div>
              </div>

              <div className={`flex flex-col gap-[1px] text-white`}>
                <div className={`${styles.heading2}`}>
                  {parseInt((parseInt(value) / parseInt(target)) * 100)}%
                </div>
                <div className={`${styles.paragraph} !text-[10px]`}>
                  of the goal
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={boot}></img>
              <div className={`flex flex-col gap-[1px] text-white`}>
                <div className={`${styles.heading2}`}>{value}</div>
                <div className={`${styles.paragraph} !text-[10px]`}>
                  Total {type} counted
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-box w-[42%] gap-[2%] relative">
          <div className="flex flex-col justify-center bg-[#192126] rounded-box h-[64%] gap-[5%]">
            <div className="flex flex-col justify-center items-center mx-4">
              <div className={`${styles.paragraph} !text-[10px]`}>
                Staked Wager{' '}
              </div>
              <div className={`${styles.heading2}`}>{wager} Credits</div>
            </div>
            <div className="flex flex-col justify-center items-center mx-4">
              <div className={`${styles.paragraph} !text-[10px] `}>
                Prize Pool
              </div>
              <div className={`${styles.heading2}`}>{prize} Credits</div>
            </div>
          </div>

          <div className="bg-[#E1F076] border-[1px] rounded-box h-[35%] relative py-2 px-[7.5%] ">
            <div className="absolute bottom-11 h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div
                className={`${styles.paragraph} !font-medium !text-[#68783B]`}
              >
                Wanna Give up?
              </div>
            </div>
            <div className="absolute bottom-3 bg-[#192126] h-[38px] w-[85%] rounded-[12px] flex items-center justify-center ">
              <div className={`${styles.heading2} text-yellow `}>CATOFF </div>
            </div>
          </div>
        </div>
      </div>

      <Position
        type= {game}
        competitors={[
          {
            isUser: true,
            name: 'Lead Name',
            steps: 100,
            profileSrc: 'path_to_lead_profile_image',
            hval: 80,
            index: 1,
          },
          {
            isUser: false,
            name: 'Challenger Name',
            steps: 1,
            profileSrc: 'path_to_challenger_profile_image',
            hval: 20,
            index: 2,
          },
        ]}
        profile={profile}
        styles={styles}
      />

     {item.filter(mem => !mem.IsStarted).length > 0 && <div className={`${styles.heading2} !text-[16px] !text-[#202117] mx-4`}>
        Explore more challenges
      </div>
      }
      <ChallengeSlider items={item.filter(mem => !mem.IsStarted)}/>
    </div>
  )
}

export default Progress
