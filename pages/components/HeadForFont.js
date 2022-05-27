import React from "react";
import Head from "next/head";

const HeadForFont = () => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&family=Kumbh+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/assets/logo.png" />
      <title>PT. Benua Integrasi Global</title>
    </Head>
  );
};

export default HeadForFont;
