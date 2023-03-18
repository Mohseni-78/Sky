import { useEffect } from 'react';
// Imported Icons =============>
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'


const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const SearchJsx: JSX.Element = (<div className="search container section">
    <div data-aos="fade-up" data-aos-duration="1500" className="sectionContainer grid">
      <div className="btns flex">
        <div className="singleBtn">
          <span>Economy</span>
        </div>
        <div className="singleBtn">
          <span>Business Class</span>
        </div>
        <div className="singleBtn">
          <span>First Class</span>
        </div>
      </div>
      <div className="searchInputs flex">
        {/* Single Input */}
        <div className="singleInput flex">
          <div className="iconDiv">
            <HiOutlineLocationMarker className="icon" />
          </div>
          <div className="texts">
            <h4>Location</h4>
            <input type="text" placeholder="Where do yo want to go ?" />
          </div>
        </div>
        {/*End*/}
        {/* Single Input */}
        <div className="singleInput flex">
          <div className="iconDiv">
            <RiAccountPinCircleFill className="icon" />
          </div>
          <div className="texts">
            <h4>Traveles</h4>
            <input type="text" placeholder="Add guests" />
          </div>
        </div>
        {/*End*/}

        {/* Single Input */}
        <div className="singleInput flex">
          <div className="iconDiv">
            <RxCalendar className="icon" />
          </div>
          <div className="texts">
            <h4>Check In</h4>
            <input type="text" placeholder="Add date" />
          </div>
        </div>
        {/*End*/}

        {/* Single Input */}
        <div className="singleInput flex">
          <div className="iconDiv">
            <RxCalendar className="icon" />
          </div>
          <div className="texts">
            <h4>Check Out</h4>
            <input type="text" placeholder="Add date" />
          </div>
        </div>
        {/*End*/}
        <button className="btn btn-block flex">Search Flight</button>
      </div>
    </div>
  </div>)
  return (
    <>{SearchJsx}</>
  );
};

export default Search;
