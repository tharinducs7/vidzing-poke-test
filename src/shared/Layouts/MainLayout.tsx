import React, { useState } from "react";
// import "./MainLayout.scss";

interface MainLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  teamLength: number
  search: (e: any) => void;
  searchTerm: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ sidebar, content, teamLength, search, searchTerm }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSearchBarFixed = true;
  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <div className="main-layout">
      <div
        className={`main-layout__sidebar ${teamLength !== 0 ? "main-layout__sidebar--open" : ""
          }`}
      >
        {sidebar}
      </div>
      <div
        className={`main-layout__content ${teamLength !== 0 ? "main-layout__content--shrink" : "main-layout__content--streatch"
          }`}
      >
        <div className={`search-box ${teamLength !== 0 ? "shrink" : "strech"}`}>
          <input type="text" value={searchTerm} placeholder="Search for a Pokemon..." onChange={(e) => search(e)} />
          <button> Search</button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default MainLayout;
