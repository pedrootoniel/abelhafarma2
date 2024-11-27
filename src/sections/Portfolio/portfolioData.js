import portfolioImg1 from "../../assets/1.png";
import portfolioImg2 from "../../assets/2.png";
import portfolioImg3 from "../../assets/3.png";
import portfolioImg4 from "../../assets/4.png";
import portfolioImg5 from "../../assets/5.jpg";
import portfolioImg6 from "../../assets/5.jpg";
import portfolioImg7 from "../../assets/5.jpg";
import portfolioImg8 from "../../assets/5.jpg";
import portfolioImg9 from "../../assets/5.jpg";

const portfolioItems = [
  {
    id: 1,
    img: portfolioImg1,
    width: 1080,
    height: 620,

    category: "Hidratantes",
    title: "web1",
    description: "First website",
  },
  {
    id: 2,
    img: portfolioImg2,
    width: 1000,
    height: 620,
    category: "Dermopés",
    title: "mobile1",
    description: "first mobile app",
  },
  {
    id: 3,
    img: portfolioImg3,
    category: "Protetor Solar",
    title: "desktop2",
    description: "second desktop app",
    width: 1080,
    height: 620,
  },
  {
    id: 4,
    img: portfolioImg4,
    category: "Rosa Mosqueta",
    title: "desktop2",
    description: "second desktop app",
    width: 1080,
    height: 620,
  },
  {
    id: 5,
    img: portfolioImg5,
    category: "Antiacne",
    title: "desktop2",
    description: "second desktop app",
    width: 1080,
    height: 620,
  },
];
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
export const portfolioPhotos = portfolioItems.map((item) => {
  const width = breakpoints[0];
  const height = (item.height / item.width) * width;

  return {
    src: item.img,
    width,
    height,
    title: item.title,
    category: item.category,
    description: item.description,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((item.height / item.width) * breakpoint);
      return {
        src: item.img,
        width: breakpoint,
        height,
      };
    }),
  };
});
export const categories = [
  "todas",
  ...new Set(portfolioItems.map(({category}) => category)),
];
