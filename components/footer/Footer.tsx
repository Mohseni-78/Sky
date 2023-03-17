import { useEffect } from 'react';

// Imported Icons
import { SiLinear } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="footer">
      <div className="sectionContainer container flex">
        <div data-aos="fade-up" data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <SiLinear className="logo" />
            {/* <img src="" alt="" /> */}
          </div>

          <p>you mind should be stronger than your feelings, fly!</p>
          <div className="socialIcons flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>
      </div>
      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by <a href="">IsraTech</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
