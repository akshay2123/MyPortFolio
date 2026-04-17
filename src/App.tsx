import { useState } from "react";
import { Menu, X } from "lucide-react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import "./App.css";
import "./index.css";
import HeroSection from "./sections/HeroSection";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Akshay Kale
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "about",
              "skills",
              "experience",
              "projects",
              "education",
              "contact",
            ].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-cyan-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4">
            {[
              "about",
              "skills",
              "experience",
              "projects",
              "education",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left hover:text-cyan-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Portfolio Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-center text-slate-400">
        <p>© 2025 Akshay Kale. All rights reserved.</p>
      </footer>
    </div>
  );
}
