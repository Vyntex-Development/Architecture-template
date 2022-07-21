import Baner from "../../Layout/Baner";
import Blog from "../../Layout/Blog";
import HeaderBlog from "../../Layout/HeaderBlog";
import BlogMain from "./BlogMain";
import HeroBlog from "./HeroBlog";

const BlogCms = () => {
  return (
    <div>
      <HeaderBlog></HeaderBlog>
      <HeroBlog></HeroBlog>
      <BlogMain></BlogMain>
      <Blog></Blog>
      <Baner></Baner>
    </div>
  );
};

export default BlogCms;
