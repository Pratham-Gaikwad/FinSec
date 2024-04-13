import "./NavBar.css"

// import {Link} from 'react-scroll'
import Overview from "./Overview";
import LoanApproval from "./LoanApproval";



import { FaGithub ,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"; 

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* Logo */}
        <div className="Logo">
          <img src="Monogram-White.svg" alt="Monogram" />
          <h2>
            <span>S</span>afe
            <span>G</span>uard
          </h2>
        </div>
{/* Menu-items */}
        <div className= {
            showMediaIcons ? "menu mobile-menu" : "menu"
          }>
          <ul>
            <li>
              <a href="#Overview">Overview</a>
            </li>
            <li>
              <a href="#LoanApproval">LoanApproval</a>
            </li>
            <li>
              <a href="#Resume">CreditCheck</a>
            </li>
          </ul>
        </div>
{/* Social-media */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://github.com/Pratham-Gaikwad" target="_Pratham">
                  <FaGithub className="GitHub"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pratham-gaikwad-199829239" target="_Pratham">
                  <FaLinkedinIn className="LinkedIn"/>
                </a>
              </li>
             <li>
                <a href="https://www.instagram.com/_pratham_gaikwad_/" target="_Pratham">
                  <FaInstagram className="Instagram"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/Pratham-Gaikwad" target="_Pratham">
                  <FaTwitter className="Twitter"/>
                </a>
              </li> 
            </ul>
            <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
          </div>
      </nav>
{/* Body Section Start */}
      <main>
        <div className="Cointainer">
          <div className="Component" id="Overview"> <Overview/> </div>
        </div> 

        <div className="Cointainer">
          <div className="Component" id="LoanApproval"> <LoanApproval/> </div>
         </div> 

         <div className="Cointainer">
          <div className="Component" id="Resume"><h1>Credit card</h1></div>
         </div> 
 
      </main>
    </>
  )
}

export default NavBar
