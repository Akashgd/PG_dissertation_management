import "./css/App.css";
import React, { useEffect } from "react";
import HomePage from "./Components/Landing/HomePage";
import Dashboard from "./Components/Dashboard/Home/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Components/Dashboard/Profile/Profile";
import Ratio from "./Components/Common/Ratio.js"
import SubmitFile from "./Components/Dashboard/Research/Research";
import Summarize from "./Components/Dashboard/Research/Summarize/ProjectList";
import TrackProgress from "./Components/Progress/Track_Progress";
import ProjectSubmission from "./Components/Dashboard/Research/ProjectSubmission";
import HomeProjectList from "./Components/Dashboard/Research/Summarize/HomeProjectList";
import TopicRecommendation from "./Components/Dashboard/Profile/TopicRecommendation";
import Student from "./Components/Dashboard/Home/Users/Student";
import Faculty from "./Components/Dashboard/Home/Users/Faculty";
import Topic from "./Components/Dashboard/Profile/topicduplicacy"
import Meeting from "./Components/meeting/Meeting"
import { Calender } from './Components/meeting/features/calender/Calender'
import Guides from './Components/meeting/features/guides/Guides';
import MyAppointments from './Components/meeting/features/myAppointments/MyAppointments';
function App() {
  useEffect(() => {
    fetch("https://pg-dissertation-management-system.onrender.com/home")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/submit" element={<ProjectSubmission />} />
          <Route path="/dashboard/progress" element={<TrackProgress />} />

          <Route
            path="/dashboard/submit/projects"
            element={<HomeProjectList />}
          />
                    <Route
            path="/dashboard/ratio"
            element={<Ratio/>}
          />
          <Route
            path="/dashboard/recommend"
            element={<TopicRecommendation />}
          />
          <Route
            path="/dashboard/meeting/book"
            element={<Calender />}
          />
          <Route
            path="/dashboard/meeting"
            element={<Meeting />}
          />

            <Route
            path="/dashboard/meeting/myappointments"
            element={<MyAppointments />}
          />
            <Route
            path="/dashboard/topic"
            element={<Topic />}
          />
            <Route
            path="/dashboard/ratio"
            element={<Topic />}
          />
          <Route path="/dashboard/submit/project" element={<Student />} />
          <Route path="/dashboard/projects" element={<Faculty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
