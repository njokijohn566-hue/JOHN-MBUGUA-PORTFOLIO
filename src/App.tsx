import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Home />
      <Projects />
      <Skills />
      <Tools />
      <About />
      <Achievements />
      <Contact />

      <footer className="py-8 px-6 bg-black border-t border-[#00f0e1]/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Built with <span className="text-[#00f0e1]">passion</span> and{' '}
            <span className="text-[#00f0e1]">innovation</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            &copy; 2024 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
