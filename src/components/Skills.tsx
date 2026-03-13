export default function Skills() {
  const skills = [
    { name: 'HTML & CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React & Next.js', level: 88, category: 'Frontend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'AI Integration', level: 82, category: 'AI/ML' },
    { name: 'UI/UX Design', level: 90, category: 'Design' },
    { name: 'Web Development', level: 92, category: 'Full Stack' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900 rounded-xl border border-[#00f0e1]/20 hover:border-[#00f0e1]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,225,0.2)]"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  <span className="text-gray-500 text-xs">{skill.category}</span>
                </div>
                <span className="text-[#00f0e1] font-bold text-xl">{skill.level}%</span>
              </div>

              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00f0e1] to-[#00a8cc] rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,240,225,0.6)]"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1s ease-out ${index * 0.1}s backwards`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
