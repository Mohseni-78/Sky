//Imported Assests ===========>
import takeoff from '../../assets/takeOff.png'
import sky from '../../assets/sky.mp4'
const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video autoPlay loop src={sky} className="video"></video>
        </div>
        <img src={takeoff} alt="" className="plain" />
      </div>
    </div>
  );
};

export default Home;
