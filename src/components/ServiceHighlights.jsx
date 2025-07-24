import { useState } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "AI Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation systems.",
    icon: "🤖",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Automation",
    ],
    color: "",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with latest technologies.",
    icon: "🌐",
    features: [
      "React/Vue.js",
      "Node.js Backend",
      "Database Design",
      "API Development",
    ],
    color: "",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
    features: [
      "React Native",
      "Flutter",
      "iOS Development",
      "Android Development",
    ],
    color: "",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for your applications.",
    icon: "☁️",
    features: ["AWS/Azure", "DevOps", "Containerization", "Microservices"],
    color: "",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centered designs that enhance user experience and engagement.",
    icon: "🎨",
    features: [
      "User Research",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    color: "",
  },
];

const ServiceHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  }; 
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center max-h-fit mx-64 my-8">
      <div className="flex flex-col gap-4 text-center mb-8">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-xl">
          Comprehensive solutions tailored to your business needs
        </p>
      </div>
      {/*Carousel Section*/}
      <div className="relative flex items-center justify-center ">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-6 text-purple-600 text-6xl rounded-full hover:bg-purple-400 hover:text-white w-12 h-12 flex items-center justify-center pb-4 shadow-xl"
          onClick={prevCard}
        >
          &#8249; {/*Left arrow */}
        </button>
          <ServiceCard key={services[currentIndex].id} {...services[currentIndex]} />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-6 text-purple-600 text-6xl rounded-full hover:bg-purple-400 hover:text-white w-12 h-12 flex items-center justify-center pb-4 shadow-xl"
          onClick={nextCard}
        >
          &#8250; {/*Right arrow */}
        </button>
      </div>  
    </div>
  );
};

export default ServiceHighlights;