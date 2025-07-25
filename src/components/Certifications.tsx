import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCertificate, FaAward, FaTrophy, FaCode, FaRobot, FaUniversity, FaGraduationCap, FaEye } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: any;
  color: string;
  skills?: string[];
  category: string;
  verified?: boolean;
}

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const certifications: Certification[] = [
    {
      title: "Fire Fighting Robot",
      issuer: "Al-Aleem Medical College",
      year: "2023",
      description: "Advanced robotics project focusing on autonomous fire detection and suppression systems",
      icon: FaRobot,
      color: "#FF6B6B",
      category: 'other',
      verified: true
    },
    {
      title: "Best Organizer",
      issuer: "Stars Academy",
      year: "2021",
      description: "Recognition for exceptional organizational and leadership skills in academic projects",
      icon: FaTrophy,
      color: "#4ECDC4",
      category: 'academic',
      verified: true
    },
    {
      title: "Coderush (Web Development)",
      issuer: "Information Technology University (ITU)",
      year: "2023",
      description: "Intensive web development bootcamp covering modern frameworks and best practices",
      icon: SiReact,
      color: "#61DAFB",
      category: 'web-dev',
      verified: true
    },
    {
      title: "Hack Forge (Web Development)",
      issuer: "National University of Modern Languages (NUML)",
      year: "2023",
      description: "Competitive programming and web development hackathon with focus on innovative solutions",
      icon: FaCode,
      color: "#F7DF1E",
      category: 'web-dev',
      verified: true
    },
    {
      title: "Surge (Web Development)",
      issuer: "University of Management and Technology (UMT)",
      year: "2023",
      description: "Advanced web development certification covering full-stack technologies and deployment",
      icon: SiNodedotjs,
      color: "#339933",
      category: 'web-dev',
      verified: true
    },
    {
      title: "PSIFI (Web Development)",
      issuer: "Lahore University of Management Sciences (LUMS)",
      year: "2023",
      description: "Comprehensive web development program focusing on modern JavaScript frameworks",
      icon: SiJavascript,
      color: "#F7DF1E",
      category: 'web-dev',
      verified: true
    }
  ];

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



  return (
    <section id="certifications" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Certifications & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My journey of continuous learning and professional development through various 
              certifications and achievements in web development and technology.
            </p>
          </motion.div>



          {/* Certifications Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(showAll ? certifications : certifications.slice(0, isMobile ? 3 : 6)).map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-slate-700/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/25"
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <cert.icon style={{ color: cert.color }} size={24} />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                      <FaCertificate size={10} />
                      Verified
                    </div>
                  )}
                </div>

                {/* Certificate Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <FaUniversity className="text-gray-400" size={14} />
                  <span className="text-purple-400 font-medium text-sm">{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <FaGraduationCap className="text-gray-400" size={14} />
                  <span className="text-gray-400 text-sm">{cert.year}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Category Badge */}
                <div className="flex justify-between items-center">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ 
                      backgroundColor: `${cert.color}20`, 
                      color: cert.color,
                      borderColor: `${cert.color}30`
                    }}
                  >
                    {cert.category.replace('-', ' ').toUpperCase()}
                  </span>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <FaAward className="text-white" size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button - Responsive */}
          {((isMobile && certifications.length > 3) || (!isMobile && certifications.length > 6)) && (
            <motion.div variants={itemVariants} className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-medium border border-gray-600/50 hover:border-purple-500/50 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-sm"
              >
                <span>{showAll ? 'Show Less' : `Show ${certifications.length - (isMobile ? 3 : 6)} More`}</span>
                <FaEye size={12} className="group-hover:scale-110 transition-transform opacity-70" />
              </button>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-400 mb-6">
                I believe in continuous learning and staying updated with the latest technologies. 
                These certifications represent my commitment to professional growth and excellence.
              </p>
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30">
                  <FaCertificate />
                  <span className="font-medium">{certifications.length} Certifications</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30">
                  <FaAward />
                  <span className="font-medium">{certifications.filter(c => c.verified).length} Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

