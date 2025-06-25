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
      image: "/logos/neuralseek.jpeg"
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
      image: "/logos/gettalky.jpeg"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "quantum amplitude estimation",
      summary: "quantum algorithm implementation",
      image: "/projects/amplitude-est.png",
      technologies: ["python", "jupyter", "quantum computing", "qiskit", "linear algebra", "physics"],
      description: "implemented an algorithm to estimate a basis amplitude for a quantum state",
      buttons: [
        { label: "view notebook", url: "https://github.com/leonrode/qindia-qa101-final-project/blob/main/QA101Final.ipynb", icon: "ExternalLink" }
      ]
    },
    {
      id: 2,
      title: "quantum double slit experiment",
      summary: "double slit experiment simulation",
      image: "/projects/double-slit.png",
      technologies: ["python", "quantum computing", "qiskit", "latex", "linear algebra", "physics"],
      description: "simulated a double slit experiment on a quantum computer and mathematically verified results. wrote an informal paper on the topic.",
      buttons: [
        { label: "view paper", url: "https://github.com/leonrode/quantum-double-slit-experiment/blob/main/Leon%20Rode%20-%20Double%20Slit%20Experiment%20Using%20a%20Quantum%20Computer.pdf", icon: "ExternalLink" }
      ]
    },
    {
      id: 3,
      title: "LAVCA AI for patria investments",
      summary: "AI chatbot for investment research",
      image: "/projects/patria.png",
      technologies: ["vite", "tailwind", "recharts", "full stack"],
      description: "developed an LLM-based platform for Patria Investments for the analysis of the LAVCA dataset",
      buttons: [
        { label: "view demo", url: "https://patria-project.vercel.app/", icon: "ExternalLink" }
      ]
    },
    {
      id: 4,
      title: "westchester covid-19 tracker",
      summary: "local covid-19 case tracker + statistics",
      image: "/projects/westchester.png",
      technologies: ["nextjs", "tailwind", "aws lambda", "mongodb", "full stack"],
      description: "built website as community service project to visualize covid-19 trends in westchester county, new york. the site collected data between november 2020 and december 2022, collecting case data for each town within the county on a daily basis, storing them in mongodb. the site was hosted on vercel and used aws lambda to fetch data from the new york state.",
      buttons: [
        { label: "view website", url: "https://westchestercovidtracker-com.vercel.app/", icon: "ExternalLink" },
        { label: "view source", url: "https://github.com/leonrode/westchestercovidtracker.com", icon: "Code2" }
      ]
    },
    {
      id: 5,
      title: "disturb the noize",
      summary: "global social platform for musicians",
      image: "/projects/dtn.png",
      technologies: ["nextjs", "tailwind", "mongodb"],
      description: "developed and managed global social platform to connect up-and-coming musicians and producers.",
      buttons: [
        { label: "view website", url: "https://disturbthenoize.com/", icon: "ExternalLink" },
      ]
    },
    {
      id: 6,
      title: "electric field visualizer",
      summary: "mini project to compute and draw electric field lines",
      image: "/projects/efield.png",
      technologies: ["p5js", "javascript", "physics", ],
      description: "built a mini project to compute and draw electric field lines based on a number of charges in a plane",
      buttons: [
        { label: "view demo", url: "https://leonrode.github.io/electric-field-visualizer/", icon: "ExternalLink" },
        { label: "view source", url: "https://github.com/leonrode/electric-field-visualizer", icon: "Code2" }
      ]
    },
    {
      id: 7,
      title: "better joystick",
      summary: "joystick interface arduino library",
      image: "/projects/joystick.png",
      technologies: ["c++", "arduino"],
      description: "built a small Arduino library to interface dual-axis joysticks for Arduino boards",
      buttons: [
        { label: "view library", url: "https://docs.arduino.cc/libraries/better-joystick/", icon: "ExternalLink" },
        { label: "view source", url: "https://github.com/leonrode/better-joystick", icon: "Code2" }
      ]
    }
  ];

  const currentlyReading = [
    {
      title: "A History of the Internet and the Digital Future",
      author: "Johnny Ryan",
      cover: "/books/internet-history.jpg",
      thoughts: "fascinating exploration of the history of the internet and the digital future. the book is a great timeline of how the decentralized internet came to be, how packet-switched networks grew to dominate the internet, and how inter-network protocols were created and documented in RFCs."
    },
  ];

  const toRead = [
    {
      title: "The Organization Man",
      author: "William H. Whyte",
      cover: "/books/organization-man.jpg",
      thoughts: "thorough description of the impact of mass organization on American society."
    },
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
             cs & physics @ stony brook university honors college
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
          <h3 className="text-2xl font-medium text-[--primary] mb-8">🚧 currently working on</h3>
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
          <h3 className="text-2xl font-medium text-[--primary] mb-8">📊 activity</h3>
          <GitHubActivity />
        </section>

        <Separator className="my-16" />

        {/* Experience Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-white mb-8">💼 work experience</h3>
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
          <h3 className="text-2xl font-medium text-white mb-8">🛠️ projects</h3>
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
                      className="w-full h-64 object-cover object-top-left rounded-lg"
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
                      {project.buttons.map((button, index) => {
                        const IconComponent = button.icon === "ExternalLink" ? ExternalLink : Code2;
                        return (
                          <Button 
                            key={index} 
                            variant={index === 0 ? "default" : "outline"}
                            className={index === 0 ? "bg-[--foreground] text-[--background] hover:bg-[--muted]" : ""}
                            asChild
                          >
                            <a href={button.url} target="_blank" rel="noopener noreferrer">
                              <IconComponent className="h-4 w-4" />
                              {button.label}
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Reading List Section */}
        <section className="py-8">
          <h3 className="text-2xl font-medium text-white mb-8">📚 reading list</h3>
          
          {/* Currently Reading */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-[--primary] mb-4">currently reading</h4>
            <div className="space-y-4">
              {currentlyReading.map((book, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-[--border] hover:bg-[--card] transition-colors">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-16 h-24 object-cover rounded shadow-md"
                  />
                  <div className="flex-1">
                    <h5 className="text-lg font-medium text-[--primary] mb-1">{book.title}</h5>
                    <p className="text-[--muted-foreground] text-sm mb-3">by {book.author}</p>
                    <p className="text-[--secondary-foreground] text-sm leading-relaxed">{book.thoughts}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* To Read */}
          <div>
            <h4 className="text-lg font-medium text-[--primary] mb-4">to read</h4>
            <div className="space-y-4">
              {toRead.map((book, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border border-[--border] hover:bg-[--card] transition-colors">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-16 h-24 object-cover rounded shadow-md"
                  />
                  <div className="flex-1">
                    <h5 className="text-lg font-medium text-[--primary] mb-1">{book.title}</h5>
                    <p className="text-[--muted-foreground] text-sm mb-3">by {book.author}</p>
                    <p className="text-[--secondary-foreground] text-sm leading-relaxed">{book.thoughts}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
