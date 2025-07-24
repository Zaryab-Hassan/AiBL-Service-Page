const TeamMemberCard = (props) => {
  const { name, position, image, bio, skills } = props;
  
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={image}
          width={200}
          height={200}
          alt={`${name} - ${position}`}
          className="aspect-square overflow-hidden rounded-full object-cover p-2 border-indigo-400 border-2 border-opacity-20 w-48 h-48"
        />
        <div className="absolute top-0 left-0 h-48 w-48 border-y-2 rounded-full rotate-45 border-indigo-400 transition-transform duration-500 hover:rotate-[135deg]">
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-indigo-400 font-semibold">{position}</p>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
          {bio}
        </p>
      </div>
      
      {skills && skills.length > 0 && (
        <div className="w-full">
          <div className="flex flex-wrap gap-2 justify-center cursor-pointer">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gradient-to-bl from-indigo-400 to-purple-600 text-white rounded-full hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
