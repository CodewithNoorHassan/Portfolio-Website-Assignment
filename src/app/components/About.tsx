export default function About() {
    return (
        <section id="About" className="py-20">
            {/* Heading */}
            <h2 className="text-[#00D9FF] text-5xl px-32 font-bold font-sans mb-12">
                About Me
            </h2>

            {/* Content Container */}
            <div
                className="flex flex-col lg:flex-row items-center gap-8 justify-center mx-auto bg-[#0d1117] border rounded-xl py-8 max-w-[1100px] shadow-lg transition-all duration-300 transform hover:scale-105 "
                style={{
                    boxShadow: "0px 0px 30px rgba(0, 217, 255, 0.5)",
                }}
            >
                {/* Profile Image */}
                <div className="relative">
                    <img
                        src="/noor.jpg" // Replace with your actual image path
                        alt="Noor Hassan - Frontend Developer"
                        className="w-48 h-48 rounded-full border-4 opacity-90 border-[#00D9FF] object-cover"
                        style={{
                            boxShadow: "0 0 20px #00D9FF, 0 0 40px rgba(0, 217, 255, 0.6)",
                        }}
                    />
                </div>
                {/* Divider */}
                <div className="hidden lg:block w-[3px] h-48 bg-[#00D9FF] rounded-full"></div>

                {/* Description */}
                <div className="text-slate-300 flex flex-col justify-center text-center lg:text-left max-w-[700px]">
                    <p className="text-lg leading-relaxed">
                        <span className="text-[#00D9FF] font-bold">Frontend Developer </span>
                        with a strong foundation in <span className="font-semibold">UI/UX Design</span> using modern technologies such as
                        <span className="text-[#00D9FF]"> HTML, CSS, TypeScript, Next.js,</span> and <span className="text-[#00D9FF]">Figma</span>.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Also a passionate <span className="font-semibold text-[#00D9FF]">Graphic and Textile Designer</span> with expertise in CAD/CAM tools for textile printing and
                        a proven track record as a <span className="text-[#00D9FF] font-bold">Data Entry Expert</span>. Over 4 years of experience in creating
                        designs that stand out and drive results.
                    </p>
                </div>
            </div>
        </section>
    );
}
