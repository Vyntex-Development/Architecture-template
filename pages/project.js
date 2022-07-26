import SEO from "../components/SEO/SEO";
import ProjectPage from "../components/Pages/ProjectPage/ProjectPage";

export default function Project({ data }) {
  return (
    <>
      <SEO />
      <ProjectPage data={data} />
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
