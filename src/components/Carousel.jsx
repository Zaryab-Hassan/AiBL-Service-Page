import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Platform',
    category: 'AI Development',
    description: 'Built an intelligent e-commerce platform with personalized product recommendations and automated customer service.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
    client: 'TechMart Inc.',
    duration: '6 months',
    review: {
      rating: 5,
      text: "Exceptional work! The AI recommendations increased our sales by 40%. The team delivered beyond expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechMart Inc.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Web Development',
    description: 'Comprehensive web application for managing patient records, appointments, and medical billing.',
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'AWS'],
    client: 'MediCare Solutions',
    duration: '8 months',
    review: {
      rating: 5,
      text: "Outstanding development work. The system streamlined our operations and improved patient satisfaction significantly.",
      author: "Dr. Michael Chen",
      position: "Director, MediCare Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  },
  {
    id: 3,
    title: 'Cloud-Based Analytics Dashboard',
    category: 'Cloud Solutions',
    description: 'Real-time analytics dashboard with automated reporting and data visualization capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    technologies: ['Angular', 'Python', 'AWS Lambda', 'ElasticSearch'],
    client: 'DataViz Corp',
    duration: '5 months',
    review: {
      rating: 5,
      text: "The dashboard transformed how we analyze data. Real-time insights helped us make better business decisions.",
      author: "Robert Kim",
      position: "CEO, DataViz Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  },
  {
    id: 4,
    title: 'Educational Platform Redesign',
    category: 'UI/UX Design',
    description: 'Complete UI/UX redesign of an online learning platform to improve user experience and engagement.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    technologies: ['Figma', 'React', 'Framer Motion', 'TypeScript'],
    client: 'EduTech Academy',
    duration: '3 months',
    review: {
      rating: 5,
      text: "The new design is incredible! Student engagement improved by 50% and completion rates doubled.",
      author: "Lisa Rodriguez",
      position: "Product Manager, EduTech Academy",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
    }
  },
  {
    id: 5,
    title: 'Cryptocurrency Trading Bot',
    category: 'AI Development',
    description: 'Intelligent trading bot with machine learning algorithms for automated cryptocurrency trading.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
    technologies: ['Python', 'TensorFlow', 'Redis', 'Docker'],
    client: 'CryptoTrade Pro',
    duration: '7 months',
    review: {
      rating: 5,
      text: "The trading bot exceeded our ROI expectations. Sophisticated algorithms and excellent execution.",
      author: "Alex Thompson",
      position: "Founder, CryptoTrade Pro",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
    }
  }
];

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const visibleCards = isLargeScreen ? 2 : 1;
    
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1 
        ))
    }

    const prevCard = () => {
        setCurrentIndex((prevIndex)=>(
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1 
        ))
    }

    // Check if screen is large (lg breakpoint: 1024px+)
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Set cards per view based on screen size

    const getVisibleCards = () => {
    const end = currentIndex + visibleCards;
    if (end <= projects.length) {
      return projects.slice(currentIndex, end);
    } else {
      // wrap around to the start if not enough cards at the end
      return [...projects.slice(currentIndex), ...projects.slice(0, end - projects.length)];
    }
  };

    return(
        <div className="relative flex items-center justify-center sm:min-h-[750px]">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-2 pb-4 pr-1 text-indigo-400 text-6xl rounded-full hover:bg-indigo-400 hover:text-white w-12 h-12 flex items-center justify-center shadow-xl"
          onClick={prevCard}
        >
          &#8249; {/*Left arrow */}
        </button>

        <div className = "flex overflow-x-auto gap-6 py-6 px-4">
          {getVisibleCards().map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-2 pb-4 pl-1 text-indigo-400 text-6xl rounded-full hover:bg-indigo-400 hover:text-white w-12 h-12 flex items-center justify-center shadow-xl"
          onClick={nextCard}
        >
          &#8250; {/*Right arrow */}
        </button>
      </div>
    );
}

export default Carousel;