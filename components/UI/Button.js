import classes from "./Button.module.css";

const Button = ({ children, colorType }) => {
  let colorClass;

  if (colorType === "dark") {
    colorClass = classes.Dark;
  }

  if (colorType === "yellow") {
    colorClass = classes.Yellow;
  }

  return (
    <button className={`${classes.Button} ${colorClass}`}>{children}</button>
  );
};

export default Button;
