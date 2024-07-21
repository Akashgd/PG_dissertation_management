import NavBar from "../../Common/Nav";
import { useEffect, useState } from "react";
import { checkLogin } from "../../js/checkLogin";
import SubmitFile from "./Research";
import Sidebar from "../Home/Sidebar.js"

export default function ProjectSubmission() {
  const [isLoggedIn, changeState] = useState(false);
  useEffect(() => {
    (async () => {
      const userLoggedIn = await checkLogin();
      userLoggedIn ? changeState(true) : (window.location.href = "/");
    })();
  });
  return (
    <div>
      {isLoggedIn && (
        <div>
          <Sidebar />
          <NavBar />
          <SubmitFile />{" "}
        </div>
      )}
    </div>
  );
}
