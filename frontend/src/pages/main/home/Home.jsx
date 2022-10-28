import Banner from "../../../components/home/Banner";
import Character from "../../../components/home/Character";
import Gameplay from "../../../components/home/Gameplay";
import Introduction from "../../../components/home/Introduction";
import Creators from "../../../components/home/Creators";
import News from "../../../components/home/News";
import Story from "../../../components/home/Story";
import "./style.css";
import Footer from "../../../components/home/Footer";
import Audio from "../../../components/audio/Audio";

function Home() {
  return (
    <>
      <div className="mainContainer">
        <Audio />
        <div className="luxy">
          <Banner />
          <div id="container">
            <News />
            <Introduction />
            <Story />
          </div>
          <Character />
          <Gameplay />
          <Creators />
          <Footer />
        </div>
      </div>
      {/* <script src="./luxy.js" charset="utf-8"></script>
      <script>luxy.init();</script> */}
    </>
  );
}

export default Home;
