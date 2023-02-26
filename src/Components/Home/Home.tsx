import { useEffect } from 'react';
//Imported Assests ===========>
import takeoff from '../../assets/takeOff.png'
import sky from '../../assets/sky.mp4'
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
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
          <video src={sky} className="video" autoPlay loop ></video>
        </div>
        <img src={takeoff} alt="" className="plain" />
      </div>
    </div>
  );
};

export default Home;
