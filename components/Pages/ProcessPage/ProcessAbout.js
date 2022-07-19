import classes from "./ProcessAbout.module.css";
import Image from "next/image";

const ProcessAbout = () => {
  return (
    <div className={classes.ProccesAboutSection}>
      <div className={`${classes.Container} container`}>
        <div className={classes.ProccesAboutWrapper}>
          <div className={classes.AboutLeft}>
            <div className={classes.AboutImgWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/process_about.png"
              ></Image>
            </div>
          </div>
          <div className={classes.AboutRight}>
            <div className={classes.AboutRightWrapper}>
              <h2>About our six steps proven process.</h2>
              <p>
                Aliquam quis neque rhoncus, mattis leo ac, tempus felis.
                Maecenas pharetra, libero sed maximus aliquet, velit odio
                tincidunt lacus, id semper ex dolor eu sapien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAbout;
