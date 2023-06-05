import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/ASh-Logo.png";
import { Link } from "react-scroll";

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-20 flex justify-between items-center p-4  bg-slate-900 text-gray-300">
            <div>
                <img className="w-[80px]" src={Logo} alt="Logo" />
            </div>
            {/* Menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Menu open bar */}
            <div onClick={handleClick} className="md:hidden z-20">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <div
                className={
                    !nav
                        ? "hidden"
                        : "fixed top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center z-10"
                }
            >
                <ul>
                    <li className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            to="home"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            to="skills"
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            to="work"
                            smooth={true}
                            duration={500}
                        >
                            Work
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* social  icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/aleksandr-shefer-a115ab265"
                        >
                            Linkedin <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-900">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/AlexShefer"
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto:avshef451987@gmail.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="./assets/resume.pdf"
                            download={"resume.pdf"}
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
