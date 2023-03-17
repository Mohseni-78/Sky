import { useEffect } from 'react';
import Image from "next/image"
//Imported Assests ===========>
import takeoff from '@/public/images/takeOff.png'
// import sky from "@/public/images/sky.mp4"
// Imported Aos
import Aos from "aos"
import 'aos/dist/aos.css'

const Head = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration='2500'>Create Ever-lasting Memories With us</h1>
      </div>
      <div data-aos="fade-down" data-aos-duration='2500' className="homeImages flex">
        <div className="videoDiv">
          {/* <video src={sky} className="video" autoPlay loop ></video> */}
        </div>
        <Image src={takeoff} alt="" className="plain" />
      </div>
    </div>
  );
};

export default Head;
