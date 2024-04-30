import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import python from "../assets/svg/skills/python.svg";
import django from "../assets/svg/skills/django.svg";
import three from "../assets/svg/skills/threejs.svg";
import qt from "../assets/svg/skills/qt.svg";
import node from "../assets/svg/skills/nodejs-svgrepo-com.svg";
import mongo from "../assets/svg/skills/mongodb-svgrepo-com.svg";
import socket_io from "../assets/svg/skills/socket.io.svg";
import redux from "../assets/svg/skills/redux-svgrepo-com.svg";
import nextjs from "../assets/svg/skills/nextjs-svgrepo-com.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import dsa from "../assets/svg/skills/dsa.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import redis from "../assets/svg/skills/redis.svg";
import docker from "../assets/svg/skills/docker.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "postgresql":
      return postgresql;
    case "python":
      return python;
    case "django":
      return django;
    case "three":
      return three;
    case "qt":
      return qt;
    case "graphql":
      return graphql;
    case "redis":
      return redis;
    case "docker":
      return docker;
    case "mongo":
      return mongo;
    case "socket.io":
      return socket_io;
    case "next":
      return nextjs;
    case "redux":
      return redux;
    case "node":
      return node;
    case "data structures and algorithms":
      return dsa;
    case "typescript":
      return typescript;
    default:
      break;
  }
};
