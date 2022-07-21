import classes from "./BlogMain.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "../../UI/Link";

const BlogMain = () => {
  const progressWrapperRef = useRef();
  const progressbarRef = useRef();

  useEffect(() => {
    let isScrolling = false;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        isScrolling = true;
        render();
        function render() {
          if (!isScrolling) return;
          progressbarRef.current.value =
            (100 -
              ((progressWrapperRef.current.offsetHeight +
                progressWrapperRef.current.getBoundingClientRect().top) /
                progressWrapperRef.current.offsetHeight) *
                100) *
            1.7;
          isScrolling = false;
        }
      });
    }
  }, []);

  return (
    <div className={`${classes.Container} container`}>
      <div className={classes.MainWrapper}>
        <div ref={progressWrapperRef} className={classes.MainLeft}>
          <div className={classes.Sticky}>
            <div className={classes.ProgressWrapper}>
              <p className={classes.Bold}>
                Underfoot and reaching into the light
              </p>
              <p>By John Doe</p>
              <progress ref={progressbarRef} min="0" max="100" value="1">
                <div className="progress-bar">
                  <span></span>
                </div>
              </progress>
            </div>
            <div className={classes.SocialWrapper}>
              <p className={classes.Share}> Share</p>
              <div className={classes.SocialIcons}>
                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={23}
                    height={24}
                    src="/images/blog_facebook.png"
                  ></Image>
                </Link>

                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={24}
                    height={24}
                    src="/images/blog_twiter.png"
                  ></Image>
                </Link>
                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={24}
                    height={24}
                    src="/images/blog_what.png"
                  ></Image>
                </Link>
              </div>
            </div>
            <div className={classes.FormWrapper}>
              <p className={classes.Share}>Subscribe to our newsletter</p>
              <form method="get">
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                ></input>
                <input className={classes.Submit} type="submit"></input>
                <p>
                  By submitting this form, I approve that I&apos;ve read the
                  terms and condisions and the privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className={classes.MainRight}>
          <div className={classes.HeroRight}>
            <div className={classes.HeroImgWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/blog_hero.png"
              ></Image>
            </div>
            <p className={classes.CaptionRich}>
              A caption appears next to the image and identifies or describes
              the image, and credits the source.
            </p>
          </div>
          <p>
            What the beatles could learn from elementary schools. Why mom was
            right about weather radars. 6 myths uncovered about civil societies.
            The 9 best new technology twitter feeds to follow. 20 uses for world
            books. How royal societies can help you live a better life. How not
            knowing entertainment weeks makes you a rookie. How entertainment
            centers can help you predict the future. How to be unpopular in the
            weather channel world. 20 facts about analysis templates that will
            impress your friends.
          </p>
          <p>
            7 problems with science facts. 8 ways best stores are completely
            overrated. The 17 worst amazing gadgets in history. 16 things about
            future technologies your kids don&apos;t want you to know. Why best
            stores are killing you.
          </p>
          <h2>How business software made me a better person</h2>
          <p>
            How to cheat at accessories and get away with it. This is bold text.
            The complete beginner&apos;s guide to operating systems. This is
            italic text. The only science current event resources you will ever
            need. This is underline text. Why open source software is the new
            black. This is linethrough text. 17 secrets about amazing gadgets
            the government is hiding.
            <span>This is a link text also known as hyperlink.</span>
            How accessories are the new accessories. This is highlight
            background text. The 14 worst songs about passport applications.
          </p>
          <div className={classes.ImgWrapper}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/blog_rich.png"
            ></Image>
          </div>
          <p className={classes.Caption}>
            A caption appears next to the image and identifies or describes the
            image, and credits the source.
          </p>
          <h2>List Text</h2>
          <p>This is list of ol:</p>
          <ol>
            <li>Why cool science experiments are killing you</li>
            <li>Why you&apos;ll never succeed at wholesale accessories</li>
            <li>8 ways electronic devices can make you rich</li>
            <li>8The 20 best resources for science facts</li>
          </ol>
          <h2>List Text</h2>
          <p>This is list of ul:</p>
          <ul>
            <li>Why cool science experiments are killing you</li>
            <li>Why you&apos;ll never succeed at wholesale accessories</li>
            <li>8 ways electronic devices can make you rich</li>
            <li>8The 20 best resources for science facts</li>
          </ul>
          <h2>Quote in rich text</h2>
          <div className={classes.QuoteWrapper}>
            <p>
              “Expose: you&apos;re losing money by not using new inventions.
              Expose: you&apos;re losing money by not using geek ideas. How
              hollywood got science articles all wrong.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
