import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from 'next-auth/react'
// Imported Icons ============>
import { SiConsul } from "react-icons/si";
import { SiLinear } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { MdFlightTakeoff } from "react-icons/md";
// Imported Images ============>
// import logo from "../../assets/logo.png";

const Navbar = ({ user }: any) => {
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

  const NavbarJsx: JSX.Element = (<div className="navBar flex">
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
        {
          user? (<>
            <span className="btn" style={{ color: "white" }}>{user}</span>
            <span className="btn" style={{ color: "white", background: "red" }} onClick={(e) => {
              e.preventDefault();
              signOut();
            }}>Sign Out</span>
          </>) :
            <Link href="/signin"><span className="btn" style={{ color: "white", background: "green" }}>Sign In</span></Link>

        }

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
  </div>)


  return (
    <>{NavbarJsx}</>
  );
};

export default Navbar;

