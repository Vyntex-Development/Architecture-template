import classes from "./Subscribe.module.css";
import Link from "../../UI/Link";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className={classes.SubscribeSection}>
      <div className="container">
        <div className={classes.SubscribeWrapper}>
          <div className={classes.SubscribeLeft}>
            <div className={classes.SubscribeImage}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/subscribe.png"
              ></Image>
            </div>
          </div>
          <div className={classes.SubscribeRight}>
            <div className={classes.SubscribeContent}>
              <h2>Subscribe to our newsletter</h2>
              <p>
                Keep up with our latest tips, news and events. Subscribe to our
                newsletter.
              </p>
              <form method="get">
                <div className={classes.InputWrapper}>
                  <input type="email" placeholder="Email Address*" required />
                  <button type="submit" className={classes.Submit}>
                    SUBSCRIBE
                  </button>
                </div>
              </form>
              <p className={classes.Small}>
                By submitting this form you consent to us emailing you
                occasionally about our products and services.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
