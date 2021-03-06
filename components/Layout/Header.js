import Image from "next/image";
import classes from "./Header.module.css";
import Link from "../UI/Link";
import { useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import Title from "./Title";
import Media from "./Media";
import { data } from "../../data/nav-data";

const Header = () => {
  const { x, y } = useMousePosition();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  const onNavigationClose = () => {
    setNavOpen(false);
  };

  return (
    <header className={classes.Header}>
      <div className={`${classes.Container} container`}>
        <div className={classes.NavWrapper}>
          <Link type="logo" href="/">
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
          <nav className="nav-wrapper">
            <div className={`${classes.List} project-list`}>
              {data.map(({ title, url }, index) => {
                return (
                  <Title
                    key={index}
                    title={title}
                    setActiveIndex={setActiveIndex}
                    index={index}
                    url={url}
                    onClick={onNavigationClose}
                  />
                );
              })}
            </div>
            <div className={`${classes.Media} project-media`}>
              {data.map(({ imgUrl }, index) => {
                const isActive = activeIndex === index;
                const xPos = isActive ? x : 0;
                const yPos = isActive ? y : 0;
                return (
                  <Media
                    key={index}
                    url={imgUrl}
                    active={isActive}
                    x={xPos}
                    y={yPos}
                  />
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
