import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import HomePage from "../Home/HomePage";
import logoClose from "./assets/ham-c.svg";
import hamLogo from "./assets/ham.svg";
import "./styles.scss";

import { MdxContent } from "../Mdx";

const NAVIGATION_OFFSET = 66;

interface WrapperProps {
  toggle: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: block;
  width: 40%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${(props) => (props.toggle === "true" ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${(props) => (props.toggle === "true" ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

export const NavBar = () => {
  const [toggle, setToggle] = useState("true");
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef<HTMLDivElement>(null);

  const listenScrollEvent = () => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleOutsideCick = (event: MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setToggle("true");
    } else {
      setToggle("false");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => handleOutsideCick(e, navigation));

    return () => {
      document.removeEventListener("mousedown", (e) => handleOutsideCick(e, navigation));
    };
  }, []);

  return (
    <Router>
      <nav className={`nav_bar ${isOffset && "nav_bar-offset-crossed"}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">prizes </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">sponsors </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">team </span>{" "}
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle("true")}
                src={logoClose}
                alt="Close Icon"
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle("false")}
          src={hamLogo}
          alt="Open Icon"
        />
      </nav>

      <Routes>
        <Route path="/blog" element={<MdxContent />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
