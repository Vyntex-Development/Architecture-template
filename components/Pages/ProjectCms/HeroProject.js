import classes from "./HeroProject.module.css";
import Link from "../../UI/Link";
import Image from "next/image";

const HeroProject = () => {
  return (
    <div className={classes.HeroSection}>
      <div className={`${classes.Container} container`}>
        <div className={classes.HeroWrapper}>
          <div className={classes.HeroLeft}>
            <h1>Unlocking your properties potential</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              condimentum gravida lectus finibus mattis.
            </p>
            <Link href="/" type="dark">
              EXPLORE PROJECTS
            </Link>
          </div>
          <div className={classes.HeroRight}>
            <div className={classes.HeroImgWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/project_hero.png"
              ></Image>
            </div>
          </div>
          <div className={classes.NavBorder}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroProject;
