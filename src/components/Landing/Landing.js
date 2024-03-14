import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
import backgroundimage from "../../assets/myimage/images-small.jpg";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);
  const [load, setLoaded] = useState(false);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Twitter"
                />
              </a>
            )}
          </div>
        </div>
        <div
          className={`back-image ${load && "loaded"}`}
          style={{
            backgroundImage: `url(${backgroundimage})`,
          }}
        ></div>
        <img
          src={headerData.image}
          loading="lazy"
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
          onLoad={handleImageLoad}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
