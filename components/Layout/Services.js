import Image from "next/image";
import Link from "../UI/Link";
import classes from "./Services.module.css";
import { useRouter } from "next/router";
import { PROJECT_PAGE } from "../../utils/utils";

const Services = () => {
  const { pathname } = useRouter();
  return (
    <div
      className={`${classes.ServicesSection} ${
        pathname === PROJECT_PAGE ? classes.BgColor : ""
      }`}
    >
      <div className={`${classes.Container} container`}>
        <div
          className={`${classes.ServicesWrapper} ${
            pathname === PROJECT_PAGE ? classes.MarginProject : ""
          }`}
        >
          <div className={classes.ServicesLeft}>
            <h2>How can we help?</h2>
            <p>
              Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
              Nam molestie venenatis malesuada. Proin dolor sapien, placerat non
              rhoncus feugiat, ullamcorper vel massa.
            </p>
            <div className={classes.ServicesContentWrapper}>
              <div className={classes.ServicesItemWrapper}>
                <div className={classes.ServicesItem}>
                  <div>
                    <p className="p-large">Project Inception</p>
                  </div>
                  <div className={classes.ServicesArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={16}
                      height={7}
                      src="/images/services_arrow.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.ProgressWrapper}>
                  <div className={classes.Progress}></div>
                </div>
              </div>
              <div className={classes.ServicesItemWrapper}>
                <div className={classes.ServicesItem}>
                  <div>
                    <p className="p-large">Schematic Design</p>
                  </div>
                  <div className={classes.ServicesArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={16}
                      height={7}
                      src="/images/services_arrow.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.ProgressWrapper}>
                  <div className={classes.Progress}></div>
                </div>
              </div>
              <div className={classes.ServicesItemWrapper}>
                <div className={classes.ServicesItem}>
                  <div>
                    <p className="p-large">Design Development</p>
                  </div>
                  <div className={classes.ServicesArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={16}
                      height={7}
                      src="/images/services_arrow.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.ProgressWrapper}>
                  <div className={classes.Progress}></div>
                </div>
              </div>
              <div className={classes.ServicesItemWrapper}>
                <div className={classes.ServicesItem}>
                  <div>
                    <p className="p-large">Bidding and Negotiation</p>
                  </div>
                  <div className={classes.ServicesArrow}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={16}
                      height={7}
                      src="/images/services_arrow.png"
                    ></Image>
                  </div>
                </div>
                <div className={classes.ProgressWrapper}>
                  <div className={classes.Progress}></div>
                </div>
              </div>
            </div>
            <Link type="dark" href="/">
              EXPLORE ALL SERVICES
            </Link>
          </div>
          <div className={classes.ServicesRight}>
            <div className={classes.ServicesImageWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/services.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
