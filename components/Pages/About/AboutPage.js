import Testimonials from "../../Layout/Testimonials";
import Blog from "../../Layout/Blog";
import Baner from "../../Layout/Baner";
import HeroAbout from "./HeroAbout";
import Mission from "./Mission";

const AboutPage = () => {
  return (
    <div>
      <HeroAbout></HeroAbout>
      <Mission></Mission>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <Baner></Baner>
    </div>
  );
};

export default AboutPage;
