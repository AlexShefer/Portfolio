import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
    return (
        <div name="home" className=" w-full h-screen bg-[#0a192f]">
            Home
            {/* container */}
            <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi my name is</p>
                <h1 className="text-4-xl sm:text-7xl font-bold text-teal-100">
                    Aleksandr Shefer
                </h1>
                <h2 className="text-4-xl sm:text-7xl font-bold text-teal-200">
                    I am software engineer.
                </h2>
                <p className="text-teal-200 py-4 max-w-2xl">
                    I am focused on developing responsive front-end web
                    applications with back-end technologies integration that
                    exceed users expectations.
                </p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
                            View all work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
