import React, { useContext, useState } from "react";
import './sidebar.css';
import { assests } from "../../assets/assests/assests";
import { MyContext } from "../../Context/context";

const SideBar = ()=>{

  const[extended, setExtended] = useState(false)
  const {prevPrompts} = useContext(MyContext);

  return <div className="Sidebar">
    <div className="top">
      <img onClick={()=>setExtended(extended=>!extended)} src= {assests.hamburger} alt="" className="menue" />
      <div className="new-chat"   onClick={() => window.location.reload()}>
        <img src={assests.plus} alt="" />
        {extended ? <p>New Chat</p> : null}
      </div>
      {extended ? (
  <div className="recent">
    <p className="recent-title">Recent</p>
    {prevPrompts.length === 0 ? (
      <div className="recent-entry">
        <img src={assests.message} alt="" />
        <p>No recent prompts</p>
      </div>
    ) : (
      prevPrompts.map((item, index) => (
        <div className="recent-entry" key={index}>
          <img src={assests.message} alt="" />
          <p>{item}</p>
        </div>
      ))
    )}
  </div>
) : null}


    </div>
    {/* <div className="bottom">
      <div className="bottom-item recent-entry">
        <img src={assests.help} alt="" />
        {extended ? <p>Help</p> : null}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assests.recent}alt="" />
        {extended ? <p>Activity</p> : null}
      </div>
      <div className="bottom-item recent-entry">
        <img src={assests.setting} alt="" />
        {extended ? <p>Setting</p> : null}

      </div>
    </div> */}
  </div>
  
  
  
}
export default SideBar ; 