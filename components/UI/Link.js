import NextLink from "next/link";
import classes from "./Link.module.css";

const Link = ({ children, href, type }) => {
  let className;

  if (type === "dark") {
    className = classes.Dark;
  }

  if (type === "transparent") {
    className = classes.Transparent;
  }

  if (type === "logo") {
    className = classes.Logo;
  }

  if (type === "footer") {
    className = classes.Footer;
  }

  if (type === "bold") {
    className = classes.Bold;
  }

  return (
    <div className={`${classes.Link} ${className}`}>
      <NextLink passHref href={href}>
        <a>{children}</a>
      </NextLink>
    </div>
  );
};

export default Link;
