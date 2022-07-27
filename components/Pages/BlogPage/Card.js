import classes from "./Card.module.css";
import Link from "../../UI/Link";
import Image from "next/image";

const Card = () => {
  return (
    <div>
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
              Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
              Nam molestie venenatis malesuada...
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
  );
};

export default Card;
