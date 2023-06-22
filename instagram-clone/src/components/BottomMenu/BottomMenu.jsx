import { useState } from "react";
import "./BottomMenu.css";
import { Home, Search, AddIcon, Heart, UserIcon } from "../../icons";

const BottomMenu = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bottom-menu">
      <ul className="bottom-menu__tabs">
        <li
          className={`bottom-menu__tab ${
            activeTab === "home" ? "active" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          <Home />
        </li>
        <li
          className={`bottom-menu__tab ${
            activeTab === "search" ? "active" : ""
          }`}
          onClick={() => handleTabClick("search")}
        >
          <Search />
        </li>
        <li className="bottom-menu__tab--add">
          <AddIcon />
        </li>
        <li
          className={`bottom-menu__tab ${
            activeTab === "likes" ? "active" : ""
          }`}
          onClick={() => handleTabClick("likes")}
        >
          <Heart />
        </li>
        <li
          className={`bottom-menu__tab ${
            activeTab === "profile" ? "active" : ""
          }`}
          onClick={() => handleTabClick("profile")}
        >
          <UserIcon />
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;