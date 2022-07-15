import Image from "next/image";
import Link from "../UI/Link";
import classes from "./Faq.module.css";

const Faq = ({ setActiveFaq, activeFaq }) => {
  console.log(activeFaq);
  return (
    <div className="container">
      <div className={classes.FaqWrapper}>
        <div className={classes.FaqLeft}>
          <h2>Got questions? We got answers!</h2>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada.
          </p>
          <div className={classes.ButtonWrapper}>
            <Link href="/" type="dark">
              CONTACT US
            </Link>
            <a className={classes.Link} href="telto:6317806123" type="tel">
              <div className={classes.LinkPhone}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_tel.png"
                ></Image>
              </div>
              631-780-6123
            </a>
          </div>
        </div>
        <div className={classes.FaqRight}>
          <div className={classes.Faq}>
            <div
              onClick={() => {
                setActiveFaq("1");
              }}
              className={`${classes.FaqQuestionWrapper} ${
                activeFaq === "1" ? classes.ActiveQuestion : ""
              }`}
            >
              <p>At what point in my project should I involve an architect?</p>
              <div className={classes.FaqIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_icon.png"
                ></Image>
              </div>
            </div>
            <div
              className={`${classes.FaqAnswerWrapper} ${
                activeFaq === "1" ? classes.Active : ""
              }`}
            >
              <p>
                Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
                Nam molestie venenatis malesuada. Proin dolor sapien, placerat
                non rhoncus feugiat, ullamcorper vel massa.
              </p>
              <p>
                Nullam egestas justo ac arcu dapibus volutpat. Sed ultrices,
                mauris nec eleifend ultricies, nunc sapien hendrerit ligula, ac
                aliquet lorem nisi sed leo iaculis placerat elit.
              </p>
            </div>
            <div className={classes.ProgressWrapper}>
              <div className={classes.Progress}></div>
            </div>
          </div>
          <div className={classes.Faq}>
            <div
              onClick={() => {
                setActiveFaq("2");
              }}
              className={`${classes.FaqQuestionWrapper} ${
                activeFaq === "2" ? classes.ActiveQuestion : ""
              }`}
            >
              <p>How do I find the right architect for my project? </p>
              <div className={classes.FaqIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_icon.png"
                ></Image>
              </div>
            </div>
            <div
              className={`${classes.FaqAnswerWrapper} ${
                activeFaq === "2" ? classes.Active : ""
              }`}
            >
              <p>
                Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
                Nam molestie venenatis malesuada. Proin dolor sapien, placerat
                non rhoncus feugiat, ullamcorper vel massa.
              </p>
              <p>
                Nullam egestas justo ac arcu dapibus volutpat. Sed ultrices,
                mauris nec eleifend ultricies, nunc sapien hendrerit ligula, ac
                aliquet lorem nisi sed leo iaculis placerat elit.
              </p>
            </div>
            <div className={classes.ProgressWrapper}>
              <div className={classes.Progress}></div>
            </div>
          </div>
          <div className={classes.Faq}>
            <div
              onClick={() => {
                setActiveFaq("3");
              }}
              className={`${classes.FaqQuestionWrapper} ${
                activeFaq === "3" ? classes.ActiveQuestion : ""
              }`}
            >
              <p>Don&apos;t architects add substantial cost to a project?</p>
              <div className={classes.FaqIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_icon.png"
                ></Image>
              </div>
            </div>
            <div
              className={`${classes.FaqAnswerWrapper} ${
                activeFaq === "3" ? classes.Active : ""
              }`}
            >
              <p>
                Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
                Nam molestie venenatis malesuada. Proin dolor sapien, placerat
                non rhoncus feugiat, ullamcorper vel massa.
              </p>
              <p>
                Nullam egestas justo ac arcu dapibus volutpat. Sed ultrices,
                mauris nec eleifend ultricies, nunc sapien hendrerit ligula, ac
                aliquet lorem nisi sed leo iaculis placerat elit.
              </p>
            </div>
            <div className={classes.ProgressWrapper}>
              <div className={classes.Progress}></div>
            </div>
          </div>
          <div className={classes.Faq}>
            <div
              onClick={() => {
                setActiveFaq("4");
              }}
              className={`${classes.FaqQuestionWrapper} ${
                activeFaq === "4" ? classes.ActiveQuestion : ""
              }`}
            >
              <p>How are architects compensated?</p>
              <div className={classes.FaqIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_icon.png"
                ></Image>
              </div>
            </div>
            <div
              className={`${classes.FaqAnswerWrapper} ${
                activeFaq === "4" ? classes.Active : ""
              }`}
            >
              <p>
                Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
                Nam molestie venenatis malesuada. Proin dolor sapien, placerat
                non rhoncus feugiat, ullamcorper vel massa.
              </p>
              <p>
                Nullam egestas justo ac arcu dapibus volutpat. Sed ultrices,
                mauris nec eleifend ultricies, nunc sapien hendrerit ligula, ac
                aliquet lorem nisi sed leo iaculis placerat elit.
              </p>
            </div>
            <div className={classes.ProgressWrapper}>
              <div className={classes.Progress}></div>
            </div>
          </div>
          <div className={classes.Faq}>
            <div
              onClick={() => {
                setActiveFaq("5");
              }}
              className={`${classes.FaqQuestionWrapper} ${
                activeFaq === "5" ? classes.ActiveQuestion : ""
              }`}
            >
              <p>What&apos;s my role in the design process?</p>
              <div className={classes.FaqIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={16}
                  height={16}
                  src="/images/faq_icon.png"
                ></Image>
              </div>
            </div>
            <div
              className={`${classes.FaqAnswerWrapper} ${
                activeFaq === "5" ? classes.Active : ""
              }`}
            >
              <p>
                Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
                Nam molestie venenatis malesuada. Proin dolor sapien, placerat
                non rhoncus feugiat, ullamcorper vel massa.
              </p>
              <p>
                Nullam egestas justo ac arcu dapibus volutpat. Sed ultrices,
                mauris nec eleifend ultricies, nunc sapien hendrerit ligula, ac
                aliquet lorem nisi sed leo iaculis placerat elit.
              </p>
            </div>
            <div className={classes.ProgressWrapper}>
              <div className={classes.Progress}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
