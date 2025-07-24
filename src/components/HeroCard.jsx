const HeroCard = (props) => {
    const {title, icon} = props;
    
    return(
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 w-36 h-36 flex flex-col items-center justify-center text-center hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer">
            <div className="text-3xl mb-2">
                {icon}
            </div>
            <h4 className="text-sm font-semibold text-white leading-tight">
                {title}
            </h4>
        </div>
    );
}

export default HeroCard;