import { useState } from 'react'
import styles from '../../styles/style'
import profile from '../../assets/images/prof.png'

const Chat = () => {
  const [people, setPeople] = useState([
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '5 Hours Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '15 Hours Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '2 Days Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      name: 'Alice Doe',
      address: '0x7856...jh86sp09',
      steps: '2 Days Ago',
      imageSrc: '/path-to-your-image.jpg',
    },
  ])

  const PlayerInfo = ({ index, name, steps }) => {
    return (
      <div className="h-[74px] py-[15px] flex items-center justify-center border-b-[1px] border-b-[#CDCDCD]">
        <div className="flex justify-left items-start w-[20%]">
          <img
            className="w-[45px] h-[45px] rounded-full mx-[10px]"
            src={profile}
            alt=""
          />
        </div>

        <div className="flex flex-col w-[50%]">
          <p className={`${styles.subheading2} !text-[#4f4f4f] !font-bold`}>
            {name}
          </p>
          <p className={`${styles.subtext} !text-[#4f4f4f]`}>{name}</p>
        </div>
        <div className="flex justify-left h-full items-start w-[30%]">
          <p className={`${styles.subtext} !text-[#4f4f4f]`}>{steps} </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-4 flex flex-col">
      <div className={`flex py-4 px-2 items-center`}>
        <div className="w-[80%] flex flex-col">
          <p className={`${styles.heading1} !text-black !font-semibold`}>
            Hi Alice
          </p>
          {/* <p className={`${styles.subtext} !text-[#4f4f4f]`}>
            How its going
        </p> */}
        </div>
        <div className="w-[91px] h-[45px] flex items-center justify-center rounded-[80px] bg-[#E1F076]">
          <div className={`${styles.caption1} !text-[#202117]`}>Invite</div>
        </div>
      </div>
      {people.map((item, index) => {
        return (
          <PlayerInfo
            index={index}
            name={item.name}
            address={item.address}
            steps={item.steps}
          />
        )
      })}
    </div>
  )
}
export default Chat
