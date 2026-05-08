import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-white/10 selection:text-white font-sans antialiased">
      {/* Background Watermark */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] uppercase tracking-tighter">
          Dhruva
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A] bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-tighter text-white hover:opacity-70 transition-opacity"
          >
            DM.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  if (!link.path.includes('#')) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${isActive(link.path)
                    ? "text-white"
                    : "text-[#8A8A8A] hover:text-white"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`} />
              </Link>
            ))}
            <a
              href="https://github.com/Frizzova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-[#8A8A8A] hover:text-white transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-[#1A1A1A] p-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (!link.path.includes('#')) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`block text-2xl font-bold tracking-tight transition-colors ${isActive(link.path) ? "text-white" : "text-[#8A8A8A]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/Frizzova"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl font-bold tracking-tight text-[#8A8A8A]"
            >
              GitHub
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1A1A1A] mt-40 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-6 max-w-md">
              <h2 className="text-2xl font-bold tracking-tighter text-white">DHRUVA MEKALA</h2>
              <p className="text-[#8A8A8A] text-lg leading-relaxed">
                Software engineer focusing on technical complexity and architectural integrity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Social</p>
                <div className="flex flex-col gap-3">
                  <a href="https://github.com/Frizzova" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/dhruvamekala" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Contact</p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:dhruva.mekala@gmail.com" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Email</a>
                  <a href="tel:+917799047455" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Phone</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A8A8A] uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Dhruva Mekala</p>
            <p>Built with Code and Data</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
