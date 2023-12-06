import PillarCards from "../PillarCards/PillarCards";
import AboutUs from "../AboutUs/AboutUs";
import Introduction from "../Introdcution/Introduction";
import Motivation from "../Motivation";
import AppBanner from "../Banner/Banner/AppBanner";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <AppBanner />
      <AboutUs></AboutUs>
      <Motivation></Motivation>
      <Introduction></Introduction>
      <PillarCards></PillarCards>
      <Footer />
    </div>
  );
};

export default Home;
