import Testimonials from "../../Layout/Testimonials";
import Faq from "../../Layout/Faq";
import { useState } from "react";
import HeroProcess from "./HeroProcess";
import ProcessAbout from "./ProcessAbout";
import Included from "./Included";
import BanerForm from "../../Layout/BanerForm";

const ProcessPage = () => {
  const [activeFaq, setActiveFaq] = useState("1");
  return (
    <div>
      <HeroProcess></HeroProcess>
      <ProcessAbout></ProcessAbout>
      <Included></Included>
      <Faq
        activeFaq={activeFaq}
        setActiveFaq={(id) => {
          setActiveFaq(id);
        }}
      ></Faq>
      <Testimonials></Testimonials>
      <BanerForm></BanerForm>
    </div>
  );
};

export default ProcessPage;
