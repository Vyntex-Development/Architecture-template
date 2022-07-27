import classes from "./Tranding.module.css";
import Link from "../../UI/Link";
import Image from "next/image";
import Card from "./Card";

const Tranding = () => {
  return (
    <div className={classes.TrandingSection}>
      <div className={`${classes.Container} container`}>
        <h2>Most trending</h2>
        <div className={classes.Cards}>
          <Link className={classes.BlogCard} type="blog" href="/newblog">
            <div className={classes.BlogCard}>
              <div className={classes.BlogImageWrapper}>
                <div className={classes.BlogImage}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/trending_01.png"
                  ></Image>
                </div>
              </div>
              <div className={classes.BlogContentWrapper}>
                <h3>Creating Architectural Value through aesthetics</h3>
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
          <Link className={classes.BlogCard} type="blog" href="/newblog">
            <div className={classes.BlogCard}>
              <div className={classes.BlogImageWrapper}>
                <div className={classes.BlogImage}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/trending_02.png"
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
          <Link className={classes.BlogCard} type="blog" href="/newblog">
            <div className={classes.BlogCard}>
              <div className={classes.BlogImageWrapper}>
                <div className={classes.BlogImage}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/trending_03.png"
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
          <Link className={classes.BlogCard} type="blog" href="/newblog">
            <div className={classes.BlogCard}>
              <div className={classes.BlogImageWrapper}>
                <div className={classes.BlogImage}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/trending_04.png"
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
          <Link className={classes.BlogCard} type="blog" href="/newblog">
            <div className={classes.BlogCard}>
              <div className={classes.BlogImageWrapper}>
                <div className={classes.BlogImage}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/trending_05.png"
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
        </div>
      </div>
    </div>
  );
};

export default Tranding;
