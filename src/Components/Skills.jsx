import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import React from "../assets/react.png";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
    return (
        <div
            name="skills"
            className="w-full md:h-screen  bg-slate-900 text-gray-300"
        >
            <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technological I've worked with:
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={HTML}
                            alt="Html icon"
                        />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={CSS}
                            alt="CSS icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img className="w-20 mx-auto" src={JS} alt="JS icon" />
                        <p className="my-4">Javascript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={React}
                            alt="React icon"
                        />
                        <p className="my-4">ReactJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={Node}
                            alt="Node icon"
                        />
                        <p className="my-4">NodeJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={Mongo}
                            alt="Mongo icon"
                        />
                        <p className="my-4">Mongo DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={Tailwind}
                            alt="Tailwind icon"
                        />
                        <p className="my-4">Tailwind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration:500">
                        <img
                            className="w-20 mx-auto"
                            src={Redux}
                            alt="redux icon"
                        />
                        <p className="my-4">Redux</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
