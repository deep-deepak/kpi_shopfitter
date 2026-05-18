import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#1B2760" />

        {/* Open Graph */}
        <meta property="og:site_name" content="KPI Shopfitter" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kpishopfitter.co.uk/" />
        <meta property="og:title" content="KPI Shopfitter | Shopfronts, Shutters & Signage London" />
        <meta property="og:description" content="KPI Shopfitter specialises in aluminium shopfronts, roller shutters, curtain walling, automatic doors and signage across London and the UK." />
        <meta property="og:image" content="https://kpishopfitter.co.uk/cover.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
