import HeroCard from "./HeroCard";

const Hero = () => {
  const cardData = [
    {
      id: 1,
      title: "AI Development",
      icon: "🤖",
    },
    {
      id: 2,
      title: "Web Development",
      icon: "🌐",
    },
    {
      id: 3,
      title: "Digital Innovation",
      icon: "💡",
    },
    {
      id: 4,
      title: "Cloud Solutions",
      icon: "☁️",
    },
    {
      id: 6,
      title: "Data Analytics",
      icon: "📊",
    },
    {
      id: 7,
      title: "Mobile App Development",
      icon: "📱",
    },
    {
      id: 8,
      title: "E-commerce Solutions",
      icon: "🛒",
    },
  ];

  const heroContent = {
    title: "Transform Your Business with Our",
    titleHighlight: "Premium Services",
    description:
      "We deliver cutting-edge solutions in AI Development, Web Development, and Digital Innovation to help your business thrive in the digital age.",
    primaryButton: "Get Started",
    secondaryButton: "View Services",
  };

  return (
    <section className="lg:w-full mx-6 lg:flex h-[calc(100vh-5rem)] bg-gradient-to-bl from-indigo-400 to-purple-600">
      <div className="w-screen mx-auto flex flex-col justify-end p-8 lg:w-1/2">
        <div className=" lg:mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {heroContent.title}
            <span className="text-purple-700">
              {" "}
              {heroContent.titleHighlight}
            </span>
          </h1>
          <p className="text-white/90 text-lg">{heroContent.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
          onClick={() => {
            const contactSection = document.querySelector('[data-contact-section]');
            if (contactSection) {
              contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
           className="mt-4 px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition-colors duration-300">
            {heroContent.primaryButton}
          </button>
          <button
          onClick={() => {
            const servicesSection = document.querySelector(`[data-whychooseus-section]`);
            if ((servicesSection)) {
              servicesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }} 
          className="mt-4 px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-colors duration-300">
            {heroContent.secondaryButton}
          </button>
        </div>
      </div>

      <div className="hidden lg:block relative overflow-hidden animate-pulse lg:w-1/2">
        {cardData.map((heroCards, index) => {
          // Define scattered positions for each card
          const positions = [
            { top: "15%", left: "15%", rotate: "-5deg" },
            { top: "35%", left: "60%", rotate: "8deg" },
            { top: "45%", left: "20%", rotate: "3deg" },
            { top: "15%", left: "75%", rotate: "-8deg" },
            { top: "65%", left: "70%", rotate: "5deg" },
            { top: "70%", left: "10%", rotate: "-3deg" },
            { top: "80%", left: "45%", rotate: "7deg" },
          ];

          const position = positions[index] || {
            top: "50%",
            left: "50%",
            rotate: "0deg",
          };
          return (
            <div
              key={heroCards.id}
              className="absolute"
              style={{
                top: position.top,
                left: position.left,
                transform: `rotate(${position.rotate})`,
                zIndex: index + 1,
              }}
            >
              <HeroCard title={heroCards.title} icon={heroCards.icon} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
