import one from "../assets/svg/projects/one.png";
import two from "../assets/svg/projects/chat.png";
import three from "../assets/svg/projects/os.svg";
import four from "../assets/svg/projects/earth.svg";
import five from "../assets/svg/projects/thirteen.svg";
import six from "../assets/svg/projects/calc.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "The Simulation",
    projectDesc: "3D application",
    tags: ["Three.js", "Ammo.js", "Tween.js", "WebGL"],
    code: "https://github.com/Ananddudi/Three-simulation-app",
    demo: "https://three-simulation-app.vercel.app/",
    image: one,
  },
  {
    id: 2,
    projectName: "WebRTC Chat",
    projectDesc: "Web chat application",
    tags: ["Mern", "Figma", "WebRTC", "Socket.io", "React-Query"],
    code: "https://github.com/Ananddudi/Webrtc-chat-app",
    demo: "https://web-chat-9hur.onrender.com/",
    image: two,
  },
  {
    id: 3,
    projectName: "Native window/mac software",
    projectDesc:
      "Extract some OS functionality with youtube and open_weather_map apis integration",
    tags: ["Pyqt5", "Youtube API", "OpenWeatherMap API"],
    code: "https://github.com/Ananddudi/Native-apps/tree/main/OShandle",
    demo: "https://photos.app.goo.gl/geCQoc4oQjBjs5cB7",
    image: three,
  },
  {
    id: 4,
    projectName: "Earth",
    projectDesc: "3D Earth",
    tags: ["Three.js", "Tween.js"],
    code: "https://github.com/Ananddudi/Three-earth-app",
    demo: "https://three-earth-app.vercel.app/",
    image: four,
  },
];
