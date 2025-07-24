const ProjectCard = (props) => {
  const { ...projectDetails } = props;
  return (
    <div className="shadow-lg rounded-lg pb-3 w-screem h-[550px] sm:h-[650px] flex flex-col sm:mx-auto sm:w-[500px] cursor-pointer hover:shadow-2xl hover:scale-105 duration-300">
      {/*Image Section*/}
      <div className="flex flex-wrap items-center justify-center flex-shrink-0">
        <img
          src={projectDetails.image}
          loading="lazy"
          alt="Project Thumbnail"
          className="rounded-t-lg shadow-md w-[500px] h-[250px] object-cover"
        />
      </div>
      {/*Details Section*/}
      <div className="flex flex-col my-6 px-4 gap-3 text-xl flex-grow">
        <span className="bg-gradient-to-bl from-indigo-400 to-purple-600 text-white text-xl px-3 py-2 rounded-2xl w-fit hover:scale-105 duration-200">
          {projectDetails.title}
        </span>
        <p className="text-base leading-relaxed line-clamp-3 overflow-hidden">
          {projectDetails.description}
        </p>
        <ul className="flex flex-wrap gap-2 list-none">
          {projectDetails.technologies.map((tech, index) => (
            <li key={index} className="border rounded-2xl px-2 py-1 text-center bg-indigo-400 text-white hover:scale-105 duration-300 text-sm">
              {tech}
            </li>
          ))}
        </ul>
        {/*Border*/}
        <div className="border-t border-gray-300 hidden sm:block my-6"></div>
      </div>
      {/*Customer's Review Section*/}
      <div className="mx-4 -mt-5 hidden sm:block flex-shrink-0">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < projectDetails.review.rating ? "text-yellow-400" : "text-gray-300"}>
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 overflow-hidden leading-relaxed mb-3">
          {projectDetails.review.text}
        </p>
        <div className="flex my-4">
          <img
            className = "rounded-full w-12 h-12 mr-3 "
            src={projectDetails.review.avatar}
            alt="Customer's Avatar"
          />
          <div>
            <div className="reviewer-name">{projectDetails.review.author}</div>
            <div className="reviewer-position">{projectDetails.review.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
