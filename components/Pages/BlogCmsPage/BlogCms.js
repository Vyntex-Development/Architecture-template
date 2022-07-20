import Baner from "../../Layout/Baner";
import Blog from "../../Layout/Blog";
import BlogMain from "./BlogMain";
import HeroBlog from "./HeroBlog";

const BlogCms = () => {
  return (
    <div>
      <HeroBlog></HeroBlog>
      <BlogMain></BlogMain>
      <Blog></Blog>
      <Baner></Baner>
    </div>
  );
};

export default BlogCms;
