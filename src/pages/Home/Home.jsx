import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Header.jsx/Banner";
import Service from "../../components/Service/Service";
import ServiceInfo from "../../components/ServiceInfo/ServiceInfo";
import Footer from "./../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="container  m-auto px-2 md:px-10">
        <Banner />
        <AboutUs />
        <Service />
        <ServiceInfo />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
