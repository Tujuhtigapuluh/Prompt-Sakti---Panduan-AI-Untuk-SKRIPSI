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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-120px 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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

      {/* Main */}
      <main className="lg:pl-72">
        <div className="max-w-3xl mx-auto px-5 py-10">
          
          {!searchQuery && <HeroSection />}
          {!searchQuery && <HowToUse />}

          {/* Search Info */}
          {searchQuery && (
            <div className="mb-8 p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
              <p className="text-gray-700 text-sm">
                Ditemukan <strong>{totalFilteredPrompts}</strong> prompt dari{" "}
                <strong>{filteredSections.length}</strong> bagian
              </p>
              <p className="text-xs text-gray-500 mt-1">
                untuk pencarian: "{searchQuery}"
              </p>
            </div>
          )}

          {/* Sections */}
          <div className="space-y-16">
            {filteredSections.map((section) => (
              <SectionPanel key={section.id} section={section} />
            ))}
          </div>

          {/* Empty State */}
          {searchQuery && filteredSections.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M8 16l4-4-4-4m8 8l-4-4 4-4"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-1">
                Tidak ditemukan
              </h3>
              <p className="text-gray-500 text-sm">
                Coba kata lain seperti “latar belakang” atau “hipotesis”
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-24 text-center border-t border-gray-100 pt-8">
            <h4 className="text-sm font-semibold text-gray-900 mb-2 tracking-tight">
              Kitab Prompt Skripsi
            </h4>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              Kumpulan prompt untuk membantu proses penulisan skripsi secara lebih terstruktur.
            </p>
            <p className="text-gray-400 text-xs mt-6">
              Gunakan dengan bijak dan tetap lakukan validasi akademik.
            </p>
          </footer>

        </div>
      </main>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;