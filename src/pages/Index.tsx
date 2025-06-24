
import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin, FileText, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
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
    <div className={`min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-medium text-gray-900 dark:text-white">Alex Chen</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 pt-20 pb-16">
        {/* About Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Synthesizing code and the cosmos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
              Computer Science and Physics student at Stony Brook University, exploring the intersection of software engineering and physical phenomena.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button size="sm" className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
          
          <p className="text-center text-gray-500 dark:text-gray-400">
            alex.chen@stonybrook.edu
          </p>
        </section>

        <Separator className="my-16" />

        {/* Experience Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                <div className="space-y-2 mb-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{exp.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{exp.dates}</p>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Projects Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">Projects</h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{project.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.summary}</p>
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
        </section>

        <Separator className="my-16" />

        {/* GitHub Activity Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">GitHub Activity</h3>
          <GitHubActivity />
        </section>

        <Separator className="my-16" />

        {/* Interests Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8">Interests</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <div className="text-2xl mb-2">{interest.icon}</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{interest.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
