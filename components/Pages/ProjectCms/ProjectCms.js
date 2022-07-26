import FsLightbox from "fslightbox-react";
import BanerForm from "../../Layout/BanerForm";
import LightBoxGallery from "../../Layout/LightBoxGallery";
import ProjectAbout from "./ProjectAbout";
import ProjectCmsHero from "./ProjectCmsHero";

const ProjectCms = () => {
  return (
    <div>
      <ProjectCmsHero></ProjectCmsHero>
      <ProjectAbout></ProjectAbout>
      <LightBoxGallery></LightBoxGallery>
      <BanerForm></BanerForm>
    </div>
  );
};

export default ProjectCms;
