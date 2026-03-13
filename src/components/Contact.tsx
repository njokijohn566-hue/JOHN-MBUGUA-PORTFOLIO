import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:your.email@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-[#00f0e1] drop-shadow-[0_0_30px_rgba(0,240,225,0.8)]">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss innovative ideas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#00f0e1]/20 rounded-lg text-white focus:outline-none focus:border-[#00f0e1] focus:shadow-[0_0_20px_rgba(0,240,225,0.2)] transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#00f0e1]/20 rounded-lg text-white focus:outline-none focus:border-[#00f0e1] focus:shadow-[0_0_20px_rgba(0,240,225,0.2)] transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#00f0e1]/20 rounded-lg text-white focus:outline-none focus:border-[#00f0e1] focus:shadow-[0_0_20px_rgba(0,240,225,0.2)] transition-all duration-300"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#00f0e1]/20 rounded-lg text-white focus:outline-none focus:border-[#00f0e1] focus:shadow-[0_0_20px_rgba(0,240,225,0.2)] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#00f0e1] text-black font-semibold rounded-lg hover:bg-[#00d4c9] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,225,0.5)] hover:shadow-[0_0_40px_rgba(0,240,225,0.8)] flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-8 bg-gray-900 rounded-2xl border border-[#00f0e1]/20 shadow-[0_0_30px_rgba(0,240,225,0.1)]">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Create Something Amazing
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always excited to work on innovative projects and collaborate with
                creative minds. Whether you have a project in mind or just want to connect,
                feel free to reach out through the form or social media.
              </p>

              <div className="space-y-4">
                <h4 className="text-[#00f0e1] font-semibold mb-4">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-[#00f0e1]/20 hover:border-[#00f0e1]/60 hover:shadow-[0_0_20px_rgba(0,240,225,0.2)] transition-all duration-300 group"
                    >
                      <link.icon className="w-5 h-5 text-[#00f0e1] group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 text-sm">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#00f0e1]/5 rounded-lg border border-[#00f0e1]/20">
                <p className="text-gray-400 text-sm text-center">
                  <span className="text-[#00f0e1] font-semibold">Response Time:</span> Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
