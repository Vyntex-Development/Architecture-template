import SEO from "../components/SEO/SEO";
import AboutPage from "../components/Pages/About/AboutPage";

export default function About({ data }) {
  return (
    <>
      <SEO />
      <AboutPage data={data} />
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
