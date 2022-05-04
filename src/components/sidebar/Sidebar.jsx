import React from "react";
import "./Sidebar.css";
import scre from '../../images/scre.jpg'
import { HiUserGroup } from "react-icons/hi";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
      { topic === 'Front End Developer Group' ? 
          <div className="sidebar__recentItem">
            <span className="sidebar__hash"><HiUserGroup /></span>
            <p>{topic}</p>
          </div>
          : 
          <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
          </div>
      }
      </div>
    );
  };

  const userName = useSelector(state => state.user.name)

  return (
    <div className="sidebar h-[80vh] ">
      <div className="sidebar__top">
        <img className="img" src={scre} alt=''/>
        <img className="rounded-full w-20 h-20 border-2 mb-2" src='https://via.placeholder.com/150' alt="" />
        <h3 className=" hover:hover-name">{userName}</h3>
        <h4>Frontend Developer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat sidebar__recentItem">
          <p>Who visited your profile?</p>
          <p className="sidebar__statNumber ">22</p>
        </div>
        <div className="sidebar__stat sidebar__recentItem">
          <p>Number of views for a post</p>
          <p className="sidebar__statNumber">23</p>
        </div>
      </div>

      <div className="sidebar__bottom text-right">
        <p>Discuss</p>
        {recentItem("Front End Developer Group")}
        {recentItem("React Developers")}
        {recentItem("React")}
        {recentItem("firebase with React")}
        {recentItem("programming")}
      </div>
    </div>
  );
};

export default Sidebar;