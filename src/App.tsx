import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { FaHeart, FaCode, FaGithub, FaEnvelope } from 'react-icons/fa';

// Portfolio App Component
function App() {
  return (
    <div className="App bg-slate-900 text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sana Arshad
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                MERN Stack Developer passionate about creating exceptional digital experiences
                and building scalable web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:sanaarshad1209@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaEnvelope />
                  sanaarshad1209@gmail.com
                </a>
                <a
                  href="https://github.com/SanaArshad12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaGithub />
                  GitHub Profile
                </a>
                <a
                  href="https://guiprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaCode />
                  guiprojects.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sana Arshad. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1" />
              and lots of coffee.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/SanaArshad12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 text-gray-400 rounded-lg hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="mailto:sanaarshad1209@gmail.com"
                  className="p-2 bg-slate-700 text-gray-400 rounded-lg hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;





