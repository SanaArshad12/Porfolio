import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaSearch, FaJava } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiWordpress, SiCplusplus, SiPython } from 'react-icons/si';

const About: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Split skills into programming and development
  const programmingSkills = [
    { name: 'C++', icon: SiCplusplus, level: 80, color: '#00599C' },
    { name: 'Java', icon: FaJava, level: 75, color: '#ED8B00' },
    { name: 'Python', icon: SiPython, level: 78, color: '#FFD43B' },
    { name: 'Assembly', icon: FaCode, level: 70, color: '#FF6B35' },
    { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, level: 75, color: '#3178C6' },
  ];
  const devSkills = [
    { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
    { name: 'Express.js', icon: SiExpress, level: 85, color: '#68D391' },
    { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
    { name: 'Bootstrap', icon: SiBootstrap, level: 85, color: '#7952B3' },
    { name: 'WordPress', icon: SiWordpress, level: 88, color: '#21759B' },
    { name: 'SEO', icon: FaSearch, level: 85, color: '#4285F4' },
  ];

  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'National University Of Management and Technology',
      year: '2020-2024',
      icon: FaGraduationCap,
      description: 'Specialized in software engineering and web development'
    },
    {
      degree: 'Intermediate Pre-Medical',
      institution: 'Minhaj College',
      year: '2018-2020',
      icon: FaGraduationCap,
      description: 'Foundation in sciences before transitioning to computer science'
    }
  ];

  const experience = [
    {
      title: 'Web Developer',
      company: 'DPS Model Town',
      period: 'January 2024 - February 2024',
      icon: FaBriefcase,
      description: 'Developed HTML, CSS, and JavaScript webpages, employing industry best practices to ensure optimal functionality and user experience. Authored stored procedures for MySQL databases, enhancing data retrieval and manipulation efficiency while maintaining data integrity. Designed responsive webpages utilizing Bootstrap framework, ensuring seamless user interaction across various devices and screen sizes.',
      skills: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap']
    }
  ];

  return (
    <section id="about" className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            MERN stack developer with a strong background in programming and web development.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Professional Summary */}
          <div className="bg-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Summary</span>
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a passionate MERN stack developer with a strong foundation in computer science and extensive experience in web development.
                My journey began with a BS in Computer Science from the National University of Management and Technology, where I specialized
                in software engineering and web development.
              </p>
              <p>
                With expertise in modern technologies like React, Node.js, MongoDB, and Express.js, I create dynamic and responsive web applications.
                My programming skills span across multiple languages including JavaScript, TypeScript, Python, Java, and C++, allowing me to
                tackle diverse development challenges.
              </p>
              <p>
                Beyond technical skills, I have hands-on experience in WordPress development, SEO optimization, and have successfully launched
                and maintained multiple projects including a comprehensive blog website. I'm committed to writing clean, efficient code and
                staying updated with the latest industry trends and best practices.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</span>
            </h3>

            {/* Programming Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaCode className="text-purple-400" />
                Programming Languages
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {programmingSkills.map((skill, index) => (
                  <div key={skill.name} className="bg-slate-600 rounded-lg p-4 text-center hover:bg-slate-500 transition-colors">
                    <skill.icon style={{ color: skill.color }} size={32} className="mx-auto mb-2" />
                    <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                    <p className="text-gray-400 text-xs">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaCode className="text-purple-400" />
                Development & Frameworks
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {(showAllSkills ? devSkills : devSkills.slice(0, 6)).map((skill, index) => (
                  <div key={skill.name} className="bg-slate-600 rounded-lg p-4 text-center hover:bg-slate-500 transition-colors">
                    <skill.icon style={{ color: skill.color }} size={32} className="mx-auto mb-2" />
                    <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                    <p className="text-gray-400 text-xs">{skill.level}%</p>
                  </div>
                ))}
              </div>

              {/* Show More Button */}
              {devSkills.length > 6 && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="flex items-center gap-2 px-3 py-1 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-medium border border-gray-600/50 hover:border-purple-500/50 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-sm"
                  >
                    <span>{showAllSkills ? 'Show Less' : 'Show More'}</span>
                    <FaCode size={10} className="opacity-70" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Education */}
            <div className="bg-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-600 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <FaGraduationCap className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">BS Computer Science</h4>
                    <p className="text-purple-400 font-semibold">National University Of Management and Technology</p>
                    <p className="text-gray-400 text-sm mb-2">2020-2024</p>
                    <p className="text-gray-300 leading-relaxed">Specialized in software engineering and web development with focus on modern programming languages and frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-600 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <FaGraduationCap className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Intermediate Pre-Medical</h4>
                    <p className="text-purple-400 font-semibold">Minhaj College</p>
                    <p className="text-gray-400 text-sm mb-2">2018-2020</p>
                    <p className="text-gray-300 leading-relaxed">Foundation in sciences before transitioning to computer science</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-slate-600/50 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                      <exp.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
