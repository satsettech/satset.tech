import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "C-Commerce",
    paragraph: "A robust e-commerce platform for seamless online shopping.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Ecommerce"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Hilink",
    paragraph: "A responsive business website showcasing services",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Landing Page"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Maxleven",
    paragraph: "A custom web application for DISC personality testing.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Web Application"],
    publishDate: "2025",
  },
];
export default blogData;
