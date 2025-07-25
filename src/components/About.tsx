import { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaSearch, FaJava } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiWordpress, SiCplusplus, SiPython } from 'react-icons/si';

const About = () => {
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
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-full animate-pulse" style={{top: '20%'}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full animate-pulse" style={{top: '40%', animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-full animate-pulse" style={{top: '60%', animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-full animate-pulse" style={{top: '80%', animationDelay: '3s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header with Floating Elements */}
        <div className="text-center mb-24 relative">
          {/* Floating Elements */}
          <div className="absolute -top-10 left-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute -top-8 right-1/3 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute -top-6 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
          
          <div className="inline-block mb-8 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-30"></div>
            {/* <span className="relative px-6 py-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-100 rounded-lg text-sm font-semibold backdrop-blur-xl border border-purple-500/30 shadow-xl">
              About Me
            </span> */}
          </div>
          
          <div className="relative">
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-10 tracking-tight relative z-10 animate-fade-in-up">
              <span className="inline-block animate-slide-in-left bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x bg-[length:200%_100%]">
                About
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x inline-block animate-slide-in-right bg-[length:300%_100%]">
                Me
              </span>
            </h2>
            {/* Flowing color overlay effect */}
            <div className="absolute inset-0 z-0">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight opacity-30 bg-gradient-to-r from-purple-500/20 via-pink-500/20 via-cyan-500/20 to-purple-500/20 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_100%]">
                About Me
              </h2>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 z-0 blur-sm">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight opacity-20 bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-[length:250%_100%]">
                About Me
              </h2>
            </div>
          </div>
          
          <div className="relative mb-10">
            <div className="w-40 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto rounded-full shadow-xl shadow-purple-500/50"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full opacity-50 blur-sm"></div>
          </div>
          
          <p className="text-2xl lg:text-3xl text-gray-100 max-w-5xl mx-auto leading-relaxed font-light relative">
            Passionate 
            <span className="text-purple-300 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mx-2 relative">
              MERN stack developer
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </span>
            crafting exceptional digital experiences with modern technologies and innovative solutions.
          </p>
        </div>

        {/* Enhanced Content Sections */}
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Professional Summary with Enhanced Cards Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Enhanced Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-700/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl p-6 border border-purple-500/40 shadow-2xl shadow-purple-900/40 ring-1 ring-white/10 overflow-hidden">
                {/* Radial glow overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-radial from-white/10 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-50 animate-pulse"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                        <FaCode className="text-white text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2 relative">
                        Sana Arshad
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                      </h3>
                      <p className="text-purple-300 font-bold text-lg flex items-center">
                        MERN Stack Developer
                        {/* <span className="ml-3 px-3 py-1 bg-purple-500/20 rounded-lg text-xs border border-purple-500/30">Available</span> */}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-slate-600/70 to-slate-700/70 rounded-2xl p-4 text-center border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20 group/stat">
                      <div className="text-3xl font-black text-purple-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">3+</div>
                      <div className="text-xs text-gray-100 font-bold">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-600/70 to-slate-700/70 rounded-2xl p-4 text-center border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105 backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 group/stat">
                      <div className="text-3xl font-black text-cyan-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">15+</div>
                      <div className="text-xs text-gray-100 font-bold">Projects Completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-600/70 to-slate-700/70 rounded-2xl p-4 text-center border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105 backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-green-500/20 group/stat">
                      <div className="text-3xl font-black text-green-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">10+</div>
                      <div className="text-xs text-gray-100 font-bold">Technologies</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-600/70 to-slate-700/70 rounded-2xl p-4 text-center border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105 backdrop-blur-lg shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 group/stat">
                      <div className="text-3xl font-black text-yellow-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">100%</div>
                      <div className="text-xs text-gray-100 font-bold">Client Satisfaction</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-gray-100 p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 hover:scale-105 group/badge">
                      <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                      <span className="font-bold text-base flex items-center w-full">
                        BS Computer Science Graduate
                        <span className="ml-auto text-xs opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 text-purple-200">2025</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-100 p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105 group/badge">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      <span className="font-bold text-base flex items-center w-full">
                        Full-Stack Web Developer
                        <span className="ml-auto text-xs opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 text-cyan-200">3+ Years</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-100 p-3 rounded-xl bg-pink-500/20 border border-pink-500/30 backdrop-blur-sm hover:bg-pink-500/30 transition-all duration-300 hover:scale-105 group/badge">
                      <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                      <span className="font-bold text-base flex items-center w-full">
                        WordPress Specialist
                        <span className="ml-auto text-xs opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 text-pink-200">Expert</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Professional Summary */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-900/40 ring-1 ring-white/10 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-radial from-white/10 via-transparent to-transparent opacity-60"></div>
                  <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                    <span className="text-xl">⭐</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Journey</span>
                  </h3>
                  <div className="space-y-4 text-gray-200 leading-relaxed">
                    <div className="relative p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <p className="text-base font-medium">
                        I am a passionate <span className="text-purple-300 font-bold bg-purple-500/20 px-2 py-1 rounded">MERN stack developer</span> with a strong foundation in computer science and extensive experience in web development. My journey began with a BS in Computer Science from the National University of Management and Technology.
                      </p>
                    </div>
                    <div className="relative p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                      <p className="text-base font-medium">
                        With expertise in modern technologies like <span className="text-cyan-300 font-bold bg-cyan-500/20 px-2 py-1 rounded">React, Node.js, MongoDB, and Express.js</span>, I create dynamic and responsive web applications that deliver exceptional user experiences.
                      </p>
                    </div>
                    <div className="relative p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                      <p className="text-base font-medium">
                        My programming skills span across multiple languages including <span className="text-pink-300 font-bold bg-pink-500/20 px-2 py-1 rounded">JavaScript, TypeScript, Python, Java, and C++</span>, allowing me to tackle diverse development challenges with confidence.
                      </p>
                    </div>
                    <div className="relative p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                      <p className="text-base font-medium">
                        Beyond technical skills, I have hands-on experience in WordPress development, SEO optimization, and have successfully launched multiple projects including comprehensive web applications and blog platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Technical Skills with Advanced Effects */}
          <div className="relative group pb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-slate-700/90 to-slate-800/90 backdrop-blur-2xl rounded-3xl p-8 border border-purple-500/40 shadow-xl shadow-purple-500/10">
              
              {/* Floating Tech Icons */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-16 w-5 h-5 bg-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-8 right-24 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              
              <h3 className="text-3xl font-black text-white mb-8 text-center flex items-center justify-center gap-3">
                <FaCode className="text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  Technical Skills
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                </span>
              </h3>

            {/* Programming Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-xs" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Programming Languages</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative bg-gradient-to-br from-slate-600/70 to-slate-700/70 rounded-2xl p-4 text-center backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-500/40 hover:border-purple-500/60 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 group/skill">
                      <skill.icon style={{ color: skill.color }} size={32} className="mx-auto mb-2 group-hover/skill:scale-110 transition-transform duration-300" />
                      <h4 className="text-white font-bold text-xs mb-1">{skill.name}</h4>
                      <div className="w-full bg-slate-700/60 rounded-full h-1.5 mb-1 overflow-hidden">
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-1000 shadow-lg group-hover/skill:shadow-xl"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-300 text-xs font-bold group-hover/skill:text-purple-300 transition-colors duration-300">{skill.level}%</p>
                      
                      {/* Skill level indicator */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        {skill.level >= 90 ? (
                          <span className="text-xs text-green-400">Expert</span>
                        ) : skill.level >= 75 ? (
                          <span className="text-xs text-yellow-400">Advanced</span>
                        ) : (
                          <span className="text-xs text-blue-400">Intermediate</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Skills */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <FaCode className="text-white text-xs" />
                </div>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Development & Frameworks</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {(showAllSkills ? devSkills : devSkills.slice(0, 6)).map((skill) => (
                  <div key={skill.name} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative bg-gradient-to-br from-slate-600/70 to-slate-700/70 rounded-2xl p-4 text-center backdrop-blur-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-500/40 hover:border-cyan-500/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 group/skill">
                      <skill.icon style={{ color: skill.color }} size={32} className="mx-auto mb-2 group-hover/skill:scale-110 transition-transform duration-300" />
                      <h4 className="text-white font-bold text-xs mb-1">{skill.name}</h4>
                      <div className="w-full bg-slate-700/60 rounded-full h-1.5 mb-1 overflow-hidden">
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 shadow-lg group-hover/skill:shadow-xl"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-300 text-xs font-bold group-hover/skill:text-cyan-300 transition-colors duration-300">{skill.level}%</p>
                      
                      {/* Skill level indicator */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        {skill.level >= 90 ? (
                          <span className="text-xs text-green-400">Expert</span>
                        ) : skill.level >= 75 ? (
                          <span className="text-xs text-yellow-400">Advanced</span>
                        ) : (
                          <span className="text-xs text-blue-400">Intermediate</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Show More Button */}
              {devSkills.length > 6 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 hover:text-white rounded-xl font-bold border border-cyan-500/40 hover:border-cyan-500/80 transition-all duration-300 backdrop-blur-lg hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3">
                      {showAllSkills ? 'Show Less Skills' : 'Show More Skills'}
                      <FaCode size={14} className="group-hover:scale-110 transition-transform duration-300" />
                      <span className="ml-2 px-2 py-1 bg-cyan-500/30 rounded-lg text-xs">
                        {showAllSkills ? devSkills.length : `+${devSkills.length - 6}`}
                      </span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Education & Experience */}
          <div className="grid lg:grid-cols-2 gap-12 pt-8">

            {/* Education */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 border border-purple-500/30 shadow-2xl shadow-purple-900/40 ring-1 ring-white/10 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-radial from-white/10 via-transparent to-transparent opacity-60"></div>
                <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl">
                    <FaGraduationCap className="text-white text-lg" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
                </h3>
                <div className="space-y-4">
                  {/* BS Computer Science */}
                  <div className="relative group/item">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover/item:opacity-20 transition duration-300"></div>
                    <div className="relative flex items-start gap-4 p-4 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/15 backdrop-blur-lg">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover/item:scale-105 transition-transform duration-300">
                          <FaGraduationCap className="text-white text-base" />
                        </div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-white mb-1">BS Computer Science</h4>
                        <p className="text-purple-300 font-bold text-sm mb-2">National University Of Management and Technology</p>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded-lg text-xs font-bold border border-purple-500/50 backdrop-blur-sm">
                            2020-2024
                          </span>
                          <span className="px-2 py-1 bg-green-500/30 text-green-200 rounded-lg text-xs font-bold border border-green-500/50 backdrop-blur-sm">
                            ✅ Completed
                          </span>
                        </div>
                        <p className="text-gray-200 leading-relaxed text-xs font-medium">Specialized in software engineering and web development with focus on modern programming languages and frameworks</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Intermediate Pre-Medical */}
                  <div className="relative group/item">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover/item:opacity-20 transition duration-300"></div>
                    <div className="relative flex items-start gap-4 p-4 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/15 backdrop-blur-lg">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover/item:scale-105 transition-transform duration-300">
                          <FaGraduationCap className="text-white text-base" />
                        </div>
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-white mb-1">Intermediate Pre-Medical</h4>
                        <p className="text-purple-300 font-bold text-sm mb-2">Minhaj College</p>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded-lg text-xs font-bold border border-purple-500/50 backdrop-blur-sm">
                            2018-2020
                          </span>
                          <span className="px-2 py-1 bg-blue-500/30 text-blue-200 rounded-lg text-xs font-bold border border-blue-500/50 backdrop-blur-sm">
                            📚 Foundation
                          </span>
                        </div>
                        <p className="text-gray-200 leading-relaxed text-xs font-medium">Foundation in sciences before transitioning to computer science</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 border border-cyan-500/30 shadow-2xl shadow-cyan-900/40 ring-1 ring-white/10 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-radial from-white/10 via-transparent to-transparent opacity-60"></div>
                <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-xl">
                    <FaBriefcase className="text-white text-lg" />
                  </div>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
                </h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative group/item">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-10 group-hover/item:opacity-20 transition duration-300"></div>
                      <div className="relative flex items-start gap-4 p-4 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/15 backdrop-blur-lg">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover/item:scale-105 transition-transform duration-300">
                            <exp.icon className="text-white text-base" />
                          </div>
                          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black text-white mb-1">{exp.title}</h4>
                          <p className="text-cyan-300 font-bold text-sm mb-2">{exp.company}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 bg-cyan-500/30 text-cyan-200 rounded-lg text-xs font-bold border border-cyan-500/50 backdrop-blur-sm">
                              {exp.period}
                            </span>
                            <span className="px-2 py-1 bg-green-500/30 text-green-200 rounded-lg text-xs font-bold border border-green-500/50 backdrop-blur-sm">
                              💼 Professional
                            </span>
                          </div>
                          <p className="text-gray-200 leading-relaxed mb-3 text-xs font-medium">{exp.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-blue-500/30 text-blue-200 rounded-lg text-xs font-bold border border-blue-500/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;







