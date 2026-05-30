import React from "react";
import "./Nav.css";
import img1 from "./assets/spotify (1).png";
const Nav = () => {
  return (
    <div className="spotify-navbar">
      <div className="nav-left">
        <img className="img1" src={img1} alt="" />

        <svg
          className="mySvg"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="#000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3L3 12h3v9h6v-6h0v6h6v-9h3z" />
        </svg>
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#bbb7b7"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input type="text" placeholder="What do you want to play?" />
          <button className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-camera-video"
              viewBox="0 0 16 16"
            >
              <path d="M0 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v.5l3.553-2.13A.5.5 0 0 1 16 3.74v8.52a.5.5 0 0 1-.747.43L11 10.5V11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="nav-right">
        <button className="login">Explore Premium</button>
        <div className="download">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#bbb7b7"
          >
            <path d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          <span>Insatll App</span>
        </div>
        <i style={{color: "#bbb7b7"}} class="fa-regular fa-bell"></i>
        <svg
          className="theSvg"
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          viewBox="0 -960 960 960"
          width="22px"
          fill="#bbb7b7"
        >
          <path d="M711-480Zm209 80H737q-3-21-9.5-41T711-480h126q-4-7-9-12t-12-9q-26-15-59.5-22t-76.5-7h-3q-20-23-43.5-40T582-599q23-5 47.5-8t50.5-3q53 0 99 11t86 32q26 14 40.5 41.5T920-463v63ZM680-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0-40ZM249-480ZM40-400v-63q0-35 14.5-62.5T95-567q40-21 86-32t99-11q26 0 50.5 3t47.5 8q-28 12-51.5 29T283-530h-3q-43 0-76.5 7T144-501q-7 4-12 9t-9 12h126q-10 19-16.5 39t-9.5 41H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-760q0-17-11.5-28.5T280-800q-17 0-28.5 11.5T240-760q0 17 11.5 28.5T280-720Zm0-40Zm200 480q-33 0-56.5-23.5T400-360v-120q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480v120q0 33-23.5 56.5T480-280ZM450-80v-82q-72-11-121-67t-49-131h60q0 58 41 99t99 41q58 0 99-41t41-99h60q0 75-49 131t-121 67v82h-60Z" />
        </svg>
        <div className="over-g">
          <button className="g">G</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
