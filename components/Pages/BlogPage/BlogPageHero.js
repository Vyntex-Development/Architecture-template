import classes from "./BlogPageHero.module.css";
import Link from "../../UI/Link";
import Image from "next/image";

const BlogPageHero = () => {
  return (
    <div className={classes.HeroSection}>
      <div className={`${classes.Container} container`}>
        <div className={classes.HeroWrapper}>
          <Link type="blog" href="/newblog">
            <div className={classes.HeroLeft}>
              <h1>Creating Architectural Value through aesthetics</h1>
              <div className={classes.ContentWrapper}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  condimentum gravida lectus finibus mattis.
                </p>
                <div className={classes.DetailsWrapper}>
                  <div className={classes.TimeWrapper}>
                    <div className={classes.TimeImage}>
                      <Image
                        layout="fixed"
                        objectFit="fill"
                        alt="icon"
                        width={12}
                        height={12}
                        src="/images/time.png"
                      ></Image>
                    </div>
                    <p>6min</p>
                  </div>
                  <p className={classes.Margin}>Peter Stanbridge</p>
                  <div className={classes.ArrowImg}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={16}
                      height={6}
                      src="/images/blog_arrow.png"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className={classes.HeroRight}>
            <div className={classes.HeroImgWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/blog_page_hero.png"
              ></Image>
            </div>
            <div className={classes.HeroImgWrapperMobile}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/blog_page_hero_mobile.png"
              ></Image>
            </div>
          </div>
          <div className={classes.NavBorder}></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageHero;
