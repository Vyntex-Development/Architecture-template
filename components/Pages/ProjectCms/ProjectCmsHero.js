import classes from "./ProjectCmsHero.module.css";
import Image from "next/image";

const ProjectCmsHero = () => {
  return (
    <div className={classes.HeroWrapper}>
      <div className={classes.HeroTop}>
        <div className={`${classes.Container} container`}>
          <h1>Creating central hubs and workspaces</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum gravida lectus finibus mattis.
          </p>
        </div>
      </div>
      <div className={classes.HeroBottom}>
        <div className={classes.HeroImage}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="hero"
            src="/images/project_cms_hero.png"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ProjectCmsHero;
