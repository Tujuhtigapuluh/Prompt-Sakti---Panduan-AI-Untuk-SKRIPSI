import { useState, useEffect, useMemo } from "react";
import { sections } from "./data/prompts";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowToUse from "./components/HowToUse";
import SectionPanel from "./components/SectionPanel";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Filter sections based on search
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections
      .map((section) => ({
        ...section,
        prompts: section.prompts.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.prompt.toLowerCase().includes(q) ||
            (p.tips && p.tips.toLowerCase().includes(q))
        ),
      }))
      .filter((section) => section.prompts.length > 0);
  }, [searchQuery]);

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalFilteredPrompts = filteredSections.reduce(
    (acc, s) => acc + s.prompts.length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Header */}
      <Header
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
          {/* Hero */}
          {!searchQuery && <HeroSection />}

          {/* How to Use */}
          {!searchQuery && <HowToUse />}

          {/* Search results info */}
          {searchQuery && (
            <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
              <p className="text-indigo-800 text-sm">
                🔍 Ditemukan{" "}
                <strong>{totalFilteredPrompts} prompt</strong> dari{" "}
                <strong>{filteredSections.length} bagian</strong> untuk pencarian{" "}
                "<strong>{searchQuery}</strong>"
              </p>
            </div>
          )}

          {/* Sections */}
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <SectionPanel key={section.id} section={section} />
            ))}
          </div>

          {/* No results */}
          {searchQuery && filteredSections.length === 0 && (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Prompt Tidak Ditemukan
              </h3>
              <p className="text-gray-500">
                Coba gunakan kata kunci lain, misalnya: "latar belakang",
                "hipotesis", "kuesioner"
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 mb-8 text-center border-t border-gray-200 pt-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-2xl">📜</span>
              <span className="text-lg font-bold text-gray-800">
                Kitab Prompt Skripsi
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
              Panduan lengkap prompt AI untuk penulisan skripsi yang benar dan
              sistematis. Dari pencarian judul hingga persiapan sidang.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Gunakan dengan bijak — AI adalah asisten, bukan pengganti proses
              berpikir Anda. 🎓
            </p>
          </footer>
        </div>
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:scale-110"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
