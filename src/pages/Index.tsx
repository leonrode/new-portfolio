import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin, FileText, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import GitHubActivity from "@/components/GitHubActivity";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const experiences = [
    {
      title: "Research Assistant",
      company: "Computational Physics Lab",
      location: "Stony Brook University",
      dates: "Sep 2023 - Present",
      achievements: [
        "Developed Monte Carlo simulations for quantum systems using Python and NumPy",
        "Optimized algorithms resulting in 40% faster computation times",
        "Collaborated with PhD students on theoretical physics research"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "TechStart Inc.",
      location: "New York, NY",
      dates: "Jun 2023 - Aug 2023",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Implemented RESTful APIs with Node.js and Express",
        "Contributed to reducing page load times by 25%"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Computer Science Department",
      location: "Stony Brook University",
      dates: "Jan 2023 - May 2023",
      achievements: [
        "Assisted 200+ students in Data Structures and Algorithms course",
        "Conducted weekly lab sessions and office hours",
        "Developed automated grading scripts using Python"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Quantum Simulator",
      summary: "A high-performance quantum circuit simulator built with C++ and CUDA.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      technologies: ["C++", "CUDA", "Python", "OpenMP"],
      description: "A comprehensive quantum circuit simulator capable of simulating up to 20 qubits with GPU acceleration. The project implements various quantum gates and algorithms including Shor's algorithm and Grover's search.",
      role: "Lead Developer",
      challenges: "Optimizing memory usage for large quantum states and implementing efficient GPU kernels for quantum gate operations.",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      id: 2,
      title: "Smart Campus Navigator",
      summary: "An AI-powered mobile app for campus navigation and resource discovery.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Python", "TensorFlow"],
      description: "A mobile application that uses computer vision and machine learning to help students navigate campus, find available study spaces, and locate resources in real-time.",
      role: "Full-Stack Developer",
      challenges: "Integrating real-time location services with computer vision for indoor navigation and optimizing the ML model for mobile devices.",
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
      role: "Graphics Programmer",
      challenges: "Implementing efficient load balancing across distributed nodes and optimizing ray-object intersection algorithms.",
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-xl text-gray-900 dark:text-white">
              Alex Chen
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
                <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
                <a href="#activity" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Activity</a>
                <a href="#interests" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Interests</a>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Synthesizing code and the cosmos
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Computer Science and Physics student at Stony Brook University, exploring the intersection of software engineering and physical phenomena. I love building elegant solutions to complex problems, from scalable web applications to computational simulations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-gray-300 dark:border-gray-600">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full -z-10 opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-gray-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="ml-16 space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.dates}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
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
                      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">My Role</h4>
                      <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Challenges & Solutions</h4>
                      <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
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
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="activity" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">GitHub Activity</h2>
          <GitHubActivity />
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <p className="text-center font-medium text-gray-900 dark:text-white">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-6">Let's build something amazing together</p>
          <p className="text-gray-400 mb-8">alex.chen@stonybrook.edu</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
