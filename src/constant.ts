
import Cat from "./assets/photographs/Cat.jpg";
import Pigeon from "./assets/photographs/Pigeon-BW.jpg";
import Beach from "./assets/photographs/Beach Vibe.jpeg";
import Building from "./assets/photographs/Building.jpg";
import { CarouselObj } from "components/Carousel/carousel";

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