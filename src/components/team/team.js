import React, { useEffect, useState, useRef } from "react";
import "./team.css";
import AliceCarousel from "react-alice-carousel";

const teams = [
  {
    key: 0,
    name: "Jhon Michael Bolima",
    role: "PHP Mentor",
    img: "https://ca.slack-edge.com/T0QG5E3SL-UJNQMFZAL-bb932e7c0ebc-512"
  },
  {
    key: 1,
    name: "Jino Lacson",
    role: "Lead Mentor",
    img: "https://ca.slack-edge.com/T0QG5E3SL-ULP3Q92S2-01dcbbce4a18-512"
  },
  {
    key: 2,
    name: "Rolando Koji Adriano",
    role: "PHP Mentor",
    img: "https://ca.slack-edge.com/T0QG5E3SL-UJGFATPCZ-2dd0ca6b7c2f-512"
  },
  {
    key: 3,
    name: "Aodhan Hayter",
    role: "Lead Instructor",
    img: "https://ca.slack-edge.com/T0QG5E3SL-UHHK5FHK6-361a9ec9d35e-512"
  }
];

const skills = [
  "https://pngimage.net/wp-content/uploads/2018/06/react-logo-png-3.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
  "https://pngimg.com/uploads/php/php_PNG12.png",
  "https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png",
  "https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png",
  "https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png",
  "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
  "https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png",
  "https://i.pinimg.com/originals/43/4d/cf/434dcfe1acd79af48ddfc35292c31de5.png"
];

const Gallery = () => {
  return (
    <AliceCarousel
      buttonsDisabled
      dotsDisabled
      mouseTrackingEnabled
      autoPlay
      autoPlayInterval={1500}
      infinite
      responsive={{
        1500: { items: 6 },
        1159: { items: 5 },
        1000: { items: 4 },
        700: { items: 3 },
        420: { items: 2 }
      }}
    >
      {skills.map((item, i) => (
        <div key={i} className="carouselItem">
          <img className="carouselImg" src={item} />
        </div>
      ))}
    </AliceCarousel>
  );
};

export default function Team(props) {
  const team = useRef(null);
  const [select, setSelect] = useState("");
  const [clicked, setClicked] = useState(false);

  const scrollNow = () => {
    team.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (props.props === "#team") {
      scrollNow();
    }
    console.log(clicked);
  });

  const handleClick = e => {
    setSelect(e);
    setClicked(true);
  };

  return (
    <React.Fragment>
      <div ref={team} className="mainTeam">
        <div className="teamInner">
          <div className="teamTop">
            Meet the instructors and mentors of this course
          </div>
          <div className="teamBody">
            {teams.map(item => (
              <a
                key={item.key}
                onClick={() => handleClick(item.name)}
                className={
                  item.key === 0 || item.key === 2
                    ? "card sm teams"
                    : "card lg teams"
                }
              >
                <div className="overlay"></div>
                <div className="circle">
                  <img className="cardImg" src={item.img} />
                </div>
                <span className="teamName">{item.name}</span>
                <span className="teamRole">{item.role}</span>
              </a>
            ))}
          </div>
          <div
            className="teamBottom"
            style={{ display: select === "" ? "none" : "block" }}
          >
            <div className="teamBottom-title">
              <span className="bottomName">{select}</span>
              <i className="bottomTxt">"Primary technologies & skills"</i>
            </div>
            <div className="teamBottom-carousel">{<Gallery />}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
