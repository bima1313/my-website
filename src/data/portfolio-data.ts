import chefClaudeImg from "/src/assets/portfolio/chef-claude.png";
import simpleTravelImg from "/src/assets/portfolio/simple-travel-journal.png";
import techCommerceImg from "/src/assets/portfolio/tech-commerce.jpg";
import onfoodImg from "/src/assets/portfolio/onfood.jpg";
import weatherImg from "/src/assets/portfolio/weather.jpg";

import { ImageData } from "../models/image-data";
import { Portfolio } from "../models/portfolio";

export const portfolioData: Portfolio[] = [
  new Portfolio(
    "Chef Claude",
    ["HTML", "CSS", "Javascript", "React"],
    new ImageData(
      chefClaudeImg,
      "Chef Claude Screenshot",
      "https://bima1313.github.io/chef_claude/"
    )
  ),
  new Portfolio(
    "Simple Travel Journal",
    ["HTML", "CSS", "Javascript", "React"],
    new ImageData(
      simpleTravelImg,
      "Simple Travel Journal Screenshot",
      "https://bima1313.github.io/simple-my-travel-journal/"
    )
  ),
  new Portfolio(
    "Tech Commerce",
    ["Flutter", "Bloc", "Firebase", "MongoDB"],
    new ImageData(
      techCommerceImg,
      "Tech Commerce image",
      "https://github.com/bima1313/Tech_Commerce_app"
    )
  ),
  new Portfolio(
    "onfood",
    ["Flutter", "Provider", "Firebase"],
    new ImageData(
      onfoodImg,
      "onfood image",
      "https://github.com/bima1313/onfood_app"
    )
  ),
  new Portfolio(
    "Simple Weather",
    ["Flutter", "Provider", "API"],
    new ImageData(
      weatherImg,
      "onfood image",
      "https://github.com/bima1313/simple-weather-app"
    )
  ),
];
