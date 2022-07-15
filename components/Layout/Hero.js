import Link from "../UI/Link";
import classes from "./Hero.module.css";
import Image from "next/image";
import CustomLightbox from "./LightBox";

const Hero = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.HeroWrapper}>
        <div className={classes.HeroLeft}>
          <h1>An-awards winning archiects company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum gravida lectus finibus mattis.
          </p>
          <div className={classes.ButtonWrapper}>
            <Link href="/" type="dark">
              EXPLORE SERVICES
            </Link>
            <Link href="/" type="transparent">
              OUR PROJECTS
            </Link>
          </div>
        </div>
        <div className={classes.HeroRight}>
          <div className={classes.HeroImgWrapper}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/hero.png"
            ></Image>
            <div className={classes.LightBoxButton}>
              <CustomLightbox></CustomLightbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
