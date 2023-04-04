import React, { useState } from "react";
interface MainLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  search: (e: any) => void;
  searchTerm: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ sidebar, content, search, searchTerm, sidebarOpen,  toggleSidebar}) => {
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
        <div className={`search-box ${sidebarOpen ? "shrink" : "strech"}`}>
          <button className="button-30"onClick={() => toggleSidebar()}> <i className='bx  bx-dots-vertical' style={{color:"#ffffff"}} ></i> </button>
          <input type="text" value={searchTerm} placeholder="Search for a Pokemon..." onChange={(e) => search(e)} />
          <button> <i className='bx bx-search-alt-2' style={{color:'#ffffff'}}  ></i></button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default MainLayout;
