import one from '../assets/svg/projects/one.png'
import two from '../assets/svg/projects/chat.png'
import three from '../assets/svg/projects/os.svg'
import four from '../assets/svg/projects/earth.svg'
import five from '../assets/svg/projects/thirteen.svg'
import six from '../assets/svg/projects/calc.svg'



export const projectsData = [
    {
        id: 1,
        projectName: 'The Simulation',
        projectDesc: 'This project aims to build Unique 3D website that simulate the real world',
        tags: ['Three.js', 'Ammo.js', 'Tween.js'],
        code: 'https://github.com/Ananddudi/SimulationWebApp',
        demo: 'https://dudisimulationapp.netlify.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'Web Chat',
        projectDesc: 'This project is web chat application leverage idea of snapchat features',
        tags: ['React','Django', 'Figma','Django-rest-fmwk','Postgresql'],
        code: 'https://github.com/Ananddudi/ChatWebApp',
        demo: 'https://dudichatapp.herokuapp.com/',
        image: two
    },
    {
        id: 3,
        projectName: 'Control',
        projectDesc: 'Controls Operating system and utilizes youtube api and openweather map api to show trending videos as well as recent weather data',
        tags: ['Pyqt5', 'Youtube API', 'OpenWeatherMap API'],
        code: 'https://github.com/Ananddudi/Controls',
        demo: 'https://photos.app.goo.gl/geCQoc4oQjBjs5cB7',
        image: three
    },
    {
        id: 4,
        projectName: 'Earth',
        projectDesc: 'Just Simple 3D earth in space',
        tags: ['Three.js', 'Tween.js'],
        code: 'https://github.com/Ananddudi/First-three.js-project',
        demo: 'https://duditestproject.netlify.app/',
        image: four
    },
    {
        id: 5,
        projectName: 'CoinExchange',
        projectDesc: 'A Simple Copy of original application with code written from scratch without any library',
        tags: ['React'],
        code: 'https://github.com/Ananddudi/Reactjs-app',
        demo: 'https://myreactjsexample.netlify.app/',
        image: five
    },
    {
        id: 6,
        projectName: 'Calculator',
        projectDesc: 'A calculator with extra functionality for cross platform',
        tags: ['Pyqt5','Qt Designer'],
        code: 'https://github.com/Ananddudi/Cal',
        demo: 'https://photos.app.goo.gl/jLM2e9yJVLPuZT559',
        image: six
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/