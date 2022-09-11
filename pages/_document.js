import { Html, Head, Main, NextScript, Title } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/public/favicon.ico" />

        <meta name="robots" content="noindex,nofollow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Framer Motion Project" />
        <meta
          property="og:description"
          content="Nextjs Project using framer montion"
        />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Framer Motion Project" />
        <meta property="og:image" content="" />
        <meta name="keywords" content="nextjs,framer motion,animation" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Framer Motion Project</title>

        <link rel="canonical" href="" />
        <link rel="alternate" href="" hreflang="en-us" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
