import PillarCards from "../PillarCards/PillarCards";
import AboutUs from "../AboutUs/AboutUs";
import Introduction from "../Introdcution/Introduction";
import Motivation from "../Motivation";
import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner1/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Motivation />
      <Introduction />
      <PillarCards/>
      <Footer />
    </div>
  );
};

export default Home;
