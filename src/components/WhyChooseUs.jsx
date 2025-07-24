import { useState } from "react";
import TrustCard from "./TrustCard";

const serviceDetails = {
  "AI Development": {
    name: "AI Development",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights from data, and create intelligent solutions that give your business a competitive edge.",
    benefits: [
      "Automated decision making",
      "Predictive analytics",
      "Enhanced customer experience",
      "Operational efficiency",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI GPT",
      "AWS AI Services",
    ],
    projects: [
      "Chatbot Development",
      "Recommendation Systems",
      "Image Recognition",
      "Natural Language Processing",
    ],
  },
  
  "Web Development": {
    name: "Web Development",
    description:
      "Create stunning, responsive websites and powerful web applications that engage users and drive business growth with modern technologies and best practices.",
    benefits: [
      "Responsive design",
      "SEO optimization",
      "Fast loading times",
      "Cross-browser compatibility",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    projects: [
      "E-commerce Platforms",
      "Corporate Websites",
      "Web Applications",
      "Content Management Systems",
    ],
  },
  "Mobile App Development": {
    name: "Mobile App Development",
    description:
      "Develop native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.",
    benefits: [
      "Native performance",
      "Cross-platform compatibility",
      "App store optimization",
      "Push notifications",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    projects: [
      "Social Media Apps",
      "E-commerce Apps",
      "Productivity Tools",
      "Gaming Applications",
    ],
  },
};

const WhyChooseUs = () => {
  const [activeService, setActiveService] = useState("AI Development");

  return (
    <section 
    data-whychooseus-section
    className="flex flex-col items-center justify-center gap-5 h-auto relative my-20">
      <div className="flex flex-col gap-5 text-center  w-screen">
        <h3 className="text-4xl sm:text-5xl font-bold">Why Choose Us?</h3>
        <p className="text-xl ">
          Deep dive into what makes our services exceptional
        </p>
      </div>
      {/*Service Buttons*/}
      <div className="flex flex-col sm:flex-row items-center justify-center w-screen">
        {Object.keys(serviceDetails).map((service) => (
          <button
            key={service}
            className={`text-xl  px-8 py-3 border rounded-3xl m-2 transition 
            ${
              activeService === service
                ? "bg-gradient-to-bl from-indigo-400 to-purple-600 text-white"
                : "bg-white text-black hover:border-indigo-400 hover:text-indigo-400 hover:scale-105 duration-300"
            }`}
            onClick={() => setActiveService(service)}
          >
            {service}
          </button>
        ))}
      </div>
      {/*Service Cards*/}
      <div>
        <TrustCard serviceDetails={serviceDetails[activeService]} />
      </div>
    </section>
  );
};

export default WhyChooseUs;
