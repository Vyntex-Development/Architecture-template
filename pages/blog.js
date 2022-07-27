import SEO from "../components/SEO/SEO";
import BlogPage from "../components/Pages/BlogPage/BlogPage";

export default function Blog({ data }) {
  return (
    <>
      <SEO />
      <BlogPage data={data} />
    </>
  );
}

export async function getStaticProps() {
  // Odavde vucemo podatke

  //const response = await fetch("URL");
  //const data = await response.json();
  return {
    props: {
      data: {},
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
