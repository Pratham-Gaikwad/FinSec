import "./NavBar.css"
import Overview from "../Overview/Overview"
import LoanApproval from "../LoanApproval/LoanApproval";
import CreditCardCheck from "../CreditCard/CreditCardCheck";



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
          <img src="/monogram.svg" alt="Monogram" />
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
              <a href="#CreditCheck">CreditCheck</a>
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
          <div className="Component" id="CreditCheck"><CreditCardCheck/></div>
         </div> 
 
      </main>
    </>
  )
}

export default NavBar
