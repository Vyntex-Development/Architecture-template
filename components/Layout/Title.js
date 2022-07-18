import Link from "../UI/Link";

const Title = ({ title, setActiveIndex, index }) => {
  return (
    <div
      className="project-item"
      onMouseEnter={() => {
        setActiveIndex(index);
      }}
      onMouseLeave={() => {
        setActiveIndex(-1);
      }}
    >
      <Link href="/" type="navOpen" className="project-title">
        <span>{title}</span>
      </Link>
    </div>
  );
};
export default Title;
