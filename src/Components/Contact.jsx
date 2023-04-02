import React from "react";

function Contact() {
    return (
        <div
            name="contact"
            className="w-full md:h-screen  bg-slate-900 flex justify-center items-center p-4 z-0"
        >
            <form
                method="POST"
                action="https://getform.io/f/7c93099c-7f7f-48f1-b005-a72071db6f42"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4">
                        Submit the form below or shoot me an email -
                        avshef451987@gmail.com
                    </p>
                </div>
                <input
                    className="bg-[#ccd6f6] p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 p-2 bg-[#ccd6f6]"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <textarea
                    className="bg-[#ccd6f6] p-2"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
}

export default Contact;
