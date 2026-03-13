import { Download, Sparkles, Code, Cpu, Rocket } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Projects Built', value: '25+' },
    { label: 'Technologies', value: '15+' },
    { label: 'AI Integrations', value: '10+' },
  ];

  const currentWork = [
    { icon: Code, text: 'Modern Web Design Projects' },
    { icon: Cpu, text: 'AI Chatbot Integration' },
    { icon: Sparkles, text: 'Innovative UI/UX Designs' },
    { icon: Rocket, text: 'Smart Digital Solutions' },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#00f0e1] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f0e1] to-[#00a8cc] p-1 shadow-[0_0_40px_rgba(0,240,225,0.6)] animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black p-2">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-white">JOHN</span>{' '}
              <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
                MBUGUA
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
              Web Designer & Developer
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
              I specialize in building modern, responsive websites and integrating AI tools
              to improve user experience, automation, and digital innovation. My passion lies
              in creating intelligent digital solutions that solve real-world problems.
            </p>

            <div className="mb-8">
              <h3 className="text-[#00f0e1] text-xl font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-5 h-5" />
                What I'm Currently Working On
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {currentWork.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#00f0e1]/5 border border-[#00f0e1]/20 hover:border-[#00f0e1]/50 hover:shadow-[0_0_20px_rgba(0,240,225,0.2)] transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-[#00f0e1]" />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <button className="group px-8 py-4 bg-[#00f0e1] text-black font-semibold rounded-lg hover:bg-[#00d4c9] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,225,0.5)] hover:shadow-[0_0_40px_rgba(0,240,225,0.8)] flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>

              <div className="flex gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#00f0e1] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
