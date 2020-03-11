import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import Logo from "./images/logo-boom.png";
import { Collapse, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Header(props) {
  const [height, setHeight] = useState(false);

  return (
    <div className={height ? "mainHeader collapse" : "mainHeader"}>
      <div className="headerDiv">
        <div className="leftHeader">
          <span className="leftSpan">
            <a target="_blank" href="https://boom.camp">
              Boom Camp
            </a>
            <img src={Logo} className="headerLogo" />
          </span>
        </div>
        <div className="rightHeader">
          <span>
            <a href="#home" onClick={() => props.handleProps("#home")}>
              Home
            </a>
          </span>
          <span>
            <a href="#about" onClick={() => props.handleProps("#about")}>
              About us
            </a>
          </span>
          <span>
            <a href="#team" onClick={() => props.handleProps("#team")}>
              Our Team
            </a>
          </span>
          <span>
            <a href="#related" onClick={() => props.handleProps("#related")}>
              Related
            </a>
          </span>
        </div>
        <div className="rightHeader-toggle">
          <MenuOutlined
            onClick={() => setHeight(!height)}
            // onBlur={() => setHeight(false)}
            className="toggleMenu"
          />
        </div>
        <div className="menu-toggle">
          <List
            className="mainList"
            dataSource={[
              { page: "#home", name: "Home" },
              { page: "#about", name: "About us" },
              { page: "#team", name: "Our Team" },
              { page: "#related", name: "Related" }
            ]}
            renderItem={item => (
              <List.Item
                onClick={() => props.handleProps(item.page)}
                className="listItem"
              >
                <a href={item.page}>{item.name}</a>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </div>
  );
}
