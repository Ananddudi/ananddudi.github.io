import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import python from '../assets/svg/skills/python.svg'
import django from '../assets/svg/skills/django.svg'
import git from '../assets/svg/skills/git.svg'
import three  from '../assets/svg/skills/threejs.svg'
import qt  from '../assets/svg/skills/qt.svg'
import blender from '../assets/svg/skills/blender.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'
import node from '../assets/svg/skills/nodejs-svgrepo-com.svg'
import express from '../assets/svg/skills/express-js-icon.svg'
import mongo from '../assets/svg/skills/mongodb-svgrepo-com.svg'
import websocket from '../assets/svg/skills/websocket-svgrepo-com.svg'
import sass from '../assets/svg/skills/sass-svgrepo-com.svg'
import redux from '../assets/svg/skills/redux-svgrepo-com.svg'
import reduxsaga from '../assets/svg/skills/reduxsaga-svgrepo-com.svg'
import materialui from '../assets/svg/skills/material-ui-svgrepo-com.svg'
import nextjs from '../assets/svg/skills/nextjs-svgrepo-com.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'c++':
            return cplusplus;
        case 'python':
            return python;
        case 'django':
            return django;
        case 'git':
            return git;
        case 'blender':
            return blender;
        case 'three':
            return three;
        case 'qt':
            return qt;
        case 'ubuntu':
            return ubuntu;
        case 'MongoDB':
            return mongo;
        case 'websocket':
            return websocket;
        case 'sass':
            return sass;
        case 'nextjs':
            return nextjs;
        case 'expressjs':
            return express;
        case 'MaterialUI':
            return materialui;
        case 'redux':
            return redux;
        case 'reduxsaga':
            return reduxsaga;
        case 'nodejs':
            return node;        
        default:
            break;
    }
}
