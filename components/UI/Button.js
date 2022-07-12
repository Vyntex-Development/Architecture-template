import classes from "./Button.module.css";

const Button = ({ children, colorType }) => {
  let colorClass;

  if (colorType === "blue") {
    colorClass = classes.Blue;
  }

  if (colorType === "yellow") {
    colorClass = classes.Yellow;
  }

  return (
    <button className={`${classes.Button} ${colorClass}`}>{children}</button>
  );
};

export default Button;
