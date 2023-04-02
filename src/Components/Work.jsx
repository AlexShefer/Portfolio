import React from "react";
import ProjectCard from "./ProjectCard";
import PropRent from "../assets/projects/PropRent.png";
import FriendLink from "../assets/projects/FriendLink.png";
import Campground from "../assets/projects/Campground.png";

function Work() {
    return (
        <div
            name="work"
            className="w-full md:h-screen text-gray-300  bg-slate-900"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Work
                    </p>
                    <p className="py-6">Check out some of my recent work</p>
                </div>
                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <ProjectCard
                        image={PropRent}
                        liveUrl={"https://proprentclient.onrender.com/"}
                        gitUrl={
                            "https://github.com/AlexShefer/RealEstate-Client"
                        }
                    />
                    <ProjectCard
                        image={FriendLink}
                        liveUrl={"https://friendlink-i64l.onrender.com"}
                        gitUrl={
                            "https://github.com/AlexShefer/FriendLink_Server"
                        }
                    />
                    <ProjectCard
                        image={Campground}
                        liveUrl={"https://myyelpcamp-btli.onrender.com/"}
                        gitUrl={"https://github.com/AlexShefer/myYelpCamp"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Work;
