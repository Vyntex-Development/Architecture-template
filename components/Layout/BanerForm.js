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
        <form>
          <div className={classes.InputWrapper}>
            <input type="text" placeholder="First name*" required></input>
            <input type="text" placeholder="Last name*" required></input>
          </div>
          <div className={classes.InputWrapper}>
            <input type="email" placeholder="Email Address*" required></input>
            <input
              type="tel"
              placeholder="Phone Number*"
              name="phone"
              required
            ></input>
          </div>
          <div className={classes.InputWrapper}>
            <input type="submit" className={classes.Submit}></input>
            <p>
              By submitting this form, I approve that I’ve read the terms and
              condisions and the privacy policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BanerForm;
