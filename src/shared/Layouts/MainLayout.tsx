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
          <button className="left-button" onClick={() => toggleSidebar()}>  <i className='bx bx-menu' style={{ color: "#fdf500" }} ></i> </button>
          <div className="search_box">
            <div className="search">
              <div className="select_area">
               <i className='bx bx-search-alt-2' style={{color:'#00a0fd'}}  ></i>
              </div>

              <div className="line"></div>

              <div className="text_and-icon">
                <input type="text" className="search_text" id="search_text" value={searchTerm} placeholder="Find your pokemon...." onChange={(e) => search(e)}/>
              </div>
            </div>
          </div>
          </div>
          {content}
        </div>
      </div>
      );
};

      export default MainLayout;
