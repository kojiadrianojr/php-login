import React, { useEffect, useRef } from "react";
import "./home.css";
import Php from "./images/img.gif";

export default function Home(props) {
  const home = useRef(null);
  const head = useRef(null);

  const scrollNow = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // console.log(props);
    if (props.props === "#home" || props.props === "#head") {
      scrollNow();
    }
  });

  return (
    <React.Fragment>
      <span ref={head}></span>
      <div className="mainDiv" ref={home}>
        <div className="mainInner">
          <div className="mainTitle">
            <span>PHP COURSE</span>
          </div>
          <div className="subTitle">
            <span>
              You can access the course by logging in your &nbsp;
              <i>@boom.camp</i>
              &nbsp; google accout
            </span>
          </div>
          <div className="mainBtn">
            <button className="btnStarted slide">Get Started</button>
          </div>
          {/* <div className="innerTop">
            <span className="innerTitle">PHP Course</span>
            <img src={Php} className="innerGif" />
          </div>
          <div className="innerBorder"></div>
          <div className="innerBottom">
            <div className="innerSign">
              <p>
                You can access the course material by logging in with your
                &nbsp;<i>@boom.camp</i>&nbsp; google account
              </p>
            </div>
            <div className="innerBtnDiv">
              <button className="innerBtn">Get Started</button>
            </div>
          </div> */}
        </div>
        <div className="mainImg"></div>
      </div>
    </React.Fragment>
  );
}
