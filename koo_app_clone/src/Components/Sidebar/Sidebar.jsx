import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import "./sidebar.css";
import SidebarOptions from "./SidebarOptions";
// import { Button } from "@mui/material";

function Sidebar() {
  const { handleUsername, username } = useContext(UserContext);

  //handleUsername("test");
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div id="tabcont" className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <Link to="/feed">
          <img
            className="koo-logo"
            src="https://www.kooapp.com/assets/2d634360.svg"
            alt="mainlogo"
          />
        </Link>
        <Link to="/feed">
          <SidebarOptions
            active
            Icon={"https://www.kooapp.com/assets/bce0173d.svg"}
            text="Feed"
            id="feed-sidebar"
          />
        </Link>

        {console.log(username)}
        {username ? (
          <Link to="/profile">
            <SidebarOptions
              Icon={"https://www.kooapp.com/img/profilePlaceholderYellow.svg"}
              text="Profile"
            />
          </Link>
        ) : (
          ""
        )}

        <Link to="/explore">
          <SidebarOptions
            Icon={"https://www.kooapp.com/assets/8a272ace.svg"}
            text="Explore"
          />
        </Link>
        <Link to="/language">
          <SidebarOptions
            Icon={"https://www.kooapp.com/assets/d6c4a8f9.svg"}
            text="Language"
          />
        </Link>

        {username ? (
          <Link to="/notification">
            <SidebarOptions
              Icon={"https://www.kooapp.com/assets/15ce681a.svg"}
              text="Notification"
            />
          </Link>
        ) : (
          <></>
        )}

        {username ? (
          <Link to="/">
            <SidebarOptions
              Icon={"https://www.kooapp.com/assets/a22093ce.svg"}
              text="Logout"
            />
          </Link>
        ) : (
          <></>
        )}

        {username ? (
          <Link to="/addinput">
            <button id="addKooBtn"> + Koo</button>
          </Link>
        ) : (
          <Link to="/addinput">
            <button id="beforesignin"> + Koo</button>
          </Link>
        )}

        {username ? (
          <></>
        ) : (
          <Link to="/">
            <button id="signin"> + Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
