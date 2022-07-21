import classes from "./HeroBlog.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

const HeroBlog = () => {
  const progressNav = useRef();
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
              ((progressNav.current.offsetHeight +
                progressNav.current.getBoundingClientRect().top) /
                progressNav.current.offsetHeight) *
                100) *
            0.09;
          isScrolling = false;
        }
      });
    }
  }, []);

  return (
    <div>
      <div ref={progressNav} className={classes.HeroWrapper}>
        <progress ref={progressbarRef} min="0" max="100" value="1">
          <div className="progress-bar">
            <span></span>
          </div>
        </progress>
        <div className={classes.HeroLeft}>
          <h1>Underfoot and reaching into the light</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum gravida lectus finibus mattis.
          </p>
          <div className={classes.ArrowImgWrapper}>
            <Image
              layout="fixed"
              objectFit="fill"
              alt="icon"
              width={11}
              height={80}
              src="/images/arrow_blog_cms.png"
            ></Image>
          </div>
        </div>
        <div className={classes.HeroRight}>
          <div className={classes.HeroImgWrapper}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero"
              src="/images/blog_hero.png"
            ></Image>
          </div>
        </div>
        <div className={`${classes.Container} container`}>
          <p className={classes.Caption}>
            A caption appears next to the image and identifies or describes the
            image, and credits the source.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
