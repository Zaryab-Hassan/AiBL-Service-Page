import Carousel from "./Carousel";

//const categories = ['All', 'AI Development', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'UI/UX Design'];

const Projects = () => {
  return (
    <section className="flex flex-col gap-5 items-center w-screen mx-12 h-auto lg:h-screen relative">
      <div className="flex flex-col mx-6 gap-5 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Our Recent Projects & Client Reviews
        </h2>
        <p className="text-xl ">
          Discover our successful projects and what our clients say about our
          workDeep dive into what makes our services exceptional
        </p>
      </div>
      {/*Project Buttons*/}
      {/*
      
        <div className="flex flex-wrap items-center gap-4 justify-center">
        {
        categories.map((category,index) => (
        <button className={
          `text-xl px-8 py-3 border rounded-3xl transition
        ${
          category === 'All'
            ? 'bg-gradient-to-bl from-primary to-secondary text-white'
            : 'bg-white text-black hover:border-secondary hover:text-secondary hover:scale-105 duration-300' 
        }
        `} key={index}>
          {category}
        </button>
        ))}
      </div>

      */}
      
      {/*Carousel*/}
        <Carousel />
    </section>
  );
};

export default Projects;