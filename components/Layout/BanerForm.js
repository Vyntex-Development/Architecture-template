import Image from "next/image";
import Link from "../UI/Link";
import classes from "./BanerForm.module.css";

const BanerForm = () => {
  return (
    <div className={classes.BanerSection}>
      <div className={classes.BanerLeft}>
        <div className={classes.BanerImage}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="baner"
            src="/images/baner_form.png"
          ></Image>
        </div>
      </div>
      <div className={classes.BanerContent}>
        <div className={classes.ContentWrapper}>
          <h2>Not sure how to start? Get a free consultation.</h2>
          <p>One of our experts will get back to you asap.</p>
        </div>
      </div>
    </div>
  );
};

export default BanerForm;
