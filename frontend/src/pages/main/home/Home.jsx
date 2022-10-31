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
import ScrollContainer from "../../../components/home/ScrollContainer";
const scrollIntertia = 70;

function Home() {
  return (
    <>
      <div className="mainContainer">
        <Audio />
        <ScrollContainer scrollIntertia={scrollIntertia}>
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
          </ScrollContainer>
        <div id="sky-bg"></div>
      </div>
      {/* <script src="./luxy.js" charset="utf-8"></script>
      <script>luxy.init();</script> */}
    </>
  );
}

export default Home;
