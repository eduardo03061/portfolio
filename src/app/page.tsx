"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Code, Github, Mail, Menu, Moon, Sun } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-background w-full ${isDarkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">DevPortfolio</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="#about" className="text-lg font-medium hover:underline underline-offset-4">
                    About
                  </Link>
                  <Link href="#skills" className="text-lg font-medium hover:underline underline-offset-4">
                    Skills
                  </Link>
                  <Link href="#projects" className="text-lg font-medium hover:underline underline-offset-4">
                    Projects
                  </Link>
                  <Link href="#contact" className="text-lg font-medium hover:underline underline-offset-4">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto py-10 md:py-16">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Full-Stack Web Developer</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            I build modern, responsive web applications with cutting-edge technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </section>
 
        <section id="about" className="py-12 md:py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/next.svg"
                width={400}
                height={400}
                alt="Developer Portrait"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                Hello! I&apos;m a passionate web developer with expertise in building modern web applications. I specialize
                in both frontend and backend development, creating seamless user experiences with clean, efficient code.
              </p>
              <p className="text-lg">
                With several years of experience in the industry, I&apos;ve worked on a variety of projects from e-commerce
                platforms to complex web applications. I&apos;m constantly learning and adapting to new technologies to
                deliver the best solutions.
              </p>
              <p className="text-lg">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools & Others</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Vue.js",
                  "Tailwind CSS",
                  "SASS",
                  "Redux",
                ].map((skill) => (
                  <div key={skill} className="bg-muted rounded-lg p-4 text-center">
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="backend" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  "Node.js",
                  "Express",
                  "Python",
                  "Django",
                  "PHP",
                  "Laravel",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "GraphQL",
                ].map((skill) => (
                  <div key={skill} className="bg-muted rounded-lg p-4 text-center">
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {["Git", "GitHub", "Docker", "AWS", "Firebase", "Vercel", "Figma", "Jest", "Webpack", "CI/CD"].map(
                  (skill) => (
                    <div key={skill} className="bg-muted rounded-lg p-4 text-center">
                      <p className="font-medium">{skill}</p>
                    </div>
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={project.image || "/next.svg"}
                  width={500}
                  height={300}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-muted text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I&apos;m currently available for freelance work and open to new opportunities. If you have a project that
                needs my expertise or if you want to discuss potential collaborations, feel free to reach out!
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:eduardoalejandrohg@gmail.com" className="text-primary hover:underline">
                  eduardoalejandrohg@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/eduardo03061" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                {/* Add more social links as needed */}
              </div>
            </div>
            <div className="space-y-4">
  <p className="text-lg">
    If you want to talk to me, you can send me a message through WhatsApp.
  </p>
  <div className="flex items-center gap-2">
    <Mail className="h-5 w-5" />
    <a href="https://wa.me/523121978224" className="text-primary hover:underline">
      Send a message
    </a>
  </div>
</div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-medium">DevPortfolio</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Sample project data
const projects = [
  {
    title: "POS Sistem",
    description: "A full system for managing sales, inventory, and customer data",
    image: "/vendepunto-logo.png",
    technologies: ["Next.js", "ReactJs", "TypeScript", "Laravel", "MYSQL"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://vendepunto.com",
  },
  {
    title: "E-Commerce site",
    description: "A collaborative task manager with real-time updates and team features",
    image: "/albercasvergara.png",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://albercasyagua.com",
    demo: "https://albercasyagua.com",
  },
  {
    title: "Logabols",
    description: "A weather application with location-based forecasts and interactive maps",
    image: "/logabols.png",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "SCSS"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://logabols.com.mx",
  }
]
