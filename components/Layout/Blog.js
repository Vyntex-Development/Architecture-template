import classes from "./Blog.module.css";
import Image from "next/image";
import Link from "../UI/Link";

const Blog = () => {
  return (
    <div className={classes.BlogSection}>
      <div className={`${classes.Container} container`}>
        <div className={classes.BlogWrapper}>
          <div className={classes.BlogHeading}>
            <h2>Latest Articles</h2>
            <div className={classes.BlogButton}>
              <Link href="/" type="transparent">
                READ ALL
              </Link>
            </div>
          </div>
          <div className={classes.BlogCardsWrapper}>
            <Link type="blog" href="/newblog">
              <div className={classes.BlogCard}>
                <div className={classes.BlogImageWrapper}>
                  <div className={classes.BlogImage}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/blog_01.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.BlogContentWrapper}>
                  <h3>Creating Architectural Value through Aesthetics</h3>
                  <p className={classes.Description}>
                    Donec efficitur dolor et odio tempus, nec lobortis nunc
                    ultricies. Mauris convallis turpis quis imperdiet finibus...
                  </p>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
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
            <Link type="blog" href="/newblog">
              <div className={classes.BlogCard}>
                <div className={classes.BlogImageWrapper}>
                  <div className={classes.BlogImage}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/blog_02.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.BlogContentWrapper}>
                  <h3>Top 300 US Architecture Firms YOU SHOULD KNOW IN 2022</h3>
                  <p className={classes.Description}>
                    Pellentesque rutrum sit amet purus vel auctor. Proin sit
                    amet lacus nec dui maximus posuere vitae vitae...
                  </p>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
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
            <Link className={classes.BlogCard} type="blog" href="/newblog">
              <div className={classes.BlogCard}>
                <div className={classes.BlogImageWrapper}>
                  <div className={classes.BlogImage}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="hero"
                      src="/images/blog_03.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.BlogContentWrapper}>
                  <h3>Stone-Clad Monotony at Norway &apos;s National Museum</h3>
                  <p className={classes.Description}>
                    Maecenas efficitur magna nulla, nec volutpat sem convallis
                    quis. Nam molestie venenatis malesuada...
                  </p>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
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
            <div className={classes.BlogButtonMobile}>
              <Link href="/" type="transparent">
                READ ALL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
