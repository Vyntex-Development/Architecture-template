import Image from "next/image";
import Link from "../UI/Link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <div className={classes.FooterWrapper}>
          <div className={classes.FooterLeft}>
            <Link
              type="logo"
              href="https://nextjs.org/docs/basic-features/font-optimization"
            >
              <Image
                layout="fixed"
                objectFit="contain"
                alt="logo"
                width={59}
                height={24}
                src="/images/logo_white.png"
              ></Image>
            </Link>
            <p>
              Maecenas efficitur magna nulla, nec volutpat sem convallis quis.
              Nam molestie venenatis malesuada.
            </p>
            <div className={classes.SocialLinksWrapper}>
              <div className={classes.SocialWrapper}>
                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={23}
                    height={24}
                    src="/images/facebook.png"
                  ></Image>
                </Link>

                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={24}
                    height={24}
                    src="/images/whats.png"
                  ></Image>
                </Link>
                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={24}
                    height={24}
                    src="/images/instagram.png"
                  ></Image>
                </Link>
              </div>
              <div className={classes.SmallLinkWrapper}>
                <Link href="/" type="smallfooter">
                  Privacy
                </Link>
                <Link href="/" type="smallfooter">
                  Terms
                </Link>
                <Link href="/" type="smallfooter">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.FooterMiddle}>
            <div className={classes.LinkWrapper}>
              <p>Contact</p>
              <Link href="/" type="footer">
                About
              </Link>
              <Link href="/" type="footer">
                Process
              </Link>
              <Link href="/" type="footer">
                Projects
              </Link>
              <Link href="/" type="footer">
                Blog
              </Link>
            </div>
            <div className={classes.LinkWrapper}>
              <p>Services</p>
              <Link href="/" type="footer">
                Planning permission
              </Link>
              <Link href="/" type="footer">
                Architectural Design
              </Link>
              <Link href="/" type="footer">
                Interior Design
              </Link>
              <Link href="/" type="footer">
                Urban Design
              </Link>
            </div>
          </div>
          <div className={classes.FooterRight}>
            <div className={classes.Contact}>
              <p>Are you getting the most out of your project?</p>

              <Link href="/" type="white">
                Ask us anything
              </Link>
              <a className={classes.Link} href="telto:6317806123" type="tel">
                <div className={classes.LinkPhone}>
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={16}
                    height={16}
                    src="/images/footer_phone.png"
                  ></Image>
                </div>
                631-780-6123
              </a>
            </div>
            <div className={classes.ContactMobile}>
              <div className={classes.ContactMobileWrapper}>
                <p>Are you getting the most out of your project?</p>

                <Link href="/" type="white">
                  Ask us anything
                </Link>
              </div>
              <a className={classes.Link} href="telto:6317806123" type="tel">
                <div className={classes.LinkPhone}>
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={16}
                    height={16}
                    src="/images/footer_phone.png"
                  ></Image>
                </div>
                631-780-6123
              </a>
            </div>
            <div className={classes.SocialLinksWrapperMobile}>
              <div className={classes.SocialWrapper}>
                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={23}
                    height={24}
                    src="/images/facebook.png"
                  ></Image>
                </Link>

                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={24}
                    height={24}
                    src="/images/whats.png"
                  ></Image>
                </Link>
                <Link href="/" type="social">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    alt="icon"
                    width={24}
                    height={24}
                    src="/images/instagram.png"
                  ></Image>
                </Link>
              </div>
              <div className={classes.SmallLinkWrapper}>
                <Link href="/privacyPolicy" type="smallfooter">
                  Privacy
                </Link>
                <Link href="/" type="smallfooter">
                  Terms
                </Link>
                <Link href="/" type="smallfooter">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
