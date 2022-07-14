import Blog from "../../Layout/Blog";
import Faq from "../../Layout/Faq";
import Hero from "../../Layout/Hero";
import Intro from "../../Layout/Intro";
import Process from "../../Layout/Process";
import Services from "../../Layout/Services";
import Testimonials from "../../Layout/Testimonials";
import Baner from "../../Layout/Baner";
import { useState } from "react";

const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState("1");
  return (
    <>
      <Hero></Hero>
      <Intro></Intro>
      <Services></Services>
      <Testimonials></Testimonials>
      <Process></Process>
      <Blog></Blog>
      <Faq
        activeFaq={activeFaq}
        setActiveFaq={(id) => {
          setActiveFaq(id);
        }}
      ></Faq>
      <Baner></Baner>
    </>
  );
};

export default HomePage;
