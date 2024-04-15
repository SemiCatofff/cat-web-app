import React, { useState, useEffect } from 'react'
import { Input, CheckboxInput } from '../../ui/Input'
import CustomButton from '../../ui/Button'
import styles from '../../../styles/style'
import hippo from '../../../assets/images/hippo.png'
import { yellowarrow } from '../../../assets/images'
import Popup from '../../Popup/Popup'
import { createChallengeAPI } from '../../../utils/ApiCalls'
import { useNavigate, useForm } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPopupState } from '../../../redux/actions/actions'


const DareChallengeForm = ({
  register,
  errors,
  handleSubmit,
  setValue,
  watch,
  setStep
  
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [cid, setCid] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const challengeType = watch('challengeType')
  const GameType = watch('GameType')


  useEffect(() => {
    // Default values for "0v1" and "1v1" challenge types
    const defaults = {
      0: { maxParticipants: '1', target: '1' }, // 0v1 Challenge
      1: { maxParticipants: '2', target: '1' }, // 1v1 Challenge
    }
    const defaultsR = {
      0: { maxParticipants: '2', target: '2' }, // 0v1 Challenge
    }
    if(GameType !== '2'){
      if (defaults[challengeType]) {
        setValue('maxParticipant', defaults[challengeType].maxParticipants)

      }
    }
    else{
      if (defaultsR[challengeType]) {
      setValue('maxParticipant', defaultsR[challengeType].maxParticipants)}
    }
  
  }, [challengeType, setValue])

  function getGameId(participation, game) {
    const gameIdMap = {
      '00': 1, // 0v1 Steps
      '01': 2, // 0v1 Calories
      '10': 3, // 1v1 Steps
      '11': 4, // 1v1 Calories
      '20': 5, // nvn Steps
      '21': 6, // nvn Calories
      '02': 7,
      '12':8
    }
    return gameIdMap[`${participation}${game}`]
  }

  const handleClosePopup = () => {
    dispatch(setPopupState(false))
    setIsPopupOpen(false)
  }

  const goToDashboard = () => {
    navigate(`/challenge/${cid}`)
  }

  const popupContent = isLoading ? (
    <div className={`!z-40`}>
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <h2 className={`${styles.heading1} !text-black `}>Please wait!</h2>
        <p className={`${styles.subheading2} !text-black mt-6`}>
          🎉 Processing Your Request! 🎉
        </p>

        <div className="loader animate-spin rounded-full border-t-4 border-b-4 border-yellow h-12 w-12 mx-auto mt-8"></div>
      </div>
    </div>
  ) : success ? (
    <div className={`!z-40`}>
      <div className={`${styles.paddingX} ${styles.paddingY}  text-center`}>
        <h2 className={`${styles.heading1} !text-black `}>Congratulations!</h2>

        <p className={`${styles.subheading2} !text-black mt-6`}>
          🎉 Request successfully registered! 🎉
        </p>

        <button
          className=" bg-black rounded-full py-5 mt-6 flex w-full"
          onClick={goToDashboard}
        >
          <p className={`${styles.heading2} !text-yellow mx-auto flex`}>
            {' '}
            GO TO CHALLENGE{' '}
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

  const onSubmit = (data) => {
     const gameID = getGameId(data.challengeType, data.GameType)
    
    let request = {
      ChallengeName: data.ChallengeName,
      ChallengeDescription: data.ChallengeDescription,
      StartDate: new Date(data.StartDate).getTime(),
      EndDate: new Date(data.EndDate).getTime(),
      GameID: gameID,
      Wager: parseInt(data.wager),
      MaxParticipants: parseInt(data.maxParticipant),
      Target: parseInt(data.Target),
    }
  
    createChallenge(request)
    setIsLoading(true)
    dispatch(setPopupState(true))
    setIsPopupOpen(true)
  }

  const createChallenge = async (request) => {
  
    const output = await createChallengeAPI(request)
    setIsLoading(false)
    if (output.success) {
      setSuccess(true)
      setCid(output.data.ChallengeID)
    } else {
      setSuccess(false)
    }
  }

  return (
    <>
      <div className="px-4">
        <h1 className=" text-xl text-purple font-semibold mb-3">
          Create a new Challenge
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" relative flex flex-col gap-4 h-[80vh]"
        >
          <Input
            label="Max Participants"
            placeholder="Enter Max Participants"
            errorName="maxParticipant"
            errors={errors}
            disabled={(GameType==="2"?['0']:['0', '1']).includes(challengeType)}
            {...register('maxParticipant', {
              required: 'Max Participants value is required',
            })}
          />
          <Input
            label="Min Paricipants"
            placeholder="Enter Minimum Participants"
            errorName="minParticipants"
            errors={errors}
            disabled={['0', '1'].includes(challengeType)}
          />
          <Input
            label="Target"
            placeholder="Enter Target To Complete"
            errorName="Target"
            errors={errors}
            footerText=""
            {...register('Target', { required: 'Target Required' })}
          />
          <Input
            label="Wager Amount"
            placeholder="Enter Wager Amount"
            errorName="wager"
            errors={errors}
            footerText=""
            {...register('wager', { required: 'wager value is required' })}
          />
          {/* <SelectInput
                    label='Select Wallet'
                    id='selectedWallet'
                    options={["Wallet 1","Wallet 2","Wallet 3"]}
                    {...register("selectedWallet")}
                /> */}
          {/* <ToggleSwitchInput
                    label='Open for all'
                    {...register("openForAll")}
                    // checked={challenge.openForAll}
                    // toggleSwitch={toggleSwitch}
                /> */}
          <div>
            <CheckboxInput
              label="I Accept all the terms and conditions"
              {...register('terms', {
                required: 'You need to accept the terms and conditions',
              })}
            />
            {errors.terms && (
              <p className=" text-sm text-red-500">{errors.terms.message}</p>
            )}
          </div>

          <div className=" pb-32 h-full w-full pt-4">
            <div className=" flex  justify-between gap-2 items-end px-2">
              <CustomButton
                textColor="black"
                buttonColor="[#F2EFFF]"
                type="button"
                onClick={()=>{setStep(1)}}
              >
                Back
              </CustomButton>
              <CustomButton
                textColor="yellow"
                buttonColor="black"
                type="submit"
              >
                Submit
                <img src={yellowarrow} alt="next-arrow" />
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
      <Popup
        isOpen={isPopupOpen}
        content={popupContent}
        onClose={handleClosePopup}
      />
    </>
  )
}

export default DareChallengeForm
