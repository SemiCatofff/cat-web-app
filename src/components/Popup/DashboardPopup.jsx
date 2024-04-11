import styles from "../../styles/style"
import hippo from "../../assets/images/hippo.png"
import { yellowarrow } from "../../assets/images"

const DashboardPopup = ({isConfirmed, isLoading, amount, state, setAmount, joinSuccess, goToDashboard, handleSliderConfirm }) =>{
    const messages = [
        {
          mess1: 'Withdraw Credits Rules',
          mess2: 'How Many Points to withdraw',
          success: 'Rewards Claimed',
        },
        {
          mess1: 'Buying Credits Rules',
          mess2: 'How Many Points You wanna buy ?',
          success: 'Transaction success',
        },
      ]
    

    return (
        isLoading ? (
            <div className={`!z-40`}>
              <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
                <h2 className={`${styles.heading1} !text-black `}>Please wait!</h2>
                <p className={`${styles.subheading2} !text-black mt-6`}>
                  🎉 Processing Your Request! 🎉
                </p>
        
                <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-yellow h-12 w-12 mx-auto mt-8"></div>
              </div>
            </div>
          ) : isConfirmed ? (
            joinSuccess ? (
              <div className={`!z-40`}>
                <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
                  <h2 className={`${styles.heading1} !text-black `}>
                    Congratulations!
                  </h2>
        
                  <p className={`${styles.subheading2} !text-black mt-6`}>
                    🎉 Request successfully registered! 🎉
                  </p>
        
                  <button
                    className=" bg-black rounded-full py-5 mt-6 flex w-full"
                    onClick={goToDashboard}
                  >
                    <p className={`${styles.heading2} !text-yellow mx-auto flex`}>
                      {' '}
                      GO TO DASHBOARD{' '}
                      <span className="ml-3">
                        <img src={yellowarrow} alt="" />
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              <div className={`!z-40`}>
                <div
                  className={`${styles.paddingX} ${styles.paddingY} flex flex-col gap-[20px] items-center justify-center text-center`}
                >
                  <h2 className={`${styles.heading1} !text-black `}>Ooops!</h2>
                  <img src={hippo}></img>
                  <p className={`${styles.subheading2} !text-black mt-6`}>
                    Something went wrong!! Try again later
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className={`!z-40`}>
              <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
                <div>
                  <h2 className={`${styles.subheading} !text-black px-8 !text-[16px]`}>
                    {messages[state].mess1}
                  </h2>
                  <h2
                    className={`${styles.paragraph} !text-black !font-[400] !text-[10px] !text-[#696969]`}
                  >
                    Current Conversion Rate of the points are :{' '}
                    <span className="!font-[600]"> 100 credit = 1SOL</span>
                  </h2>
                </div>
                <div className="mt-5">
                  <h2 className={`${styles.subheading} !text-black !text-[16px]`}>
                    {messages[state].mess2}
                  </h2>
                  <h2
                    className={`${styles.paragraph} px-4 !font-[400] !text-[10px] !text-[#696969]`}
                  >
                    Minimum Buy: 100 SOLs
                  </h2>
                </div>
                {/* <img src={graphic1} alt="" className="mx-auto mt-10" /> */}
                <div className="flex gap-[10px] h-[40px] items-center justify-center mt-5">
                  <div className="w-[30px] h-full flex items-center justify-center bg-[#EDEBF3] rounded-[12px]">
                    <h2
                      className={`${styles.subheading} !text-black !text-[16px] `}
                      onClick={() => {
                        setAmount(amount - 1)
                      }}
                    >
                      -
                    </h2>
                  </div>
                  <div className="w-[160px] h-full flex items-center justify-center bg-[#EDEBF3] rounded-[12px]">
                    <h2 className={`${styles.subheading} !text-black !text-[16px]`}>
                      {amount} credits
                    </h2>
                  </div>
                  <div
                    className="w-[30px] h-full flex items-center justify-center bg-[#EDEBF3] rounded-[12px]"
                    onClick={() => {
                      setAmount(amount + 1)
                    }}
                  >
                    <h2 className={`${styles.subheading} !text-black !text-[16px]`}>
                      +
                    </h2>
                  </div>
                </div>
                <div
                  className="slide-button items-center justify-center bg-yellow rounded-full !text-black py-5 mt-10 flex "
                  onClick={handleSliderConfirm}
                >
                  <p className={`text-center my-auto !text-black ${styles.heading2}`}>
                    CONFIRM
                  </p>
                </div>
              </div>
            </div>
          )

    )
}
export default DashboardPopup