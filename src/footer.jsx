import "./footer.css";
import Raek from "./assets/footer-image.jpeg"
function Footer() {
  return (
    <>
      <footer>
        <div className="first-stages">
          <img className="stage-image" src={Raek} alt="" />
          <div className="text-group">
            <p className="uppers">Qissat Al'oshaq</p>
            <span className="down">Artist</span>
          </div>
        </div>
         <div className="player-controls">
      <div className="center">
        <div className="left-controls">
        <button className="control-btn">
          <i className="fas fa-random"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="play-btn">
          <i className="fas fa-pause"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-step-forward"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-redo"></i>
        </button>
      </div>

      <div className="progress-bar">
        <span>0:00</span>
        <input type="range" className="progress" value="0" />
        <span>3:24</span>
      </div>
      </div>
      <div className="right-controls">
        <button className="green-btn">
          <i className="fas fa-play"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-microphone"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-list"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-desktop"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-volume-up"></i>
        </button>
        <input type="range" className="volume-bar" value="100" />
        <button className="control-btn">
          <i className="fas fa-expand"></i>
        </button>
      </div>
    </div>
      </footer>
    </>
  );
}
export default Footer;
