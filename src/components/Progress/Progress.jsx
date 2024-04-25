import styles from '../../styles/style'
import ChallengeSlider from '../ChallengeSlider/ChallengeSlider'
import moment from 'moment'
import Position from '../Position/Position'
import {
  boot,
  bg,
  bullets,
  likes,
  imgHolder,
  fi_upload,
  arrowRight,
  thumbnail,
  tick,
  refresh,
  profile
} from '../../assets/images';

import { useEffect, useState } from 'react'
import { getReclaimProof } from '../../utils/ApiCalls'
import { useNavigate, useParams } from 'react-router-dom'

function Progress({
  value,
  target,
  prize,
  wager,
  type,
  game,
  item,
  leaderBoard,
  creator,
  creatorImg,
  joined,
  setTab,
  startDate,
}) {
  const progressStyle = {
    backgroundImage: `conic-gradient(
      #E1F076 ${(value / target) * 100}%, 
      #555555 ${(value / target) * 100}% 100%
    )`,
  }

  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(100);
  const [uploadedImage, setUploadedImage] = useState(null);


  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const handleSubmit = () => {
    alert("submitted")
    setStep(4);
  };
  const increment = () => {
    setQuantity(quantity + 1);

  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);

    }
  };
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  const handleUploadMedia = (event) => {
    const file = event.target.files[0];
    const maxFileSize = 40 * 1024 * 1024;

    if (file) {
      if (file.size > maxFileSize) {
        alert('File size exceeds the limit of 40 MB.');
        event.target.value = null;
      } else {
        const reader = new FileReader();
        reader.onload = function (e) {
          setUploadedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      alert('No file selected.');
    }
  };





  const renderStep = () => {

    switch (step) {
      case 1:
        return (
          <>
            {/* Step 1: Introduction/Information */}
            <div className={`${styles.marginX} text-center h-full `}>
              <p className={`${styles.heading2} mt-10`}>
                Add Quantity Consumed
              </p>
              <div className="flex items-center justify-center mt-4">
                <button onClick={decrement} className="bg-gray-300 px-4 py-2 rounded-full">
                  -
                </button>
                <div className={`${styles.caption1} `}>
                  <input type="number" value={quantity} onChange={handleInputChange} className=" px-4  text-center w-16 bg-transparent" />

                </div>
                <button onClick={increment} className="bg-gray-300 px-4 py-2 rounded-full">
                  +
                </button>
              </div>
            </div>
            <button onClick={handleNextStep} className="bg-yellow px-2 w-40 py-2 rounded-lg mb-4">
              <p className={`${styles.heading2} !text-black flex justify-center`}>Next <span><img src={arrowRight} alt="" className='ml-2 pt-1' /></span></p>
            </button>
          </>
        );
      case 2:
        return (
          <>
            <div className={`${styles.marginX} text-center h-full`}>
              <p className={`${styles.heading2} mt-10 mb-2`}>Upload your media:</p>
              <label htmlFor="file-upload" className="custom-file-upload">
                {uploadedImage ? (
                  <img src={uploadedImage} className='w-[152px] h-[108px] object-cover rounded-xl' alt="Uploaded thumbnail" />
                ) : (
                  <img src={thumbnail} className='w-[152px] h-[108px] object-cover rounded-xl' alt="Upload icon" />
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                onChange={handleUploadMedia}
                className="hidden"
              />
            </div>
            <div className="w-40 flex justify-between mb-4">
              <button onClick={handlePrevStep} className="bg-gray-400 px-2 py-2 rounded-lg mt-4 w-full mr-1">
                <p className={`${styles.heading2} !text-black flex justify-center`}>Back</p>
              </button>
              <button onClick={handleNextStep} className="bg-yellow px-2 w-full py-2 rounded-lg mt-4 ml-1">
                <p className={`${styles.heading2} !text-black flex justify-center`}>Next</p>
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Step 3: Confirmation/Submit */}
            <div className={`${styles.marginX} text-center h-full`}>
              <p className={`${styles.heading2} mt-10`}>
                Confirm your submission:
              </p>
            </div>
            <div className="w-40 flex justify-between mb-4">
              <button onClick={handlePrevStep} className="bg-gray-400 px-2  py-2 rounded-lg mt-4 w-full mr-1">
                <p className={`${styles.heading2} !text-black flex justify-center`}>Back</p>
              </button>
              <button onClick={handleSubmit} className="bg-yellow px-2 w-full  py-2 rounded-lg mt-4 ml-1">
                <p className={`${styles.heading2} !text-black flex justify-center`}>Submit</p>
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <div className={`${styles.marginX} relative`}>
           <div className="flex justify-between -mt-1 mb-4">
           <div className=" w-[70px]">   
              <p className={`${styles.paragraph} py-1  border  border-neutral-300 border-opacity-10 bg-black  flex justify-center rounded-xl`}> <img src={tick} className='mr-1 ' alt="" />Verified </p>
              </div>
              <img src={refresh} className='w-[15px] h-[17px] my-auto' />
           </div>
              
            {uploadedImage && (
              <div className="mt-2">
               
                <img src={uploadedImage} className='w-[152px] h-[120px] object-cover rounded-xl' alt="Submitted thumbnail" />
              </div>
            )}
            <div className="mt-6">
              <div className="flex justify-between">
    
                <p className={`${styles.heading2}`}>{quantity} gm</p>
                <div className="">   
              <p className={`${styles.paragraph} py-1  px-4 bg-white !text-black flex rounded-xl`}>View <img src={arrowRight} className='bg-white ml-1' alt="" /></p>
              </div>
              </div>
  
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const navigate = useNavigate()
  const params = useParams()

  const currentDate = moment();

  const formattedStartDate = moment.unix(startDate / 1000);

  const hasChallengeStarted = (date) => {
    const challengeStartDate = moment(date);
    // return ((currentDate.isAfter(challengeStartDate) && joined) ? true: false);
    return (currentDate.isAfter(challengeStartDate))
  };
  // const isChallengeStarted = hasChallengeStarted(formattedStartDate);
  // console.log("Is challenge started?", isChallengeStarted);
  // console.log("current date", currentDate);
  // console.log("start date", formattedStartDate);
  // console.log("joined", joined);
  const getVerificationReq = async () => {

    const data = await getReclaimProof(params.id);
    if (data) {
      window.location.href = data;
    } else {
      console.error("Failed to obtain verification URL.");
      navigate("/");
    }
  };




  return (
    <div className="flex flex-col mt-4 gap-[13px] ">
      <div className="h-[256px] flex justify-between mx-4 rounded-box gap-[2%]">
        <div className="bg-[#192126] relative flex flex-col justify-center items-center rounded-box w-[59%]">
          {(() => {
            switch (type) {
              case 'voting':
                return (
                  <>

                    <img
                      src={bg}
                      className="absolute top-0 right-0 w-[90px] h-[90px] "
                      alt=""
                    />
                    {hasChallengeStarted(formattedStartDate) ? (
                      <>
                        {renderStep()}

                      </>
                    ) : (

                      <div className={`${styles.marginX} text-center`}>
                        <p className={`${styles.heading2}`}>Hello! Welcome! Challenge not started yet.</p>
                      </div>
                    )}

                  </>
                );
              case 'Steps':
              case 'Calories':
                return (
                  <>
                    {/* Step / Calorie Challenge  */}
                    <img
                      src={bg}
                      className="absolute top-0 right-0 w-[90px] h-[90px]"
                      alt=""
                    ></img>
                    <div
                      className={`${styles.paragraph} absolute top-[8px] left-[12px]`}
                    >
                      {moment().format('MMM D, YYYY')}
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
                        <img src={boot} alt=""></img>
                        <div className={`flex flex-col gap-[1px] text-white`}>
                          <div className={`${styles.heading2}`}>{value}</div>
                          <div className={`${styles.paragraph} !text-[10px]`}>
                            Total {type} counted
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              default:
                return (
                  <>
                    {/* Twitter Challenge  */}
                    <img
                      src={bullets}
                      className="absolute bottom-4 right-[40%]"
                      alt=""
                    ></img>
                    <div
                      className={`${styles.paragraph} absolute top-[8px] right-[12px]`}
                      onClick={getVerificationReq}
                    >
                      <img src={refresh} alt=""></img>
                    </div>
                    <div className='flex items-center justify-center h-[55%] gap-[14px]'>
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
                          Twitter
                        </div>
                        <div className={`${styles.paragraph} !text-[10px]`}>
                          {localStorage.getItem('name')}
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-start h-[45%] gap-[9px]'>
                      <div className={`${styles.heading2} flex gap-[4px]`}>
                        {value} <span><img src={likes} alt=""></img></span>
                      </div>
                      <div className={`${styles.paragraph} !font-[400]`}>
                        Total likes on post
                      </div>
                    </div>
                  </>
                );
            }
          })()}
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
        type={game !== '0v1' && leaderBoard.length < 2 ? '0' : game}
        game={type}
        profile={profile}
        styles={styles}
        leaderBoard={leaderBoard}
        creator={creator}
        creatorImg={creatorImg}
        setTab={setTab}
      />

      {item.filter((mem) => !mem.IsStarted).length > 0 && (
        <div className={`${styles.heading2} !text-[16px] !text-[#202117] mx-4`}>
          Explore more challenges
        </div>
      )}
      <ChallengeSlider items={item.filter((mem) => !mem.IsStarted)} />
    </div>
  )
}

export default Progress
