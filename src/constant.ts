import Cat from "./assets/photographs/Cat.jpg";
import Pigeon from "./assets/photographs/Pigeon-BW.jpg";
import Beach from "./assets/photographs/Beach Vibe.jpeg";
import Building from "./assets/photographs/Building.jpg";
import Arrow from "./assets/sketches/Arrow.jpg";
import IceCube from "./assets/sketches/IceCube.jpg";
import IronMan from "./assets/sketches/IronMan.jpg";
import { CarouselObj } from "components/Carousel/carousel";

export type Projects = {
  githubLink: string;
  title: string;
  desc: string;
  netlifyLink: string;
  id: number;
};

export const photos: CarouselObj[] = [
  {
    id: 1,
    image: Cat,
    title: "Angry Cat",
    description: "Cat behind a fence",
  },
  {
    id: 2,
    image: Pigeon,
    title: "Pigeon Juxtapose",
    description: "Juxtaposition of a pigeon going for the fruit",
  },
  {
    id: 3,
    image: Beach,
    title: "Sunny Day",
    description: "A sunny day in Montenegro",
  },
  {
    id: 4,
    image: Building,
    title: "Symmetry",
    description: "Building in Leeds with pigeons sitting",
  },
];

export const sketches: CarouselObj[] = [
  {
    id: 1,
    image: Arrow,
    title: "Green Arrow",
    description: "Sketch of a Green Arrow",
  },
  {
    id: 2,
    image: IceCube,
    title: "Ice Cube",
    description: "Sometimes people call me nice cube",
  },
  {
    id: 3,
    image: IronMan,
    title: "Iron Man",
    description:
      "If you are nothing without the suit, you should not have the suit",
  },
];

export const projects: Projects[] = [
  {
    id: 1,
    title: "Tic Tac Toe",
    desc: "Classic Tic Tac Toe",
    githubLink: "https://github.com/GreenArrow216/tictactoe",
    netlifyLink: "https://greenarrow-tictactoe.netlify.app/",
  },
  {
    id: 2,
    title: "Scoreboard",
    desc: "Tap to increase, swipe down to decrease, set a score to win.",
    githubLink: "https://github.com/GreenArrow216/scoreboard-frontend",
    netlifyLink: "https://greenarrow-scoreboard.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    desc: "My site, my resume and my details",
    githubLink: "https://github.com/GreenArrow216/portfolio",
    netlifyLink: "https://gowthaman-ganesan-portfolio.netlify.app/",
  },
];
