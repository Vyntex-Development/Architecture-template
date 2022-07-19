import SEO from "../components/SEO/SEO";
import ProcessPage from "../components/Pages/ProcessPage/ProcessPage";

export default function Process({ data }) {
  return (
    <>
      <SEO />
      <ProcessPage data={data} />
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
