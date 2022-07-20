import SEO from "../components/SEO/SEO";
import BlogCms from "../components/Pages/BlogCmsPage/BlogCms";

export default function blogCms({ data }) {
  return (
    <>
      <SEO />
      <BlogCms data={data} />
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
