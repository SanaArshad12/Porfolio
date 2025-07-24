import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaCode, FaWhatsapp, FaShare } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Share functions
  const handleShareWhatsApp = () => {
    const url = window.location.href;
    const text = "Check out Sana Arshad's amazing portfolio! 🚀 MERN Stack Developer with impressive projects.";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareEmail = () => {
    const url = window.location.href;
    const subject = "Check out this amazing portfolio!";
    const body = `Hi!\n\nI wanted to share Sana Arshad's portfolio with you. She's a talented MERN Stack Developer with some impressive projects.\n\nCheck it out: ${url}\n\nBest regards!`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  const roles = [
    'MERN Stack Developer',
    'Full Stack Developer', 
    'React Developer',
    'Node.js Developer',
    'WordPress Developer',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const techIcons = [
    { icon: SiReact, color: '#61DAFB', name: 'React' },
    { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
    { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { icon: SiExpress, color: '#000000', name: 'Express' },
    { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Fewer, smaller orbs for a cleaner look */}
        <div className="absolute top-16 left-10 w-56 h-56 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10 flex items-center min-h-screen">
        <motion.div 
          className="w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs font-medium backdrop-blur-sm border border-purple-500/30 shadow">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for work
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Sana Arshad
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gray-200 mb-4 h-10 flex items-center justify-center lg:justify-start"
              >
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">I'm a </span>
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold ml-2">
                  {text}
                  <span className="animate-pulse text-purple-400">|</span>
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                MERN stack developer passionate about building exceptional digital experiences. I specialize in scalable web apps with modern technologies and clean code. See my work at{' '}
                <a
                  href="https://guiprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline font-semibold"
                >
                  guiprojects.com
                </a>
                .
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-6 justify-center lg:justify-start"
              >
                <motion.a
                  href="#projects"
                  className="group relative px-7 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white rounded-xl font-bold text-base overflow-hidden shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 text-center"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative flex items-center justify-center gap-2">
                    <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
                    View My Work
                  </span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="group relative px-7 py-3 border-2 border-purple-400 text-purple-300 rounded-xl font-bold text-base backdrop-blur-sm bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 text-center shadow"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
                    Let's Talk
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-3"
              >
                <motion.a
                  href="https://github.com/SanaArshad12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-slate-800 to-slate-700 text-gray-300 rounded-lg hover:text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  href="mailto:sanaarshad1209@gmail.com"
                  className="group p-3 bg-gradient-to-br from-slate-800 to-slate-700 text-gray-300 rounded-lg hover:text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={22} className="group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  href="tel:03204078238"
                  className="group p-3 bg-gradient-to-br from-slate-800 to-slate-700 text-gray-300 rounded-lg hover:text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform block">📱</span>
                </motion.a>

                {/* Share Portfolio Buttons */}
                <motion.button
                  onClick={handleShareWhatsApp}
                  className="group p-3 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:-translate-y-1 shadow"
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title="Share on WhatsApp"
                >
                  <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
                </motion.button>

                <motion.button
                  onClick={handleShareEmail}
                  className="group p-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  title="Share via Email"
                >
                  <FaShare size={22} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-4 md:p-5 my-3 min-h-80 border-2 border-purple-500 shadow-xl shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-5 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Tech Arsenal
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {techIcons.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.8 + index * 0.15, type: "spring", stiffness: 100 }}
                        className="group relative flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-2 shadow hover:shadow-xl hover:shadow-purple-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-500"></div>
                        <tech.icon
                          size={32}
                          style={{ color: tech.color }}
                          className="mb-2 group-hover:scale-110 transition-all duration-500 relative z-10 drop-shadow-lg"
                        />
                        <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
                          {tech.name}
                        </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center text-gray-300 cursor-pointer group"
          whileHover={{ scale: 1.08 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-medium mb-2 group-hover:text-purple-400 transition-colors">Discover More</span>
          <div className="relative">
            <div className="w-6 h-8 border-2 border-purple-400 rounded-full flex justify-center bg-gradient-to-b from-purple-500/20 to-transparent backdrop-blur-sm">
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-1"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;



