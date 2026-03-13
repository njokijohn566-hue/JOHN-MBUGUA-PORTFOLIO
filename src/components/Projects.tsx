import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Chatbot Platform',
      description: 'An intelligent chatbot system with natural language processing and machine learning capabilities for enhanced user interactions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'OpenAI API', 'TailwindCSS'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Modern E-Commerce Website',
      description: 'A fully responsive e-commerce platform with advanced filtering, payment integration, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Smart Dashboard Analytics',
      description: 'A data visualization dashboard with real-time analytics, AI-powered insights, and customizable reporting features.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'FastAPI', 'PostgreSQL'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'An innovative web application that uses AI to generate high-quality content, images, and creative assets for digital marketing.',
      image: 'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'AI APIs', 'Vercel'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Portfolio CMS System',
      description: 'A headless CMS built for creative professionals to showcase their work with customizable templates and SEO optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'GraphQL', 'Strapi', 'AWS'],
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'Task Automation Tool',
      description: 'A productivity tool that automates repetitive tasks using AI, workflow automation, and smart scheduling algorithms.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'React', 'Firebase', 'ML Models'],
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work in web development, AI integration, and innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-[#00f0e1]/20 hover:border-[#00f0e1]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,225,0.3)] hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0e1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-[#00f0e1]/10 text-[#00f0e1] rounded-full border border-[#00f0e1]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#00f0e1] text-black font-semibold rounded-lg hover:bg-[#00d4c9] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,225,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-[#00f0e1] font-semibold rounded-lg hover:bg-gray-700 border border-[#00f0e1]/30 hover:border-[#00f0e1]/60 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
