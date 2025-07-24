const ServiceCard = (props) => {
    const {id, icon, title, description, features} = props;
    return(
        <div className = "flex items-center justify-center gap-x-16 bg-white rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 p-8">
            <div className = "bg-purple-400 rounded-full w-48 h-48 text-9xl flex items-center justify-center">{icon}</div>
            <div className = "flex-1 mx-auto max-w-2xl">
                <h2 className = " font-bold text-4xl my-5">{title}</h2>
                <p className = " py-4 mb-4 text-xl">{ description}</p>
                <ul className = "list-none text-xl flex flex-col gap-3">
                    {features.map((feature) => (
                        <li key={id} className = "relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">{feature}</li>
                    ))}
                </ul>
                <button className = "mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition-colors duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;