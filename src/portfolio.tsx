import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techStack = [
    { name: 'Java', category: 'Backend', proficiency: 95 },
    { name: 'Python', category: 'AI/ML', proficiency: 90 },
    { name: 'Spring Boot', category: 'Framework', proficiency: 88 },
    { name: 'TensorFlow', category: 'AI/ML', proficiency: 85 },
    { name: 'MySQL', category: 'Database', proficiency: 82 },
    { name: 'MediaPipe', category: 'Computer Vision', proficiency: 80 },
    { name: 'OpenCV', category: 'Computer Vision', proficiency: 78 },
    { name: 'FastAPI', category: 'Framework', proficiency: 85 }
  ];

  const projects = [
    {
      id: '01',
      title: 'ParaTrace-AI',
      subtitle: 'AI-Powered Content Integrity Suite',
      description: 'Full-stack AI platform featuring plagiarism detection, AI-generated content identification, and intelligent paraphrasing with real-time source discovery.',
      tech: ['Java Spring Boot', 'Python Flask', 'MySQL', 'JWT', 'Google APIs'],
      github: 'https://github.com/Arpansharma7/ParaTrace-Ai',
      status: 'Production',
      year: '2024',
      featured: true
    },
    {
      id: '02',
      title: 'Gesture-Driven 3D',
      subtitle: 'Real-time Hand Tracking System',
      description: 'Advanced computer vision system enabling intuitive 3D object manipulation in Blender through gesture recognition and pose detection.',
      tech: ['Python', 'MediaPipe', 'Blender API', 'OpenCV'],
      github: 'https://github.com/Arpansharma7/Gesture-Driven-3D-Object-Interaction-Using-Hand-Tracking-and-Rigid-Body-Simulations',
      status: 'Complete',
      year: '2024',
      featured: true
    },
    {
      id: '03',
      title: 'Smart Timetable',
      subtitle: 'Intelligent Academic Scheduler',
      description: 'Algorithm-driven scheduling system optimizing course allocation and resource management for educational institutions.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Algorithms'],
      github: 'https://github.com/Arpansharma7/TimeTable_management_system',
      status: 'Development',
      year: '2024',
      featured: false
    }
  ];

  const Cursor = () => {
    return (
      <div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80"></div>
      </div>
    );
  };

  const Navigation = () => (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-light tracking-tight text-white">
            ARPAN<span className="text-white/40">SHARMA</span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {['Work', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/60 hover:text-white transition-all duration-500 text-sm tracking-wide uppercase font-light relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://github.com/Arpansharma7" className="text-white/60 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/arpan-sharma-b2a353272/" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-6 py-8 space-y-6">
            {['Work', 'About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/60 hover:text-white transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: '10%',
            top: '20%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            right: '10%',
            bottom: '20%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
          }}
        />
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/60 text-sm font-light">Available for opportunities</span>
            </div>

            <h1 className="text-7xl lg:text-9xl font-light tracking-tight text-white leading-none">
              AI/ML
              <br />
              <span className="text-white/40">ENGINEER</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Building intelligent backend systems that transform data into actionable insights.
              Specializing in machine learning, computer vision, and scalable architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://www.linkedin.com/in/arpan-sharma-b2a353272/overlay/1752950023235/single-media-viewer/?profileId=ACoAAEKdc5IBrs_IZCMky-6r7g3nG1P2woIHiLM"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/90 flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View Resume
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#work"
              className="group border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-24 animate-bounce">
          <ChevronDown size={24} className="text-white/40 mx-auto" />
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section id="work" className="py-32 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Selected<br />
            <span className="text-white/40">Work</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl">
            A collection of projects showcasing expertise in AI/ML, backend development, and innovative problem-solving.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 text-sm font-light">{project.id}</span>
                        <span className="text-white/40 text-sm font-light">{project.year}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'Complete' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-orange-500/20 text-orange-400'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-light text-white group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xl text-white/60 font-light">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
                    {project.description}
                  </p>

                </div>
                <div className="lg:col-span-5 flex flex-wrap gap-3 justify-center items-center">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white/80 text-lg font-medium mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="lg:col-span-5 flex justify-start mt-2">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors font-light px-5 py-2 rounded-full bg-white/5 border border-white/10 text-base"
                  >
                    <Github size={16} />
                    View Code
                    <ArrowUpRight size={13} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <a
            href="https://github.com/Arpansharma7"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-light text-lg"
          >
            <Github size={20} />
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className="py-32 px-6 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
                About<br />
                <span className="text-white/40">Me</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
              <p>
                I'm a Computer Science student specializing in AI & Machine Learning at Graphic Era Hill University,
                passionate about creating intelligent systems that bridge the gap between complex algorithms and real-world applications.
              </p>

              <p>
                My expertise spans across backend development with Java Spring Boot, AI/ML implementations with Python,
                and computer vision applications. I'm particularly fascinated by how machine learning can transform
                traditional software development paradigms.
              </p>

              <p>
                Currently focused on building production-ready AI solutions, from plagiarism detection systems to
                gesture-controlled 3D environments. I believe in the power of clean code, scalable architectures,
                and intelligent automation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white">Education</h3>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium">B.Tech Computer Science (AI & ML)</h4>
                      <p className="text-white/60 font-light">Graphic Era Hill University</p>
                    </div>
                    <span className="text-white/40 text-sm">2023-2027</span>
                  </div>
                  <p className="text-white/60 font-light text-sm">
                    Specializing in Machine Learning, Deep Learning, Computer Vision, and Backend Systems
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white">Location</h3>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white/60 font-light">Dehradun, India</p>
                <p className="text-white/40 font-light text-sm mt-2">UTC +5:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Skills &<br />
            <span className="text-white/40">Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {techStack.map((skill) => (
            <div
              key={skill.name}
              className="group relative"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-white/40 font-light text-sm">{skill.category}</p>
                </div>
                <span className="text-white/60 font-light">{skill.proficiency}%</span>
              </div>

              <div className="relative h-px bg-white/10 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-white to-white/60 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
            <Brain className="mb-6 text-white" size={32} />
            <h3 className="text-xl font-light text-white mb-4">AI & Machine Learning</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Deep learning, computer vision, NLP, and intelligent system design with TensorFlow and MediaPipe.
            </p>
          </div>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
            <Code className="mb-6 text-white" size={32} />
            <h3 className="text-xl font-light text-white mb-4">Backend Development</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Scalable microservices, REST APIs, and robust system architectures using Java Spring Boot.
            </p>
          </div>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
            <Database className="mb-6 text-white" size={32} />
            <h3 className="text-xl font-light text-white mb-4">Data & Security</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Database optimization, JWT authentication, and secure data processing pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const CertificationSection = () => (
    <section id="certifications" className="py-32 px-6 lg:px-12 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-light text-white mb-12 tracking-tight text-center">
          Certifications
        </h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="h-10 mb-4" style={{ filter: 'invert(1)' }} />
            <span className="text-white/60 text-sm font-light mb-2">IBM</span>
            <span className="text-white/40 text-xs">April 7, 2025</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-2">Building Generative AI-Powered Applications with Python</h3>
            <p className="text-white/60 font-light mb-4">Coursera Certificate • Completed by Arpan Sharma</p>
            <a
              href="https://www.coursera.org/account/accomplishments/verify/X26GITC86AO5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all border border-white/10"
            >
              View Certificate
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => {
    return (
      <section id="contact" className="py-32 px-6 lg:px-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
                  Let's<br />
                  <span className="text-white/40">Connect</span>
                </h2>
                <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                  I'm always open to discussing new opportunities, innovative projects,
                  or simply having a conversation about the future of AI and technology.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-white font-light text-lg">Get in touch</h3>
                  <div className="space-y-3">
                    <a href="mailto:arpansharmauk07@gmail.com" className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                      <Mail size={18} />
                      <span className="font-light">arpansharmauk07@gmail.com</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href="https://github.com/Arpansharma7" className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                      <Github size={18} />
                      <span className="font-light">github.com/Arpansharma7</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/arpan-sharma-b2a353272/" className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                      <Linkedin size={18} />
                      <span className="font-light">linkedin.com/in/arpan-sharma-b2a353272</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Message/contact form removed as per user request */}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <Cursor />
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <CertificationSection />
      <ContactSection />
      <footer className="bg-black border-t border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p className="text-white/40 font-light">© 2025 Arpan Sharma</p>
              <p className="text-white/20 font-light text-sm">Crafted with precision in Dehradun, India</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Arpansharma7" className="text-white/40 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/arpan-sharma-b2a353272/" className="text-white/40 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:arpansharmauk07@gmail.com" className="text-white/40 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
