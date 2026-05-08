import { Mail, Phone, Code2, ArrowRight, Github, Briefcase, Linkedin, MapPin } from "lucide-react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const skills = [
    "Python",
    "Machine Learning",
    "Neural Networks",
    "Data Structures",
    "System Design",
    "React",
    "TypeScript",
    "PostgreSQL",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-40 pb-40">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center py-20 relative overflow-hidden">
        <div className="space-y-12 max-w-7xl">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase">
              Dhruva <br />
              <span className="text-[#8A8A8A]">Mekala.</span>
            </h1>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <span className="text-lg md:text-xl font-bold tracking-[0.15em] uppercase text-white">
                Computer Science Undergraduate
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-12 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
            <Link
              to="/projects"
              className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-[#F5F5F5] transition-all duration-300 shadow-xl"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#contact"
              className="px-10 py-5 border border-[#1A1A1A] text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Bar */}
      <section className="py-12 border-y border-[#1A1A1A]">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 overflow-hidden">
          {skills.map((skill) => (
            <span key={skill} className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8 lg:sticky lg:top-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Driven by curiosity, <br />
            <span className="text-[#8A8A8A]">guided by tech.</span>
          </h2>
          <div className="w-20 h-1.5 bg-white" />
        </div>
        <div className="space-y-10 text-xl text-[#8A8A8A] leading-relaxed max-w-2xl">
          <p>
            I'm Dhruva Mekala, a Computer Science undergraduate focused on the architecture of intelligent systems. I specialize in bridging the gap between theoretical machine learning and practical, scalable software.
          </p>
          <p>
            My work revolves around building robust digital systems with a focus on performance, reliability, and technical complexity. I believe in engineering that prioritizes clean code and architectural integrity.
          </p>

          <div className="pt-10 grid grid-cols-2 gap-12">
            <div>
              <p className="text-white font-bold text-4xl tracking-tighter">B.Tech</p>
              <p className="text-sm font-bold uppercase tracking-widest pt-3 text-[#8A8A8A]">Computer Science</p>
            </div>
            <div>
              <p className="text-white font-bold text-4xl tracking-tighter">AI/ML</p>
              <p className="text-sm font-bold uppercase tracking-widest pt-3 text-[#8A8A8A]">Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Functional Contact Section */}
      <section id="contact" className="py-24 border-t border-[#1A1A1A] scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Get in touch.</h2>
              <p className="text-xl text-[#8A8A8A] max-w-md leading-relaxed">
                Open for technical collaborations, engineering opportunities, or architectural discussions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <a
              href="mailto:dhruva.mekala@gmail.com"
              className="flex flex-col md:flex-row md:items-center justify-between p-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Send an Email</p>
                  <p className="text-xl md:text-2xl font-bold tracking-tight break-all">dhruva.mekala@gmail.com</p>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://github.com/Frizzova"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <div className="flex items-center gap-6">
                  <Github className="w-8 h-8" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">GitHub</p>
                    <p className="text-lg font-bold tracking-tight">Frizzova</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/dhruvamekala"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <div className="flex items-center gap-6">
                  <Linkedin className="w-8 h-8" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">LinkedIn</p>
                    <p className="text-lg font-bold tracking-tight">Dhruva Mekala</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            </div>

            <a
              href="tel:+917799047455"
              className="flex items-center justify-between p-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Call Me</p>
                  <p className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">+91 7799047455</p>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
