import { useEffect } from 'react';
// Imported Icons
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'
// Imported Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
  const InfoJsx: JSX.Element = (<div className="info section">
    <div className="infoContainer container">

      <div className="titileDiv flex">
        <h2 data-aos="fade-right" data-aos-duration='2500'>Travel to make memories all around the word</h2>
        <button data-aos="fade-left" data-aos-duration='2500' className='btn'>View All</button>
      </div>

      <div data-aos="fade-up" data-aos-duration='2500' className="cardsDiv grid">
        <div className="singleCard grid">
          <div className="iconDiv flex ">
            <RxCalendar className='icon' />
          </div>
          <span className="cardTitle">Book & Relax</span>
          <p>you can also call airlines from your phone and book a flight ticket!</p>
        </div>

        <div className="singleCard grid ">
          <div className="iconDiv flex colorOne">
            <BsShieldCheck className='icon' />
          </div>
          <span className="cardTitle">Book & Relax</span>
          <p>you can also call airlines from your phone and book a flight ticket!</p>
        </div>

        <div className="singleCard grid ">
          <div className="iconDiv flex colorTwo">
            <BsBookmarkCheck className='icon' />
          </div>
          <span className="cardTitle">Book & Relax</span>
          <p>you can also call airlines from your phone and book a flight ticket!</p>
        </div>
      </div>

    </div>
  </div>)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>{InfoJsx}</>
  )
}

export default Info