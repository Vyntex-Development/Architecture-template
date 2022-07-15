import Image from "next/image";
import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={classes.IntroSection}>
      <div className={`${classes.Container} container`}>
        <div className={classes.IntroWrapper}>
          <div className={classes.ElipseWrapper}>
            <Image
              layout="fixed"
              objectFit="fill"
              alt="icon"
              width={12}
              height={32}
              src="/images/arrow.png"
            ></Image>
          </div>
          <div>
            <h2>Introduction</h2>
          </div>
          <div className={classes.IntroContent}>
            <p>
              Nullam egestas justo ac arcu dapibus volutpat. Sed ultrices,
              mauris nec eleifend ultricies, nunc sapien hendrerit ligula, ac
              aliquet lorem nisi sed leo iaculis placerat elit.
            </p>
            <p>
              Sed mi massa, suscipit id urna ac, porttitor maximus diam. Mauris
              egestas risus et sodales faucibus. Curabitur at imperdiet augue,
              in lobortis magna.
            </p>
          </div>
        </div>
        <div className={classes.IntroImagesWrapper}>
          <div className={classes.IntroImageOne}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/intro01.png"
            ></Image>
          </div>
          <div className={classes.IntroImageTwo}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/intro01.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
