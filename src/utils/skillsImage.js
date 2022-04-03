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
        default:
            break;
    }
}
