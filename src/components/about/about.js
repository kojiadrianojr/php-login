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

  // const handleScroll = e => {
  //   console.log(e);
  // };
  return <div ref={about} className="mainAbout"></div>;
}
