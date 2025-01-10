import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Dalkkumi Shop",
    paragraph:
      "A comprehensive e-commerce platform featuring product listings, a cart system, and transaction management, ready for payment gateway and logistics integration.",
    image: "/images/blog/dalkkumi-shop.png",
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
    paragraph:
      "Hilink is a landing page for an app that can help your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app. Features include real maps that can be used offline, adventure scheduling, augmented reality technology, and new locations added every month.",
    image: "/images/blog/hilink-adventure.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Travel"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Maxleven",
    paragraph:
      "Maxleven offers a comprehensive DISC personality test that helps individuals understand their personality traits and improve personal and professional relationships. With an intuitive interface and detailed reports, users can gain insights into their behavior and communication styles.",
    image: "/images/blog/maxleven-disc.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Personality Test"],
    publishDate: "2025",
  },
];
export default blogData;
