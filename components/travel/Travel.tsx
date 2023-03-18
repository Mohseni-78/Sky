import { useEffect } from 'react';
import Image from 'next/image'
// Imported Images
import travel_img1 from "@/public/images/travel_img1.jpg";
import travel_img2 from "@/public/images/travel_img2.jpg";
import travel_img3 from "@/public/images/travel_img3.jpg";
import travel_img4 from "@/public/images/travel_img4.jpg";
import avatar from "@/public/images/avatar.jpg";
import avatar2 from "@/public/images/avatar2.jpg";
import avatar3 from "@/public/images/avatar3.png";
import avatar4 from "@/public/images/avatar4.jpg";
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Travel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const TravelJsx: JSX.Element = (<div className="traveles container section">
    <div className="sectionContainer">
      <h2>top traveles of this month</h2>

      <div className="travelesContainer grid">

        <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
          <Image src={travel_img1} alt="" className="destinationImag" />
          <div className="travelerDetails">
            <div className="travelerPicture">
              <Image src={avatar} alt="" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>IsraTech</span>
              <p>@IsraTech8</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
          <Image src={travel_img2} alt="" className="destinationImag" />
          <div className="travelerDetails">
            <div className="travelerPicture">
              <Image src={avatar2} alt="" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>IsraTech</span>
              <p>@IsraTech8</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
          <Image src={travel_img3} alt="" className="destinationImag" />
          <div className="travelerDetails">
            <div className="travelerPicture">
              <Image src={avatar3} alt="" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>IsraTech</span>
              <p>@IsraTech8</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
          <Image src={travel_img4} alt="" className="destinationImag" />
          <div className="travelerDetails">
            <div className="travelerPicture">
              <Image src={avatar4} alt="" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>IsraTech</span>
              <p>@IsraTech8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
  return (
    <>{TravelJsx}</>
  );
};

export default Travel;
