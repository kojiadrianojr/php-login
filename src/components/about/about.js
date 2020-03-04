import React, { useEffect, useRef } from "react";
import "./about.css";
import Divider from "@material-ui/core/Divider";
import logo from "./about-assets/undraw_programming_njlp.svg";

export default function About(props) {
  const about = useRef(null);
  const scrollNow = () => {
    about.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (props.props === "#about") {
      scrollNow();
    }
  });
  return (
    <div ref={about} className="mainAbout">
      <div className="header">
        <div className="title one">Why Boom.Camp?</div>
        <div className="title-text one" >
        The idea of Boom.Camp was born out of the struggle of it's parent company <a href="https://boomsourcing.com/">Boomsourcing</a> to find developers with the needed skills co-located with the facilities Boomsourcing already had available in the Philippines. The company leadership at Boomsourcing knows there's a vast amount of talent in the Philippines, but still found it difficult to find people with the specialized skills they were looking for. With the success of various boot-camp style development training programs in the U.S.A Boomsourcing felt they could develop their own unique program that could bring talented I.T. and computer science graduates up to speed with the skills needed by the development team at Boomsourcing. In addition to bringing developers onto the internal teams at Boomsourcing, the company also would like to be able to provide workforce augmentation and custom development services to clients. That's basically why Boom.Camp has come to exist today.
        </div>
        <Divider style={{ marginBottom: 15, width: "50%", margin: "0 auto" }} />
        <div className="title two" style={{ marginTop: 12 }}>
          Our Mission
        </div>
        <div className="title-text two">
          Boom.Camp aims to bring student developers to a Junior Developer level
          of proficiency in modern front-end and backend development. The
          curriculum is comprised mainly of web programming concepts (HTML, CSS,
          JavaScript). By the end of the course, a student developer should be
          able to join an existing development team and make contributions to
          utilize the skill they acquired.
        </div>
      </div>

      <Divider style={{ width: "50%", margin: "0 auto" }} />
      <div className="body">
        <div className="title three">What we do:</div>
        <div className="body-wrapper">
          <div className="wrapper">
            <div className="goals-wrapper">
              <div className="goal first">
                <span>Our Promise</span>
                <div>
                  &emsp;<b>✓</b>&nbsp;We help transform a student developer into
                  Junior Developers.
                </div>
              </div>
              <div className="goal second">
                <span>Our Essence</span>
                <div>
                  &emsp;<b>✓</b>&nbsp;We introduce on trend technologies used in
                  the field of web development.
                </div>
              </div>
              <div className="goal thrid">
                <span>Our Vibe</span>
                <div>
                  &emsp;<b>✓</b>&nbsp;We bring out the best of our students.
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="body-img">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
