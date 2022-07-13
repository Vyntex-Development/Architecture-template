import Blog from "../../Layout/Blog";
import Faq from "../../Layout/Faq";
import Hero from "../../Layout/Hero";
import Intro from "../../Layout/Intro";
import Process from "../../Layout/Process";
import Services from "../../Layout/Services";
import Testimonials from "../../Layout/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <Intro></Intro>
      <Services></Services>
      <Testimonials></Testimonials>
      <Process></Process>
      <Blog></Blog>
      <Faq></Faq>
    </>
  );
};

export default HomePage;
