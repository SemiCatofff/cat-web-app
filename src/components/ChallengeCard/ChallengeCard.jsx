import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cardImg, optionBtn, award, avatargrp } from '../../assets/images'
import card2 from '../../assets/images/card2.png'
import styles from '../../styles/style'

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
      alert('Failed to copy the link.')
    }
  }

  const shareChallenge = (id) => {
    alert(id)
    console.log(id)
    const challengeUrl = `${window.location.origin}/challenge/${id}`
    copyToClipboard(challengeUrl)
  }

  return (
    <div className="relative w-full cursor-pointer" onClick={handleOnclick}>
      <img src={type === 'Steps' ? cardImg : card2} alt="" className="w-full" />
      <div className="absolute top-8 w-full px-8">
        <div className={styles.flexBetween}>
          <div
            className={`${styles.caption2} !text-black px-4 bg-gradient-to-r from-white to-white rounded-3xl shadow border-1 border-white py-2 my-auto text-center flex`}
          >
            <img src={avatargrp} alt="" />+ {people} members
          </div>
          <div
            className="rounded px-3 py-4 transparent-bg my-auto"
            onClick={(e) => {
              e.stopPropagation()
              shareChallenge(id)
            }}
          >
            <img src={optionBtn} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 w-full px-8">
        <div className={styles.flexBetween}>
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
              <div className={`text-white italic`}>Entry : {wager} credits</div>
            </div>
            <div className="bg-white rounded-full px-1 py-1.5 w-[210px] mt-4 flex">
              <div className="flex mx-auto">
                <img src={award} alt="gg" className="mr-2" />
                <p className={`${styles.heading2} !text-black !text-[12px]`}>
                  Prize Pool
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
  )
}

export default ChallengeCard
