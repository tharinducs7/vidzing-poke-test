import React from "react";
interface MainLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  search: (e: any) => void;
  searchTerm: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ sidebar, content, search, searchTerm, sidebarOpen, toggleSidebar }) => {
  return (
    <div className="main-layout">
      <div
        className={`main-layout__sidebar ${sidebarOpen ? "main-layout__sidebar--open" : ""
          }`}
      >
        {sidebar}
      </div>
      <div
        className={`main-layout__content ${sidebarOpen ? "main-layout__content--shrink" : "main-layout__content--streatch"
          }`}
      >
        <div className="header">
          <button className="header__leftButton" onClick={() => toggleSidebar()}>
            <i className='bx bx-menu' style={{ color: "#fdf500" }} ></i>
          </button>
          <div className="header__center">
            <input type="text" className="header__searchBox" value={searchTerm} placeholder="Find your pokemon...." onChange={(e) => search(e)} />
          </div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default MainLayout;
