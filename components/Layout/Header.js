import Image from "next/image";
import classes from "./Header.module.css";
import Link from "../UI/Link";

const Header = () => {
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
          <div className={classes.MenuWrapper}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link
            type="dark"
            href="https://nextjs.org/docs/basic-features/font-optimization"
          >
            FREE CONSULTATION
          </Link>
        </div>
      </div>
      <div className={classes.NavOpen}></div>
    </header>
  );
};

export default Header;
