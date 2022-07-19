import Testimonials from "../../Layout/Testimonials";
import Faq from "../../Layout/Faq";
import { useState } from "react";

const ProcessPage = () => {
  const [activeFaq, setActiveFaq] = useState("1");
  return (
    <div>
      <Faq
        activeFaq={activeFaq}
        setActiveFaq={(id) => {
          setActiveFaq(id);
        }}
      ></Faq>
      <Testimonials></Testimonials>
    </div>
  );
};

export default ProcessPage;
