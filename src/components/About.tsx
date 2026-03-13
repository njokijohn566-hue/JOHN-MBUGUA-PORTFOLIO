import { Heart, Lightbulb, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Technology',
      description: 'Deeply committed to exploring the latest tech trends and building innovative solutions',
    },
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description: 'Constantly thinking outside the box to solve problems in unique and effective ways',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Focused on creating digital solutions that address real-world challenges',
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Combining web development with artificial intelligence for smarter experiences',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn more about my journey, values, and what drives me to create
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 bg-gray-900 rounded-2xl border border-[#00f0e1]/20 shadow-[0_0_30px_rgba(0,240,225,0.1)]">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a passionate web designer and developer with a deep interest in technology
              and innovation. My journey in the digital world began with a curiosity about how
              things work, and it has evolved into a dedication to building intelligent digital
              solutions that solve real problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              What sets me apart is my commitment to combining traditional web development with
              cutting-edge artificial intelligence. I believe that the future of the web lies
              in creating smarter, more intuitive experiences that anticipate user needs and
              provide seamless interactions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every project I work on is an opportunity to push boundaries, learn new
              technologies, and create something that makes a difference. Whether it's
              integrating AI chatbots, building responsive websites, or designing innovative
              user interfaces, I approach each challenge with creativity and precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900 rounded-xl border border-[#00f0e1]/20 hover:border-[#00f0e1]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,225,0.2)] hover:-translate-y-2"
            >
              <div className="mb-4 p-3 bg-[#00f0e1]/10 rounded-lg inline-block group-hover:shadow-[0_0_20px_rgba(0,240,225,0.4)] transition-all duration-300">
                <value.icon className="w-8 h-8 text-[#00f0e1]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
