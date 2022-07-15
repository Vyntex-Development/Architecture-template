import Image from "next/image";
import classes from "./Header.module.css";
import Link from "../UI/Link";
import NavItem from "./NavItem";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className={classes.Header}>
      <div className="container">
        <div className={classes.NavWrapper}>
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
              src="/images/logo.png"
            ></Image>
          </Link>
          <div
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className={`${classes.MenuWrapper} ${
              navOpen ? classes.MenuOpen : ""
            }`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={classes.LinkDark}>
            <Link
              type="dark"
              href="https://nextjs.org/docs/basic-features/font-optimization"
            >
              FREE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${classes.Nav} ${
          navOpen ? classes.NavOpen : classes.NavClose
        }`}
      >
        <div className={classes.NavItemWrapper}>
          <NavItem navText="ABOUT" imgSrc="/images/about_nav.png" />
          <NavItem navText="PROCESS" imgSrc="/images/process_nav.png" />
          <NavItem navText="PROJECTS" imgSrc="/images/project_nav.png" />
          <NavItem navText="SERVICES" imgSrc="/images/services_nav.png" />
          <NavItem navText="BLOG" imgSrc="/images/blog_nav.png" />
          <NavItem navText="CONTACT" imgSrc="/images/contact_nav.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
