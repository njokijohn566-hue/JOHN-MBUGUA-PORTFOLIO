import { Code2, GitBranch, Github, Figma, Terminal, Database, Cpu, Palette } from 'lucide-react';

export default function Tools() {
  const tools = [
    { name: 'VS Code', icon: Code2, description: 'Primary code editor' },
    { name: 'Git', icon: GitBranch, description: 'Version control' },
    { name: 'GitHub', icon: Github, description: 'Code repository' },
    { name: 'Figma', icon: Figma, description: 'UI/UX design' },
    { name: 'Terminal', icon: Terminal, description: 'Command line interface' },
    { name: 'Database', icon: Database, description: 'Data management' },
    { name: 'AI Tools', icon: Cpu, description: 'AI development' },
    { name: 'Design Tools', icon: Palette, description: 'Creative software' },
  ];

  return (
    <section id="tools" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Tools & </span>
            <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The powerful tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-900 rounded-xl border border-[#00f0e1]/20 hover:border-[#00f0e1]/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,225,0.3)] hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-[#00f0e1]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative mb-4 p-4 bg-[#00f0e1]/10 rounded-lg group-hover:shadow-[0_0_30px_rgba(0,240,225,0.4)] transition-all duration-300">
                <tool.icon className="w-12 h-12 text-[#00f0e1] group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 relative">
                {tool.name}
              </h3>

              <p className="text-gray-500 text-sm relative">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
