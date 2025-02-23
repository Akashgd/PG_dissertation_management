import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../Common/Nav";
import UserBody from "./GuideBody";
import { useEffect, useState } from "react";
import { checkLogin } from "../js/checkLogin";
import Sidebar from "../Dashboard/Home/Sidebar.js"

export default function TrackProgress() {
  const [isLoggedIn, changeState] = useState(false);
  useEffect(() => {
    (async () => {
      const userLoggedIn = await checkLogin();
      userLoggedIn ? changeState(true) : (window.location.href = "/");
    })();
  });
  return (
    <div>
      <Sidebar />
      {isLoggedIn && (
        <div>
          {" "}
          <NavBar />
          <UserBody />{" "}
        </div>
      )}
    </div>
  );
}
