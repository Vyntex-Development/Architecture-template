import Link from "../UI/Link";

const Title = ({ title, setActiveIndex, index, url, onClick }) => {
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
      <Link
        onClick={onClick}
        href={url}
        type="navOpen"
        className="project-title"
      >
        {title}
      </Link>
    </div>
  );
};
export default Title;
