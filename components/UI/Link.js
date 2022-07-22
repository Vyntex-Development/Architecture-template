import NextLink from "next/link";
import classes from "./Link.module.css";

const Link = ({ children, href, type, onClick }) => {
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

  if (type === "smallfooter") {
    className = classes.SmallFooter;
  }

  if (type === "white") {
    className = classes.White;
  }

  if (type === "navOpen") {
    className = classes.NavOpen;
  }
  if (type === "social") {
    className = classes.Social;
  }

  return (
    <div onClick={onClick} className={`${classes.Link} ${className}`}>
      <NextLink passHref href={href}>
        <a>{children}</a>
      </NextLink>
    </div>
  );
};

export default Link;
