import SEO from "../components/SEO/SEO";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage/PrivacyPolicyPage";

export default function Privacy({ data }) {
  return (
    <>
      <SEO />
      <PrivacyPolicyPage data={data} />
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
