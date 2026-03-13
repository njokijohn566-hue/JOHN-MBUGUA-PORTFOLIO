import { Trophy, Award, Star, Medal } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Web Development Hackathon Winner',
      year: '2024',
      description: 'First place in regional web development competition for innovative AI-powered solution',
    },
    {
      icon: Award,
      title: 'AI Integration Certification',
      year: '2024',
      description: 'Professional certification in AI and Machine Learning integration for web applications',
    },
    {
      icon: Star,
      title: 'Innovation Project Award',
      year: '2023',
      description: 'Recognized for developing a smart automation tool that improved workflow efficiency by 40%',
    },
    {
      icon: Medal,
      title: 'Full Stack Development Certificate',
      year: '2023',
      description: 'Completed advanced certification program in modern full-stack web development',
    },
    {
      icon: Trophy,
      title: 'UI/UX Design Excellence',
      year: '2023',
      description: 'Awarded for outstanding user interface design in mobile-first web applications',
    },
    {
      icon: Award,
      title: 'Open Source Contributor',
      year: '2022-2024',
      description: 'Active contributor to multiple open-source projects with 500+ commits',
    },
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition, certifications, and milestones that mark my journey in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-900 rounded-xl border border-[#00f0e1]/20 hover:border-[#00f0e1]/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,225,0.3)] hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 text-[#00f0e1]/30 font-bold text-lg">
                {achievement.year}
              </div>

              <div className="mb-4 p-3 bg-[#00f0e1]/10 rounded-lg inline-block group-hover:shadow-[0_0_20px_rgba(0,240,225,0.4)] transition-all duration-300">
                <achievement.icon className="w-8 h-8 text-[#00f0e1] group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-white font-semibold text-xl mb-3 pr-16">
                {achievement.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0e1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
