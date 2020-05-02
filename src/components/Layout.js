import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./all.sass";
import "./custom.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({
  children,
  body,
  facebooklink,
  footerbackground,
  instagramlink,
  companyname
}) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/webfonts/fa-brands-400.ttf"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.js" />
      </Helmet>
      <div>{children}</div>
      <Footer
        footerbackground={footerbackground}
        body={body}
        companyname={companyname}
        facebooklink={facebooklink}
        instagramlink={instagramlink}
      />
    </div>
  );
};

export default TemplateWrapper;
