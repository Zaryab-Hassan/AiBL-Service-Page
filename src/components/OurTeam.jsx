import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "AI Development Lead",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Leading AI innovations with 8+ years in machine learning and neural networks.",
    skills: ["Machine Learning", "TensorFlow", "Python", "Deep Learning"]
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in modern web technologies with passion for creating scalable solutions.",
    skills: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    id: 3,
    name: "David Wilson",
    position: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Building cross-platform mobile apps that deliver seamless user experiences.",
    skills: ["React Native", "Flutter", "iOS", "Android"]
  },
];

const OurTeam = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-900">
              Meet Our Expert Team
            </h2>
            <p className="max-w-[900px] text-xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our talented professionals bring diverse expertise and passion to deliver 
              exceptional solutions for your business needs.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              position={member.position}
              image={member.image}
              bio={member.bio}
              skills={member.skills}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-400 to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let us bring our expertise to your next project and help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mx-6">
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
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;