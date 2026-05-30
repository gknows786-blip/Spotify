import "./spotify.css";
import harris from "./assets/harris-j.jpeg"
import maherZain from "./assets/maher-zain.jpg"
import nasheed from "./assets/nasheed.jpeg"
import Card from "./card.jsx";
import { allAudio } from "./spotify.js";
function Spotify() {
  return (
    <>
      <div className="spotify-div">
        <div className="first-roll">
            {allAudio.map((e)=>{
                return(
                    <>
                    
                    </>
                )
            })}
          <Card pic={harris} sty="first-one"  />
          <Card pic={maherZain} sty="first-one" />
          <Card pic={nasheed} sty="first-one"/>
          <Card pic={harris} sty="first-one"  />
          <Card pic={maherZain} sty="first-one" />
          <Card pic={nasheed} sty="first-one"/>
        </div>
        <div className="first-roll">
          <Card pic={maherZain} sty="first-one" />
          <Card pic={nasheed} sty="first-one"/>
          <Card pic={harris} sty="first-one"  />
          <Card pic={maherZain} sty="first-one" />
          <Card pic={harris} sty="first-one"  />
          <Card pic={nasheed} sty="first-one"/>
        </div>

        <footer className="superFooterContainer">
          <div className="mainContentWrapper">
            <div className="sectionGroup">
              <h3 className="sectionTitle">Company</h3>
              <ul className="linkList">
                <li>
                  <a href="#" className="listLink">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    For the Record
                  </a>
                </li>
              </ul>
            </div>

            <div className="sectionGroup">
              <h3 className="sectionTitle">Communities</h3>
              <ul className="linkList">
                <li>
                  <a href="#" className="listLink">
                    For Artists
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Advertising
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Vendors
                  </a>
                </li>
              </ul>
            </div>

            <div className="sectionGroup">
              <h3 className="sectionTitle">links</h3>
              <ul className="linkList">
                <li>
                  <a href="#" className="listLink">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Free
                  </a>
                </li>
              </ul>
            </div>

            <div className="sectionGroup">
              <h3 className="sectionTitle">Premium</h3>
              <ul className="linkList">
                <li>
                  <a href="#" className="listLink">
                    Individual
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Duo
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Family
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Student
                  </a>
                </li>
                <li>
                  <a href="#" className="listLink">
                    Free
                  </a>
                </li>
              </ul>
            </div>

            <div className="socialIconsContainer">
              <a href="#" className="socialIconBtn">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </a>
              <a href="#" className="socialIconBtn">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </a>
              <a href="#" className="socialIconBtn">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </a>
            </div>
          </div>

          {/* <div className="bottomBar">
        <ul className="legalLinksList">
          <li><a href="#" className="legalLink">Legal</a></li>
          <li><a href="#" className="legalLink">Safety & Privacy Center</a></li>
          <li><a href="#" className="legalLink">Privacy Policy</a></li>
          <li><a href="#" className="legalLink">Cookies</a></li>
          <li><a href="#" className="legalLink">About Ads</a></li>
          <li><a href="#" className="legalLink">Accessibility</a></li>
        </ul>
        <div className="copyrightText">&copy; 2025 Spotify AB</div>
      </div> */}
        </footer>
      </div>
    </>
  );
}

export default Spotify;
