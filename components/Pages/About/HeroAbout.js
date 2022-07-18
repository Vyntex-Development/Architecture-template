import Image from "next/image";
import Link from "../../UI/Link";
import classes from "./HeroAbout.module.css";
const HeroAbout = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.HeroWrapper}>
        <div className={classes.HeroLeft}>
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum gravida lectus finibus mattis.
          </p>
          <div className={classes.ButtonWrapper}>
            <Link href="/" type="transparent">
              MEET OUR TEAM
            </Link>
          </div>
        </div>
        <div className={classes.HeroRight}>
          <div className={classes.HeroImgWrapper}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/about_hero_01.png"
            ></Image>
          </div>
          <div className={classes.HeroAboutImgWrapperTop}>
            <div className={classes.Border}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/about_hero_02.png"
              ></Image>
            </div>
          </div>
          <div className={classes.HeroAboutImgWrapperBottom}>
            <div className={classes.Border}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/about_hero_03.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
