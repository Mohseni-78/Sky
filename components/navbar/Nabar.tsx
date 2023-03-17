import { useEffect, useState } from "react";
// Imported Icons ============>
import { SiConsul } from "react-icons/si";
import { SiLinear } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { MdFlightTakeoff } from "react-icons/md";
// Imported Images ============>
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showNavBarMenu, setShowNavBarMenu] = useState<boolean>(false);
  const [bgNavbarTwo, setBgNavbarTwo] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setBgNavbarTwo(true) : setBgNavbarTwo(false);
    });
  }, [bgNavbarTwo])

  const showAndHideMenu = () => {
    setShowNavBarMenu((prev) => !prev);
  };



  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={`navBarTwo flex ${bgNavbarTwo && "navbar_with_bg"}`}>
        <div className="logoDiv">
          {/* <MdFlightTakeoff className="logo"/> */}
          <SiLinear className="logo" />
          {/* <img src={logo} alt="" className="Logo" /> */}
        </div>

        <div className={`navBarMenu ${showNavBarMenu && "navBarMenuShow"}`}>
          <ul className="menu flex">
            <li onClick={showAndHideMenu} className="listItem">
              Home
            </li>
            <li onClick={showAndHideMenu} className="listItem">
              About
            </li>
            <li onClick={showAndHideMenu} className="listItem">
              Offers
            </li>
            <li onClick={showAndHideMenu} className="listItem">
              Seats
            </li>
            <li onClick={showAndHideMenu} className="listItem">
              Destinatios
            </li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>

        <button onClick={showAndHideMenu} className="btn flex btnTwo">
          Contact
        </button>
        <div onClick={showAndHideMenu} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
