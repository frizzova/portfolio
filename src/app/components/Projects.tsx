import { Github, ExternalLink, ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router";

export default function Projects() {
  const projects = [
    {
      title: "AI Narrative Engine",
      description: "A deep learning model that generates high-converting marketing copy based on user sentiment analysis and brand voice guidelines.",
      tech: ["Python", "PyTorch", "OpenAI API", "React"],
      github: "https://github.com",
      link: "https://example.com",
    },
    {
      title: "SEO Analytics Dashboard",
      description: "Real-time tracking of keyword performance and technical SEO health with automated insight generation using machine learning.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      link: "https://example.com",
    },
    {
      title: "Intelligent CMS",
      description: "A content management system that automatically optimizes article structure and metadata for search engines while you write.",
      tech: ["Next.js", "GPT-4", "Supabase", "Lucide"],
      github: "https://github.com",
      link: "https://example.com",
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting platform leveraging blockchain technology to ensure vote integrity and anonymity.",
      tech: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "https://github.com",
      link: "https://example.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-24 pb-40">
      {/* Header */}
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase">
          Projects.
        </h1>
        <p className="text-xl text-[#8A8A8A] leading-relaxed pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          A curated collection of digital experiences focusing on AI, system architecture, and product-driven development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/5 rounded-xl border border-[#1A1A1A]">
                    <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#8A8A8A] hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#8A8A8A] hover:text-white transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-[#F5F5F5] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8A8A8A] text-lg leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[#111111] border border-[#1A1A1A] text-[#8A8A8A] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-10">
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="py-24 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          Have a vision? <br />
          <span className="text-[#8A8A8A]">Let's realize it.</span>
        </h2>
        <Link
          to="/#contact"
          className="group flex items-center gap-4 px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:bg-[#F5F5F5] transition-all duration-300 shadow-xl"
        >
          Get In Touch
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
