import React from "react";
import PropTypes from "prop-types";

const FeatureGrid = ({ features, featuresTitle, companies, services }) => {

  return (
    <div>
      <div className="container my-5 py-2">
        <h2 className="text-center font-weight-bold my-5">{featuresTitle}</h2>
        <div className="row">
          {features.featuresentry.map((x) => {
            return (
              <div
                key={x.title}
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-once="true"
                className="col-md-4 text-center"
              >
                <img
                  src={
                    x.image.childImageSharp
                      ? x.image.childImageSharp.fluid.src
                      : x.image
                  }
                  alt="Featured Entry"
                  className="mx-auto"
                />
                <h4>{x.title}</h4>
                <p>{x.body}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid feature feature-first">
        <div className="container my-5">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6"
            >
              <h2 className="font-weight-bold">
                {services.serviceentry[0].title}
              </h2>
              <p className="my-4">{services.serviceentry[0].body}</p>
              <a
                href="#contact"
                className="btn my-4 font-weight-bold atlas-cta cta-blue"
              >
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 align-self-center"
            >
              <img
                src={
                  services.serviceentry[0].image.childImageSharp
                    ? services.serviceentry[0].image.childImageSharp.fluid.src
                    : services.serviceentry[0].image
                }
                alt="Take a look inside"
                className="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid feature feature-last">
        <div className="container">
          {services.serviceentry.filter(x => x.title !== services.serviceentry[0].title).map((x, index) => {
            return (
              <div
                key={x.title}
                className="row justify-content-between text-center text-md-left mb-4"
                style={{
                  flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  className="col-md-6 flex-md-last"
                >
                  <h2 className="font-weight-bold">{x.title} inner</h2>
                  <p className="my-4">{x.body}</p>
                  <a
                    href="#contact"
                    className="btn my-4 font-weight-bold atlas-cta cta-blue"
                  >
                    Learn More
                  </a>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  className="col-md-6 align-self-center flex-md-first"
                >
                  <img
                    src={
                      x.image.childImageSharp
                        ? x.image.childImageSharp.fluid.src
                        : x.image
                    }
                    alt="Safe and reliable"
                    className="mx-auto d-block"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            {companies.companyentry.map((x,index) => (
              <div key={index} className="col-sm-4 col-md-2 py-2 align-self-center">
                <img src={
                      x.image.childImageSharp
                        ? x.image.childImageSharp.fluid.src
                        : x.image
                    } className="mx-auto d-block" alt="The Company Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
