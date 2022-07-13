import Image from "next/image";
import Link from "../UI/Link";
import classes from "./Baner.module.css";
const Baner = () => {
  return (
    <div className={classes.BanerSection}>
      <div className={classes.BanerLeft}>
        <div className={classes.BanerImage}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="baner"
            src="/images/baner.png"
          ></Image>
        </div>
      </div>
      <div className={classes.BanerContent}>
        <div className={classes.ContentWrapper}>
          <h2>Not sure how to start? Get a free consultation.</h2>
          <p>One of our experts will get back to you asap.</p>
          <Link href="/" type="dark">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baner;
