function About() {
    return (
        <div
            name="about"
            className="w-full min-h-screen bg-slate-900 text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-5xl w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                </div>
                <div className="max-w-5xl w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>
                            Hi, I'm Aleksandr, nice to meet you Please take a
                            look around.
                        </p>
                    </div>
                    <div>
                        <p className="indent-8">
                            My journey in software development commenced several
                            years ago with the completion of a basic programming
                            and web development course at the University. This
                            training enabled me to develop applications for my
                            сourse projects at the university. Subsequently,
                            after obtaining a degree in Civil Engineering, I
                            pursued a career in Construction Management and
                            Civil Engineering.
                        </p>
                        <p className="indent-8">
                            During the recent pandemic quarantine, I became
                            immersed in learning programming. I was enthused and
                            quickly gravitated towards web development, which
                            led me to develop an application to meet my specific
                            needs. I realized that my newly acquired skills
                            could be utilized in the development of cutting-edge
                            applications and technologies. My passion for
                            learning new technologies was further fueled by
                            completing online courses, enabling me to pick up
                            new tech stacks and develop unique web applications.
                        </p>
                        <p className="indent-8">
                            Currently, I am actively seeking opportunities that
                            will enable me to leverage my knowledge, skills, and
                            experience in software development. I am confident
                            that I can make valuable contributions to project
                            development and related tasks in software
                            development. I am comfortable working with both
                            internal and external customers and can work
                            independently or as part of a team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
