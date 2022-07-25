import SEO from "../components/SEO/SEO";
import ProjectCms from "../components/Pages/ProjectCms/ProjectCms";

export default function Project({ data }) {
  return (
    <>
      <SEO />
      <ProjectCms data={data} />
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
