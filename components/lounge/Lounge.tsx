import { useEffect } from 'react';
import Image from 'next/image'
// Imported Images
import lounge_img from "@/public/images/lounge_img.jpg";
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="lounge section container">
      <div  className="sectionContainer grid">
        <div data-aos="fade-left" data-aos-duration='2500' className="imgDiv">
          <Image src={lounge_img} alt="" />
        </div>

        <div className="textDiv">
          <h2  data-aos="fade-down" data-aos-duration='1500'>Unaccompanied Minor Longe</h2>

          <div className="grids grid">
            <div data-aos="fade-down" data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">helo through the airpot</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket!
              </p>
            </div>
            <div data-aos="fade-down" data-aos-duration='3500' className="singleGrid">
              <span className="gridTitle">helo through the airpot</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket!
              </p>
            </div>
            <div data-aos="fade-down" data-aos-duration='4500'  className="singleGrid">
              <span className="gridTitle">helo through the airpot</span>
              <p>
                you can also call airlines from your phone and book a flight
                ticket!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
