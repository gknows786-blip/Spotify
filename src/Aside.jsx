import "./Aside.css";
import harris from "./assets/harris-j.jpeg"
import nasheed from "./assets/nasheed.jpeg"
import maherZain from "./assets/maher-zain.jpg"
import Liked from "./assets/liked.jpg"
function Aside() {
  return (
    <>
      <aside>
        <div className="top">
          <p>Your Library</p>
          <div className="add">
            <div className="over-add">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#bbb7b7"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22px"
              viewBox="0 -960 960 960"
              width="22px"
              fill="#bbb7b7"
            >
              <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z" />
            </svg>
          </div>
        </div>
        <div className="second">
          <div className="playlist">Playlists</div>
          <div className="artist">Artists</div>
        </div>
        <div className="third">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#bbb7b7"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <div className="recent">
            <span>Recents</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#bbb7b7"
            >
              <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm0-146q44-26 94-40t106-14q56 0 106 14t94 40v-334H120v334Zm200 26q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm0-110q-45 0-77.5-32.5T210-540q0-45 32.5-77.5T320-650q45 0 77.5 32.5T430-540q0 45-32.5 77.5T320-430Zm0-74q15 0 25.5-10.5T356-540q0-15-10.5-25.5T320-576q-15 0-25.5 10.5T284-540q0 15 10.5 25.5T320-504Zm360 304v-560h80v560h-80Zm160 0v-560h80v560h-80ZM320-540Zm0 260Z" />
            </svg>
          </div>
        </div>
        <div className="fourth">
          <div className="first-stage">
            <img className="stage-image" src={Liked} alt="" />
            <div className="text-group">
              <p className="upper">Liked Songs</p>
              <span className="down">Playlist.27 songs</span>
            </div>
          </div>
          <div className="first-stage">
            <img className="stage-image" src={nasheed} alt="" />
            <div className="text-group">
              <p className="upper">TikTok nasheeds</p>
              <span className="down">30 songs</span>
            </div>
          </div>
          <div className="first-stage">
            <img className="stage-image" src={harris} alt="" />
            <div className="text-group">
              <p className="upper">Harris j</p>
              <span className="down">22 songs</span>
            </div>
          </div>
          <div className="first-stage">
            <img className="stage-image" src={maherZain} alt="" />
            <div className="text-group">
              <p className="upper">Maher zain</p>
              <span className="down">Artist</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Aside;
