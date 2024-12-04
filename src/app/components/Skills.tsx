export default function Skills() {
    const skills = [
        { name: "Next.js", level: 79, color: "from-blue-400 to-blue-600" },
        { name: "HTML", level: 70, color: "from-orange-400 to-orange-500" },
        { name: "CSS", level: 72, color: "from-teal-400 to-teal-600" },
        { name: "Typescript", level: 76, color: "from-red-400 to-red-600" },
        { name: "Tailwind CSS", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Adobe Illustrator CC 2024", level: 86, color: "from-indigo-400 to-indigo-600" },
        { name: "Adobe Photoshop CC 2024", level: 90, color: "from-pink-400 to-pink-600" },
        { name: "Ramset 9.7.1", level: 78, color: "from-gray-400 to-gray-600" },
        { name: "Figma", level: 71, color: "from-yellow-400 to-yellow-500" },
        { name: "Microsoft Excel", level: 74, color: "from-lime-400 to-lime-600" },
        { name: "Microsoft Outlook", level: 78, color: "from-fuchsia-400 to-fuchsia-600" },
        { name: "Oracle", level: 82, color: "from-fuchsia-400 to-orange-500" },
        { name: "Research & Development Module", level: 81, color: "from-gray-400 to-blue-700" },
    ];

    return (
        <div id="Skills" className="py-20 ">
            {/* Heading */}
            <h2 className="text-[#00D9FF] text-5xl px-32 font-bold font-sans mb-12">
                Skills
            </h2>

            {/* Skills Grid */}
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="relative bg-[#0d1117] border rounded-lg shadow-lg p-5 transition-all duration-300 transform hover:scale-105"
                        style={{
                            boxShadow: "0px 0px 20px rgba(0, 217, 255, 0.5)",
                        }}
                    >
                        {/* Skill Title */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-[#00D9FF]">{skill.name}</span>
                            <span className="text-md text-gray-400">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 rounded-full h-3 mt-4 overflow-hidden">
                            <div
                                className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Motivational Text */}
            <div className="mt-12 text-center">
                <p className="text-gray-400 font-medium">
                    Continuously refining and expanding my skills to stay ahead in the ever-evolving tech world.
                </p>
            </div>
        </div>
    );
}
