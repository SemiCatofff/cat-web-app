import { cardImg, optionBtn, award, avatargrp } from '../../assets/images'
import card2 from '../../assets/images/card2.png'
import styles from '../../styles/style'
import { useNavigate } from 'react-router'
import { getShareableChallengeLink } from '../../utils/ApiCalls'

const ChallengeCard = ({ id, name, date, people, wager, prize, type }) => {
  const navigate = useNavigate()
  const handleOnclick = () => {
    navigate(`/challenge/${id}`)
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Link copied to clipboard!')
    } catch (error) {
      alert('Failed to copy the link')
    }
  }

  const shareChallenge = async (id) => {
    try {
      console.log(id)
      const shareableLinkData = await getShareableChallengeLink(id)
      if (shareableLinkData.success) {
        const challengeUrl = shareableLinkData.data
        await copyToClipboard(challengeUrl)
        alert(
          `Link copied to clipboard! Here's the challenge detail URL: ${challengeUrl}`
        )
      } else {
        alert(shareableLinkData.message)
      }
    } catch (error) {
      alert('Failed to copy the link')
    }
  }

  return (
    <>
      <div className="relative w-full cursor-pointer" onClick={handleOnclick}>
        <img
          src={type === 'Steps' ? cardImg : card2}
          alt=""
          className="w-full "
        />
        <div className={``}>
          <div className={`absolute top-8 w-full px-8`}>
            <div className={`${styles.flexBetween}`}>
              <div
                className={`${styles.caption2} !text-black px-4 bg-gradient-to-r from-white to-white rounded-3xl shadow border-1 border-white  py-2 my-auto  text-center  flex`}
              >
                <img src={avatargrp} alt="" />+ {people} members
              </div>
              <div
                className="rounded px-3 py-4  transparent-bg my-auto"
                onClick={(e) => {
                  e.stopPropagation()
                  shareChallenge()
                }}
              >
                <img src={optionBtn} alt="" />
              </div>
            </div>
          </div>
          <div className={`absolute bottom-6 w-full px-8 `}>
            <div className={`${styles.flexBetween}`}>
              <div
                className={`${styles.caption1} ${styles.marginY} !text-[#B5B5B5]`}
              >
                #{type}
                <br />
                <span className={`${styles.heading2} `}>{name}</span>
                <br />
                <div className="flex">
                  {date}
                  <div className="w-2 h-2 mx-2 rounded-full bg-yellow my-auto" />
                  <div className={`text-white italic`}>
                    Entry : {wager} credits
                  </div>
                </div>
                <div className=" bg-white rounded-full px-1 py-1.5 w-[210px] mt-4 flex">
                  <div className="flex mx-auto">
                    <img src={award} alt="gg" className="mr-2" />
                    <p
                      className={`${styles.heading2} !text-black !text-[12px]`}
                    >
                      Prize Pool{' '}
                      <span className="text-purple-600 font-bold">
                        : {prize} credits
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChallengeCard
