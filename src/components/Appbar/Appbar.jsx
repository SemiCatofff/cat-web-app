import { useNavigate } from 'react-router-dom'
import category from '../../assets/images/Category.svg'
import setting from '../../assets/images/chat.png'
import profile from '../../assets/images/Profile.png'
import add from '../../assets/images/add.png'
import { useState } from 'react'

function Appbar() {
  const navigate = useNavigate()
  const [tab, setTab] = useState(0)

  const routes = ['/', '/create', '/dashboard', '/settings']

  const handleTabClick = (index) => {
    setTab(index)
    navigate(routes[index])
  }

  return (
    <footer className=" bottom-0 h-custom bg-custom absolute left-0 right-0">
      <div className="flex h-full justify-center items-center gap-[12%]">
        <button
          className="flex flex-col items-center"
          onClick={() => handleTabClick(0)}
        >
          <span>
            {' '}
            <img src={category} alt=""></img>
          </span>
          <span className="text-xs text-yellow">Explore</span>
        </button>
        <button
          className="flex flex-col items-center gap-1"
          onClick={() => handleTabClick(1)}
        >
          <span>
            {' '}
            <img src={add} alt=""></img>
          </span>
          <span className="text-xs text-yellow">Create</span>
        </button>

        <button
          className="flex flex-col items-center gap-1"
          onClick={() => {
            handleTabClick(4)
          }}
        >
          <span>
            {' '}
            <img src={setting} alt=""></img>
          </span>
          <span className="text-xs text-yellow">Chats</span>
        </button>

        <button
          className="flex flex-col items-center gap-1"
          onClick={() => handleTabClick(2)}
        >
          <span>
            {' '}
            <img src={profile} alt=""></img>
          </span>
          <span className="text-xs text-yellow">Profile</span>
        </button>
      </div>
    </footer>
  )
}

export default Appbar
