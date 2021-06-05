import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section id="homeBanner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2>LOVES HEALTHY FOOD</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                efficitur placerat nulla, in suscipit erat sodales id. Nullam
                ultricies eu turpis at accumsan. Mauris a sodales mi, eget
                lobortis nulla.
              </p>
              <Link className="" to="/">Todays Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
