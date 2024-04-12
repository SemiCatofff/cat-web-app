import flame from '../../assets/images/flame.png'
import React, { useEffect } from 'react'
import styles from '../../styles/style'
import hippo from '../../assets/images/hippo.png'
import batch from '../../assets/images/batch.png'
import move from '../../assets/images/move.png'
import blur from '../../assets/images/blur.png'


const Position = ({ type, profile, leaderBoard, creator, creatorImg, setTab, game }) => {
  const handleTab = () => {setTab(1)}
  const Competitor = ({ profileSrc, name, steps, isUser }) => (
    <div className="w-[43%] h-full flex flex-col items-center relative gap-[15px]">
      <div className="relative h-[85px] w-[85px] flex items-end justify-center">
        {isUser && (
          <img
            src={flame}
            className="absolute z-0 h-full w-full object-cover" // object-cover or object-scale-down based on your need
            alt="Flame"
          />
        )}
        <img
          className="w-16 h-16 border-4 border-[#E1F076] rounded-full z-10 relative" // Tailwind's w-16 and h-16 are 4rem or 64px by default
          src={profileSrc}
          alt={name}
        />
      </div>

      <div className="flex flex-col items-center z-20 relative">
        <span className={`${styles.subheading} !text-[#202117]`}>{name}</span>

        {!isUser ? (
          <span className={`${styles.subtext} !text-[#202117]`}style={{ filter: 'blur(3px)' }}>
            {steps} {game === "DigitalProof" ? "Points": game}
          </span>
        ) : (
          <span className={`${styles.subtext} !text-[#202117]`}>
          {steps} {game === "DigitalProof" ? "Points": game}
        </span>
        )}
      </div>
    </div>
  )
  const renderMatchType = () => {
    switch (type) {
      case 'nvn':
        return (
          <div className="h-full w-full flex flex-col items-center justify-center gap-[6px]">
            <div className="h-[45px] w-[211px] bg-[#FFFFFF] rounded-[12px] px-4 flex items-center justify-center relative " style={{ filter: 'blur(4px)' }}>
            
              <div className={`${styles.subheading} !text-[#4f4f4f]`} >{4}</div>
              <div>
                <img
                  className="w-[30px] h-[30px] rounded-full mx-[10px]"
                  src={profile}
                  alt=""
                />
              </div>

              <div className="flex-1 ml-2 mr-2">
                <p className={`${styles.subheading} !text-[#4f4f4f]`}>User</p>
              </div>
              <div className="flex justify-center items-center rounded-full text-[10px] font-medium text-[#4f4f4f]">
                <p className={`${styles.subtext} !text-[#4f4f4f]`}>0</p>
              </div>
            </div>
            <div className="h-[45px] w-[211px] bg-yellow rounded-[12px] px-4 flex items-center justify-center">
              <div className={`${styles.subheading} !text-[#4f4f4f]`}>{leaderBoard.length > 0 ? leaderBoard.findIndex(user => user.username === localStorage.getItem('name')) + 1 : ""}</div>
              <div>
                <img
                  className="w-[30px] h-[30px] rounded-full mx-[10px]"
                  src={leaderBoard.length > 0? leaderBoard.find(user => user.username === localStorage.getItem('name')).profilePicture : ""}
                  alt=""
                />
              </div>

              <div className="flex-1 ml-2 mr-2">
                <p className={`${styles.subheading} !text-[#4f4f4f]`}>{leaderBoard.length > 0? leaderBoard.find(user => user.username === localStorage.getItem('name')).username: "40"}</p>
              </div>
              <div className="flex justify-center items-center rounded-full text-[10px] font-medium text-[#4f4f4f]">
                <p className={`${styles.subtext} !text-[#4f4f4f]`}>{leaderBoard.length > 0? leaderBoard.find(user => user.username === localStorage.getItem('name')).value : "40"}  </p>
              </div>
            </div>
            <div className="h-[45px] w-[211px] bg-[#FFFFFF] rounded-[12px] px-4 flex items-center justify-center relative" style={{ filter: 'blur(4px)' }}>
              <div className={`${styles.subheading} !text-[#4f4f4f]`}>{4}</div>
              <div>
                <img
                  className="w-[30px] h-[30px] rounded-full mx-[10px]"
                  src={profile}
                  alt=""
                />
              </div>

              <div className="flex-1 ml-2 mr-2">
                <p className={`${styles.subheading} !text-[#4f4f4f]`}>User</p>
              </div>
              <div className="flex justify-center items-center rounded-full text-[10px] font-medium text-[#4f4f4f]">
                <p className={`${styles.subtext} !text-[#4f4f4f]`}>steps </p>
              </div>
            </div>
          </div>
        )

      case '1v1':
        return (
          <div className="flex w-full justify-between">
            <Competitor
              profileSrc={
                leaderBoard.length > 0 ? leaderBoard[0].profilePicture : ''
              }
              name={leaderBoard.length > 0 ? leaderBoard[0].username : ''}
              steps={leaderBoard.length > 0 ? leaderBoard[0].value : ''}
              isUser={leaderBoard[0].username == localStorage.getItem('name')}
            />
            <div className="w-[14%] flex justify-center items-center">
              <div className={`${styles.buttoncta2} !text-[#202117]`}>v/s</div>
            </div>
            <Competitor
              profileSrc={
                leaderBoard.length > 0 ? leaderBoard[1].profilePicture : ''
              }
              name={leaderBoard.length > 0 ? leaderBoard[1].username : ''}
              steps={leaderBoard.length > 0 ? leaderBoard[0].value : ''}
              isUser={leaderBoard[1].username == localStorage.getItem('name')}
            />
          </div>
        )
      case '0v1':
        return (
          <div className="flex w-full justify-between">
            <Competitor
              profileSrc={
                leaderBoard.length > 0 ? leaderBoard[0].profilePicture : ''
              }
              name={leaderBoard.length > 0 ? leaderBoard[0].username : ''}
              steps={leaderBoard.length > 0 ? leaderBoard[0].value : ''}
              isUser={false}
            />
            <div className="w-[14%] flex justify-center items-end">
              <div className={`${styles.buttoncta2} !text-[#202117]`}>v/s</div>
            </div>
            <Competitor
              profileSrc={creatorImg}
              name={creator}
              steps={0}
              isUser={true}
            />
          </div>
        )

      case '0':
        return (
          <div className="h-full w-full">
            <div
              className={`${styles.heading2} !text-[#FF725E] mx-3 my-4 flex items-center justify-center`}
            >
              Seems Like No One Else Joined In.{' '}
            </div>

            <div className="h-[75%] w-[90%] flex items-center justify-center">
              <img src={hippo}></img>
            </div>
          </div>
        )
      default:
        return null // or some default case
    }
  }

  return (
    <div className="h-[241px] mx-4 rounded-box border-[1px] border-grey flex flex-col">
      {type != 0 && (
        <div className="flex items-center px-3 py-3 gap-[3%]">
          <img src={batch} className="h-[30px]"></img>
          <div className=" gap-[1px] w-[88%]">
            <div className={`${styles.heading2} !text-[#202117] `}>
              Keep Going!{' '}
            </div>
            <div className={`${styles.subtext} !text-[#202117] !text-[12px] `}>
              You are 80% ahead of the folks !{' '}
            </div>
          </div>

          <img src={move} className="h-[40px]" onClick = {handleTab}></img>
        </div>
      )}
      {renderMatchType()}
    </div>
  )
}

export default Position
