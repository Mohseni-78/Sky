import { useEffect } from 'react';
// Imported Images
import travel_img1 from "../../assets/travel_img1.jpg";
import travel_img2 from "../../assets/travel_img2.jpg";
import travel_img3 from "../../assets/travel_img3.jpg";
import travel_img4 from "../../assets/travel_img4.jpg";
import avatar from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.jpg";
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Traveles = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="traveles container section">
      <div className="sectionContainer">
        <h2>top traveles of this month</h2>

        <div className="travelesContainer grid">

          <div  data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
            <img src={travel_img1} alt="" className="destinationImag" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={avatar} alt="" className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>IsraTech</span>
                <p>@IsraTech8</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
            <img src={travel_img2} alt="" className="destinationImag" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={avatar2} alt="" className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>IsraTech</span>
                <p>@IsraTech8</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
            <img src={travel_img3} alt="" className="destinationImag" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={avatar3} alt="" className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>IsraTech</span>
                <p>@IsraTech8</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration='2500' className="singleTraveler">
            <img src={travel_img4} alt="" className="destinationImag" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={avatar4} alt="" className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>IsraTech</span>
                <p>@IsraTech8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traveles;
