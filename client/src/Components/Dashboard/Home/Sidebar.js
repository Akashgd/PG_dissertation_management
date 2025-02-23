import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Calendar from "./My components/Calendar";
import Dashboard from "./My components/Dashboard";
import StudentToGuideRatio from "./My components/StudentToGuideRatio";
import ConnectWithGuide from "./My components/ConnectWithGuide";
import MeetingWithGuide from "./My components/MeetingWithGuide";
import SubmitProjectRepo from "./My components/SubmitProjectRepo";
import TopicRecommendationComponent from "./My components/TopicRecommendationComponent";
import TaskManagerComponent from "./My components/TaskManagerComponent";

import DashboardIcon from "./Assets/dashboard.svg";
import PieChartICon from "./Assets/pie-chart.svg";
import ChatIcon from "./Assets/chat.svg";
import MeetIcon from "./Assets/meeting.svg";
import SubmitProjectIcon from "./Assets/submit-project.svg";
import TopicIcon from "./Assets/light-bulb.svg";
import Lens from "./Assets/magnifying.svg";
import TaskIcon from "./Assets/task.svg";
import LeaaderboardIcon from "./Assets/leaderboard.svg";
import toggleButtonImage from "./Assets/menu.svg";
import Footer from "./My components/footer";
import RightNav from "./My components/RightSideNav";
import HomeIcon from "./Users/Guide/Assets/home.svg";
const StudentBody = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const storedShowSidebar = localStorage.getItem("showSidebar");
    if (storedShowSidebar !== null) {
      setShowSidebar(storedShowSidebar === "true");
    }
  }, []);

  const toggleSidebar = () => {
    const updatedShowSidebar = !showSidebar;
    setShowSidebar(updatedShowSidebar);
    localStorage.setItem("showSidebar", updatedShowSidebar.toString());
  };
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing local storage and redirecting to login page
    localStorage.clear();
    window.location.href = "/"; // Redirect to login page
  };


  return (
    <div className="user-box">
      <div className={`app-container ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="sidebarx">
          <ul>
          <li>
              <NavLink to="/dashboard">
                <div className="link">
                  <div className="icon">
                    <img src={HomeIcon} />
                  </div>

                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/progress">
                <div className="link">
                  <div className="icon">
                    <img src={TaskIcon} />
                  </div>
  
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/submit/project">
                <div className="link">
                  <div className="icon">
                    <img src={SubmitProjectIcon} />
                  </div>
   
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/recommend">
                <div className="link">
                  <div className="icon">
                    <img src={TopicIcon} />
                  </div>

                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/topic">
                <div className="link">
                  <div className="icon">
                    <img src={Lens} />
                  </div>
  
                </div>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard/meeting">
                <div className="link">
                  <div className="icon">
                    <img src={MeetIcon} />
                  </div>

                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/ratio">
                <div className="link">
                  <div className="icon">
                    <img src={PieChartICon} />
                  </div>
   
                </div>
              </NavLink>
            </li>





          </ul>
        </div>



      </div>

    </div>
  );
};

export default StudentBody;
