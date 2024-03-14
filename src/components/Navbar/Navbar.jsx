import { useNavigate } from "react-router-dom";
import sel from "../../assets/images/sel.svg";
import category from "../../assets/images/Category.svg";
import setting from "../../assets/images/Setting.svg";
import profile from "../../assets/images/Profile.png";
import add from "../../assets/images/add.png";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  

  return (
    <footer className="mb-4 mx-4 bottom-0 h-custom bg-custom rounded-box absolute left-0 right-0">
      <div className="flex h-full justify-center items-center gap-[12%]">
        <button className="flex flex-col items-center" onClick={()=>{setTab(0)}}>
          <span>
            {" "}
            <img src={category}></img>
          </span>
          <span className="text-xs text-yellow">Explore</span>
          {tab === 0 &&<span className="absolute bottom-[-1px]">
            <img src={sel}></img>
          </span>}
        </button>
        <button className="flex flex-col items-center gap-1" onClick={()=>{setTab(1)}}>
          <span>
            {" "}
            <img src={add}></img>
          </span>
          <span className="text-xs text-yellow">Create</span>
          {tab === 1 && <span className="absolute bottom-[-1px]">
            <img src={sel}></img>
          </span>}
        </button>
        <button className="flex flex-col items-center gap-1" onClick={()=>{setTab(2)}}>
          <span>
            {" "}
            <img src={profile}></img>
          </span>
          <span className="text-xs text-yellow">Profile</span>
          {tab === 2 && <span className="absolute bottom-[-1px]">
            <img src={sel}></img>
          </span>}
        </button>
        <button className="flex flex-col items-center gap-1" onClick={()=>{setTab(3)}}>
          <span>
            {" "}
            <img src={setting}></img>
          </span>
          <span className="text-xs text-yellow">Settings</span>
          {tab === 3 && <span className="absolute bottom-[-1px]">
            <img src={sel}></img>
          </span>}
        </button>
      </div>
    </footer>
  );
}

export default Navbar;
