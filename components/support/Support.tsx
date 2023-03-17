import { useEffect } from 'react';
import Image from 'next/image'

// imported Images ==========>
import support_img from "@/public/images/support_img.jpg";
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="divTitles">
          <small>travel support</small>
          <h2>plan your travel with confidence</h2>
          <p>
            find help with booking and travel plans, see what to expect along
            the journey !
          </p>
        </div>

        <div className="infoDiv flex">
          <div className="textDiv">
            <div data-aos="fade-down" data-aos-duration='1500' className="singleInfo">
              <span className="number">01</span>
              <h4>travel requirements for Dubai</h4>
              <p>
                find help with booking and travel plans, see what to expect
                along the journey to your favorite destinations
              </p>
            </div>

            <div data-aos="fade-down" data-aos-duration='5500'  className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>travel requirements for Dubai</h4>
              <p>
                find help with booking and travel plans, see what to expect
                along the journey to your favorite destinations
              </p>
            </div>

            <div data-aos="fade-down" data-aos-duration='5500' className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>travel requirements for Dubai</h4>
              <p>
                find help with booking and travel plans, see what to expect
                along the journey to your favorite destinations
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration='2500' className="imgDiv">
            <Image src={support_img} alt="grid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
