import React from "react";
import { faHeart, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
const FunFactor = () => {
  const factorContent = [
    { icon: faHeart, countNumber: 300, title: "MENU ITEMS" },
    { icon: faSmile, countNumber: 600, title: "VISITOR EVERYDAY" },
    { icon: faHeart, countNumber: 400, title: "EXPERT CHEF" },
    { icon: faHeart, countNumber: 100, title: "TEST & LOVE" },
  ];

  return (
    <section id="funFactor">
      <div className="container">
        <div className="row text-center">
          {factorContent.map((a, b) => (
            <div className="col-lg-3" key={b}>
              <div className="box">
                <FontAwesomeIcon icon={a.icon} />
                <h6>
                  <CountUp duration={2.75} end={a.countNumber} />{" "}
                </h6>
                <h5 className="text-uppercase">{a.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactor;
