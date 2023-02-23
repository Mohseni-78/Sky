import Lounge from "./Components/Any/Lounge";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Subscribers from "./Components/Subscribers/Subscribers";
import Support from "./Components/Support/Support";
import Traveles from "./Components/Traveles/Traveles";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      {/* <Support />
      <Info />
      <Lounge />
      <Traveles />
      <Subscribers />
      <Footer /> */}
    </>
  );
}

export default App;
