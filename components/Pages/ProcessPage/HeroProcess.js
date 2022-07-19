import Link from "../../UI/Link";
import classes from "./HeroProcess.module.css";
import Image from "next/image";

const HeroProcess = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.HeroWrapper}>
        <div className={classes.HeroLeft}>
          <h1>How does it really work?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum gravida lectus finibus mattis.
          </p>
          <div className={classes.ButtonWrapper}>
            <Link href="/" type="transparent">
              OUR PROCESS
            </Link>
          </div>
          <div className={classes.ArrowImgWrapper}>
            <Image
              layout="fixed"
              objectFit="fill"
              alt="icon"
              width={10}
              height={200}
              src="/images/arrow_process.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProcess;
