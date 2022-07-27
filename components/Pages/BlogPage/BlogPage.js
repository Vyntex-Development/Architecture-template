import BanerForm from "../../Layout/BanerForm";
import BlogPageHero from "./BlogPageHero";
import Subscribe from "./Subscribe";
import Tranding from "./Tranding";

const BlogPage = () => {
  return (
    <div>
      <BlogPageHero></BlogPageHero>
      <Tranding></Tranding>
      <Subscribe></Subscribe>
      <BanerForm></BanerForm>
    </div>
  );
};

export default BlogPage;
