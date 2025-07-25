import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCode, FaEye } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiWordpress } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
  image: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

const Projects = () => {
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

  const projects: Project[] = [
    {
      title: "Blog Website - guiprojects.com",
      description: "Developed and hosted a comprehensive blog website dedicated to programming tutorials and learning resources for students.",
      technologies: ["WordPress", "SEO", "Web Design"],
      category: "wordpress",
      link: "https://guiprojects.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      featured: true,
      status: 'completed'
    },
    {
      title: "Real-time Multiplayer Racing Game",
      description: "A full-stack real-time multiplayer racing game built with React and Node.js featuring real-time gameplay using Socket.io.",
      technologies: ["React", "Node.js", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/SanaArshad12",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      featured: true,
      status: 'completed'
    },
    {
      title: "Meeting Summarizer - AI-Powered Tool",
      description: "A comprehensive ASP.NET Core MVC application that leverages Google Cloud APIs to automatically transcribe and summarize meetings.",
      technologies: ["C#", "ASP.NET Core", "Bootstrap"],
      category: "fullstack",
      github: "https://github.com/SanaArshad12",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      featured: true,
      status: 'completed'
    },
    {
      title: "AnimaLux - Luxury Car Showcase",
      description: "An elegant and interactive luxury car showcase website featuring stunning animations and video backgrounds.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      link: "https://anima-lux-sanaarshad12s-projects.vercel.app/",
      github: "https://github.com/SanaArshad12/AnimaLux",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&h=300&fit=crop",
      status: 'completed'
    },
    {
      title: "TextTuneUp - AI Writing Assistant",
      description: "A comprehensive text processing web application offering grammar checking, plagiarism detection, and text rephrasing.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "frontend",
      github: "https://github.com/SanaArshad12",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop",
      status: 'completed'
    },
    {
      title: "Gemini AI Chat Application",
      description: "An intelligent chat application powered by Google's Gemini AI API built with React.",
      technologies: ["React", "JavaScript", "CSS3"],
      category: "frontend",
      link: "https://ai-chat-with-react-753i.vercel.app",
      github: "https://github.com/SanaArshad12",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      status: 'completed'
    },
    {
      title: "GSAP Sports Demo",
      description: "An immersive sports website showcasing advanced GSAP animations and smooth scrolling effects.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      github: "https://github.com/SanaArshad12",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&h=300&fit=crop",
      status: 'completed'
    },
    {
      title: "Login-Register Swap Interface",
      description: "A modern authentication interface featuring smooth transitions between login and registration forms.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      github: "https://github.com/SanaArshad12",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop",
      status: 'completed'
    }
  ];

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      'React': SiReact,
      'Node.js': SiNodedotjs,
      'JavaScript': SiJavascript,
      'HTML5': SiHtml5,
      'CSS3': SiCss3,
      'Bootstrap': SiBootstrap,
      'WordPress': SiWordpress
    };
    return iconMap[tech] || FaCode;
  };

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my diverse portfolio of web development projects. Visit{' '}
            <a 
              href="https://guiprojects.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              guiprojects.com
            </a>
            {' '}for more projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Show 3 on mobile, 6 on desktop */}
          {(showAll 
            ? projects 
            : projects.slice(0, isMobile ? 3 : 6)
          ).map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <span
                        key={techIndex}
                        className="flex items-center gap-1 px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs"
                      >
                        <TechIcon size={12} />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub size={12} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button - Responsive */}
        {((isMobile && projects.length > 3) || (!isMobile && projects.length > 6)) && (
          <div className="flex justify-center md:justify-end mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-medium border border-gray-600/50 hover:border-purple-500/50 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 backdrop-blur-sm"
            >
              <span>{showAll ? 'Show Less' : `Show ${projects.length - (isMobile ? 3 : 6)} More`}</span>
              <FaEye size={12} className="group-hover:scale-110 transition-transform opacity-70" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
