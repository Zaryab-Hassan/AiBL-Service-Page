const TrustCard = (props) => {
  const { serviceDetails } = props;
  return (
    <div className="flex flex-col mx-16 sm:flex-row sm:gap-16 sm:mx-32 border rounded-2xl shadow-lg px-8 py-6 sm:py-16">
      <div className="flex flex-col gap-8 w-full sm:w-1/2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold  my-4">
            {serviceDetails.name}
          </h2>
          <p className=" text-xl">{serviceDetails.description}</p>
        </div>
        
        <div>
          <h2 className="text-2xl  font-bold mb-6">Key Benefits</h2>

          <ul className="list-none ml-3 flex flex-col gap-4 text-xl">
            {serviceDetails.benefits.map((benefit, index) => (
              <li
              className = "relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold" 
              key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

    <div className = "hidden sm:block border border-gray-300 my-4"></div>

      <div className="flex flex-col gap-8 w-full  sm:w-1/2">
        <div className="">
          <h2 className="text-3xl sm:text-4xl font-bold my-4">Technologies We Use</h2>
          <ul className="text-xl list-none flex flex-wrap gap-4 w-fit">
            {serviceDetails.technologies.map((tech, index) => (
              <li
                key={index}
                className="rounded-2xl shadow-xl bg-indigo-400 text-white px-4 py-2 cursor-pointer hover:scale-105 duration-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold  my-4">Project Types</h2>
          <ul className="flex flex-wrap gap-4 list-none text-xl">
            {serviceDetails.projects.map((project, index) => (
              <li
                key={index}
                className="rounded-2xl border shadow-xl px-6 py-4 cursor-pointer hover:scale-105 duration-300"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrustCard;
