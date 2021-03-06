import React, { useEffect } from "react";
import "../style.css";
import "./skillset.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skillset() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <img
        className="skillsetBackground"
        src={`${process.env.PUBLIC_URL}/assets/Shapes/Skillset.png`}
      />
      <section className="skillsetContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 data-aos="fade-up" data-aos-duration="1500">
                Skillset
              </h2>
              <hr data-aos="fade-up" data-aos-duration="1500" />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 skill"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="2000"
            >
              <div className="icon">
                <i className="fa fa-laptop"></i>
              </div>
              <h4>Digital Design</h4>
              <p>
                Designing responsive mobile first sites to provide a modern,
                fast and easy-to-use front-end, delivering the best experience
                for the user.
              </p>
            </div>
            <div
              className="col-md-4 skill"
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-duration="2000"
            >
              <div className="icon">
                <i className="fa fa-code"></i>
              </div>
              <h4>Web Development</h4>
              <p>
                Using front-end and back-end technology, sites are built with
                current techniques and frameworks to ensure best practice and
                keep code clean, reusable and maintainable for future updates.
              </p>
            </div>
            <div
              className="col-md-4 skill"
              data-aos="fade-up"
              data-aos-offset="600"
              data-aos-duration="2000"
            >
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
              <h4>Creative Direction</h4>
              <p>
                From social media to email campaigns, your brand needs a
                consistent feel across all online platforms. Integration with
                other channels ensures your online presence is easily
                indentified.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skillset;
