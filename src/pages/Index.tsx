import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, FolderGit2, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import GitHubActivity from "@/components/GitHubActivity";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "agentic AI",
      company: "NeuralSeek",
      location: "Remote",
      dates: "jun 2025 - present",
      achievements: [
        "developed internal and client-facing demos of an abstract document-based AI agent",
        "collaborated with engineers to improve performance of web-based demo page"
      ],
      technologies: ["nextjs", "typescript", "agentic ai", "api dev", "web dev"],
      image: "/neuralseek.jpeg"
    },
    {
      title: "conversational AI",
      company: "Get Talky",
      location: "Remote",
      dates: "jun 2025 - present",
      achievements: [
        "built advanced JavaScript APIs interfacing with NexHealth for synchronization with EHR systems",
      ],
      technologies: ["javascript", "node.js", "api dev"],
      image: "/gettalky.jpeg"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "quantum amplitude estimation",
      summary: "quantum computing algorithm",
      image: "/amplitude-est.png",
      technologies: ["python", "jupyter", "quantum computing", "linear algebra", "physics"],
      description: "implemented an algorithm to estimate a basis amplitude for a quantum state",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      id: 2,
      title: "Smart Campus Navigator",
      summary: "An AI-powered mobile app for campus navigation and resource discovery.",
      image: "/amplitude-est.png",
      technologies: ["React Native", "Firebase", "Python", "TensorFlow"],
      description: "A mobile application that uses computer vision and machine learning to help students navigate campus, find available study spaces, and locate resources in real-time.",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      id: 3,
      title: "Distributed Ray Tracer",
      summary: "A parallelized ray tracing engine for photorealistic 3D rendering.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["C++", "OpenMPI", "GLSL", "CMake"],
      description: "A distributed ray tracing system that leverages multiple cores and machines to render complex 3D scenes with realistic lighting, shadows, and reflections.",
      liveDemo: "#",
      sourceCode: "#"
    }
  ];

  const interests = [
    { name: "3D Printing", icon: "🖨️" },
    { name: "Amateur Astronomy", icon: "🔭" },
    { name: "Reading Sci-Fi", icon: "📚" },
    { name: "Hiking", icon: "🥾" },
    { name: "Coffee Brewing", icon: "☕" },
    { name: "Electronic Music", icon: "🎵" },
    { name: "Photography", icon: "📸" },
    { name: "Chess", icon: "♟️" }
  ];

  const wipProjects = [
    {
      title: "quantum circuit simulator in C",
      company: "personal project",
      dates: "may 2025 - present",
      achievements: [
        "building a simple quantum circuit simulator in pure C",
        "implenting multi-qubit gates and implementing quantum algorithms",
        "exploring future optimizations for simulation, including sparse matrix representation and qubit reordering"
      ],
      technologies: ["c", "make", "quantum computing", "linear algebra", "physics"],
      githubUrl: "https://github.com/leonrode/qsim"
    },
    {
      title: "web proxy in C",
      company: "personal project",
      dates: "jun 2025 - present",
      achievements: [
        "building a simple web proxy in C",
        "fowards HTTP GETs to a web server and caches returned objects in files",
        "application of sockets, DNS, HTTP, file IO",
      ],
      technologies: ["c", "make", "networking", "c sockets"],
      githubUrl: "https://github.com/leonrode/web-proxy"
    }
  ];

  return (
    <div className="min-h-screen bg-[--background] ">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[--background] backdrop-blur-sm border-b border-[--border]">
        <div className="w-screen md:max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            <img
                  src="/headshot.jpg"
                  alt="Leon Rode"
                  className={`h-12 object-cover shadow-md shadow-[--border] rounded-full transition-all duration-300 ${isScrolled ? 'opacity-100 w-12 visible' : 'opacity-0 w-0 invisible'}`}
                />
            <h1 className="text-xl font-medium text-white">leon rode</h1>
            <Button 
                variant="ghost"
                size="sm" 
                className={`bg-transparent hover:bg-[--muted] backdrop-blur-sm border text-[--primary] transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <a href="https://github.com/leonrode" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
            </Button>
            <Button 
                variant="ghost"
                size="sm"
                className={`bg-transparent hover:bg-[--muted] backdrop-blur-sm border text-[--primary] transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <a href="https://www.linkedin.com/in/leon-rode/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
            </Button>
          </div>
          {/* Scroll to top button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
              className={`bg-transparent hover:bg-[--muted] backdrop-blur-sm border text-[--primary] transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </header>


      {/* Main content */}
      <main className="w-screen md:max-w-3xl mx-auto px-6 pt-20 pb-16">
        {/* About Section */}
        <section className="pt-16 pb-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="/headshot.jpg"
                alt="Leon Rode"
                className="w-full h-full object-cover shadow-md shadow-[--border] hover:shadow-lg hover:shadow-[--border] transition-all duration-300 rounded-full"
              />
            </div>
            <h2 className="text-2xl font-light text-white mb-4">
              leon rode '28
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
             cs & physics @ stony brook honors college
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
              <a className="flex items-center" href="#projects" >
                <FolderGit2 className="mr-2 h-4 w-4" />
                Projects
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <a className="flex items-center" href="https://github.com/leonrode" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub  
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <a className="flex items-center" href="https://www.linkedin.com/in/leon-rode/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <p className="text-center text-[--muted-foreground]">
            me [at] leonro.de
          </p>
        </section>

        <Separator className="my-16" />

        {/* Currently working on */}
        <section className="py-8" id="projects">
          <h3 className="text-2xl font-medium text-[--primary] mb-8">currently working on</h3>
          <div className="space-y-8">
            {wipProjects.map((proj, index) => (
              <div className="flex items-start gap-4" key={index}>
                <div className="border-l-2 border-[--border] pl-6">
                  <div className="space-y-2 mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-white">{proj.title}</h4>
                      <p className="text-gray-400">{proj.company}</p>
                    </div>
                    <p className="text-sm text-gray-500">{proj.dates}</p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {proj.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  {proj.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {proj.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* GitHub Activity Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-[--primary] mb-8">activity</h3>
          <GitHubActivity />
        </section>

        <Separator className="my-16" />

        {/* Experience Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-white mb-8">work experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div className="flex items-start gap-4">
                <img src={exp.image} alt={exp.company} className="w-16 h-16 object-cover rounded-lg" />
                <div key={index} className="border-l-2 border-gray-700 pl-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <h4 className="text-lg font-medium text-white">{exp.title}</h4>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{exp.dates}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Projects Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-white mb-8">projects</h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-white mb-2">{project.title}</h4>
                          <p className="text-gray-400 text-sm mb-3">{project.summary}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Description</h4>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                          <Code2 className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Interests Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-white mb-8">Interests</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border border-gray-700 hover:bg-gray-900 transition-colors"
              >
                <div className="text-2xl mb-2">{interest.icon}</div>
                <p className="text-sm text-gray-300">{interest.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
