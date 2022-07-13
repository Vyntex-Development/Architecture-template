import Head from "next/head";

const SEO = ({ seo }) => {
  //   const {
  // metaTitle,
  // metaDescription,
  // ogTitle,
  // ogImage,
  // ogType,
  // ogUrl,
  // ogDescription,
  //   } = seo;

  return (
    <Head>
      <title>Title</title>
      <meta name="description" content="Description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:description" content={ogDescription} /> */}
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/site.webmanifest"></link> */}
      <meta name="theme-color" content="#ffffff" />
      {/* <link
        rel="preload"
        href="/fonts/MontBook.woff"
        as="font"
        crossOrigin="anonymous"
      /> */}
    </Head>
  );
};

export default SEO;
