"use client";
import React from "react";

export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log("Form submitted!");
    };

    return (
        <section id="Contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-[1150px]">
                <h2 className="text-[#00D9FF] text-5xl font-bold font-sans mt-20 mb-[50px]">
                    Contact
                </h2>
                <p className="font-light text-center text-slate-300 sm:text-xl">
                    Kindly complete the form below to get in touch with me.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-slate-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-[#0d1117] border border-white text-slate-300 text-sm rounded-lg focus:ring-[#00D9FF] focus:border-[#00D9FF] block w-full p-3"
                            placeholder="Name@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-slate-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-slate-300 bg-[#0d1117] rounded-lg border border-white shadow-sm focus:ring-[#00D9FF] focus:border-[#00D9FF]"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-slate-300"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-3 w-full text-sm text-slate-300 bg-[#0d1117] rounded-lg shadow-sm border border-white focus:ring-[#00D9FF] focus:border-[#00D9FF]"
                            placeholder="Leave a message..."
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="mt-6 px-8 py-3 rounded-full bg-[#00D9FF] text-white font-semibold hover:bg-[#32b3b8] transition-all duration-300 transform hover:scale-105 shadow-lg"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                boxShadow: "0px 0px 20px #00D9FF",
                            }}
                            aria-label="Contact me"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
