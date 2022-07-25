import Baner from "../../Layout/Baner";
import Services from "../../Layout/Services";
import Testimonials from "../../Layout/Testimonials";
import HeroProject from "./HeroProject";
import ProjectMain from "./ProjectMain";

const ProjectCms = () => {
  return (
    <div>
      <HeroProject></HeroProject>
      <ProjectMain></ProjectMain>
      <Testimonials></Testimonials>
      <Services></Services>
      <Baner></Baner>
    </div>
  );
};

export default ProjectCms;
