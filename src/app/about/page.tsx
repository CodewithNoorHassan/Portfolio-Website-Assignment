export const metadata = {
    title: "About"
}
export default function About() {
    return (
        <div>
            <div className="flex items-center justify-center text-2xl text-white h-9 mt-20 mb-8">
                <h1>I am a student of Governor Sindh Initiative for AI, Web 3.0, and Metaverse</h1>
            </div>
            <div className="w-auto h-60 px-20 py-16 text-center bg-[#0d1117] border border-gray-200 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg mx-20"
                style={{
                    boxShadow: "0px 0px 20px #00D9FF",
                }}>
                <h3 className="text-white dark:text-white text-base font-bold tracking-tight">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                    My instructor, Ali Jawad, is an exceptional teacher who has made learning Next.js and Tailwind CSS both engaging and insightful. His passion for web development shines through in every lesson, making complex concepts easier to understand. His practical approach encourages us to apply what we learn through hands-on projects. He provides clear explanations and valuable resources that enhance our learning experience. His enthusiasm for technology inspires us to explore beyond the classroom. With his guidance, I feel more confident in my coding skills. I am grateful for the opportunity to learn from such a knowledgeable mentor. Thanks to Sir, I am excited to continue my journey in web development.
                </p>
            </div>
        </div>
    );
}
