import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";

export const IndexPageTemplate = ({
  background,
  title,
  logo,
  subtitle,
  features,
  primarycolour,
  secondarycolour,
  highcontrast,
  featurestitle,
  companies,
  services,
}) => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid"
        id="banner"
        style={{
          backgroundImage: `url(${
            !!background.childImageSharp
              ? background.childImageSharp.fluid.src
              : background
          })`,
        }}
      >
        <div className="container text-center text-md-left">
          <header>
            <div className="row justify-content-between">
              <div className="col-2">
                <img
                  src={
                    logo.childImageSharp ? logo.childImageSharp.fluid.src : logo
                  }
                  alt="logo"
                />
              </div>
            </div>
          </header>
          <h1
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="display-3 text-white font-weight-bold my-5"
          >
            {title}
          </h1>
          <p
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="lead text-white my-4"
          >
            {subtitle}
          </p>
          <a
            href="#contact"
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="btn my-4 font-weight-bold atlas-cta cta-green"
            style={{background:primarycolour, color: highcontrast ? 'white' : ''}}
          >
            Get Started
          </a>
        </div>
      </div>
      <Features
        features={features}
        services={services}
        highcontrast={highcontrast}
        secondarycolour={secondarycolour}
        primarycolour={primarycolour}
        companies={companies}
        featuresTitle={featurestitle}
      />
    </div>
  );
};
IndexPageTemplate.propTypes = {
  background: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout
      body={frontmatter.body}
      companyname={frontmatter.companyname}
      facebooklink={frontmatter.facebooklink}
      footerbackground={frontmatter.footerbackground}
      instagramlink={frontmatter.instagramlink}
      secondarycolour={frontmatter.secondarycolour}
      highcontrast={frontmatter.highcontrast}
      primarycolour={frontmatter.primarycolour}
    >
      <IndexPageTemplate
        background={frontmatter.background}
        logo={frontmatter.logo}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        highcontrast={frontmatter.highcontrast}
        secondarycolour={frontmatter.secondarycolour}
        primarycolour={frontmatter.primarycolour}
        features={frontmatter.features}
        featurestitle={frontmatter.featurestitle}
        services={frontmatter.services}
        companies={frontmatter.companies}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        body
        companyname
        footerbackground {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        primarycolour
        secondarycolour
        highcontrast
        facebooklink
        instagramlink
        subtitle
        background {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featurestitle
        features {
          featuresentry {
            image {
              childImageSharp {
                fluid(maxWidth: 450, quality: 84) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            body
          }
        }
        services {
          serviceentry {
            image {
              childImageSharp {
                fluid(maxWidth: 650, quality: 84) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            body
          }
        }
        companies {
          companyentry {
            image {
              childImageSharp {
                fluid(maxWidth: 150, quality: 84) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
