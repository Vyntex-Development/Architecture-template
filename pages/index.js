import HomePage from "../components/Pages/HomePage/HomePage";
import SEO from "../components/SEO/SEO";

export default function Home({ data }) {
  return (
    <>
      <SEO />
      <HomePage data={data} />
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
