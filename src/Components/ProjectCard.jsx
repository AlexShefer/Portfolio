function ProjectCard({ image, liveUrl, gitUrl }) {
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div bg-cover lg:bg-contain  "
        >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                    React Js Application
                </span>
                <div className="pt-8 text-center">
                    <a href={gitUrl}>
                        {" "}
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                            Code
                        </button>
                    </a>
                    <a href={liveUrl}>
                        {" "}
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                            Live
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
