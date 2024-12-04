"use client";
import React from "react";
export default function Projects() {
    return (
        <div>
            < div id="Projects">
                <h2 className="text-[#00D9FF] text-5xl px-32 font-bold font-sans">
                    Featured Projects
                </h2>
                <div className="flex gap-6 justify-center mt-10 mb-6">
                    {/* Card 1 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/178499259/UIUX-Design">
                            <img className="rounded-t-lg w-full mt-2 h-52" src="/landingpage.jpg" alt="UI/UX Image" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/178499259/UIUX-Design">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">UI/UX Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 4,000 - 100,000</p>

                            {/* Star Rating */}
                            <div className="flex items-center ml-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">621 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/*  Card 2 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/176600221/Fitness-Gym-Logo-Template">
                            <img className="rounded-t-lg w-full mt-2 h-52" src="/logodesign.jpg" alt="logo Image" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/176600221/Fitness-Gym-Logo-Template">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">Logo Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 2,000 - 18,000</p>

                            {/* Star Rating */}
                            <div className="flex items-center mx-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">199 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/*  Card 3 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/176497521/Pattern-Design">
                            <img className="rounded-t-lg w-full mt-2" src="textiledesign.jpg" alt="Pattern design image" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/176497521/Pattern-Design">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">Textile Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 3,000 - 15,000</p>

                            {/* Star Rating */}
                            <div className="flex items-center ml-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">456 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/*  Card 4 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a>
                            <img className="rounded-t-lg w-full mt-2 h-52" src="dataentry.png" alt="Style Sheet image" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="/cards/card4">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">Data Management</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 2,000 - 3,000</p>
                            {/* Star Rating */}
                            <div className="flex items-center ml-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">359 Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 justify-center mb-24">
                    {/*Card 5 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/178429035/Syrup-Design">
                            <img className="rounded-t-lg w-full mt-2 h-52" src="/syrup.jpg" alt="Syrup Design" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/178429035/Syrup-Design">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">Packaging Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 4,000 - 12,000</p>

                            {/* Star Rating */}
                            <div className="flex items-center ml-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">8514 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/*Card 6 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/176693195/MODERN-Executive-ID-CARD-DESIGN">
                            <img className="rounded-t-lg w-full mt-2 h-52" src="/idcard.jpg" alt="ID Card Image" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/176693195/MODERN-Executive-ID-CARD-DESIGN">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">ID Card Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 2,000 - 15,000</p>

                            {/* Star Rating */}
                            <div className="flex items-center mx-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">213 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/*Card 7 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/177810007/Letterhead">
                            <img className="rounded-t-lg w-full mt-2" src="letter.jpg" alt="Letterhead Design" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/177810007/Letterhead">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">Letterhead Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 2,000 - 10,000</p>

                            {/* Star Rating */}
                            <div className="flex items-center ml-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">456 Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div
                        className="w-64 bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        style={{
                            boxShadow: "0px 0px 20px #00D9FF",
                        }}
                    >
                        <a href="https://www.behance.net/gallery/177002937/Professional-Certificate-Design">
                            <img className="rounded-t-lg w-full mt-2 h-52" src="certificate.jpg" alt="Certificate Image" />
                        </a>
                        <div className="p-5 text-center mt-2">
                            <a href="https://www.behance.net/gallery/177002937/Professional-Certificate-Design">
                                <h5 className="text-xl font-semibold font-sans tracking-tight text-[#00D9FF]">Certificate Design</h5>
                            </a>
                            <p className="text-[16px] text-green-500">PKR 2,000 - 3,000</p>
                            {/* Star Rating */}
                            <div className="flex items-center ml-14 mt-2 text-yellow-400 w-44">
                                <span className="ml-2 text-[14px] text-gray-400 whitespace-nowrap">678 Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}