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
    <div className="min-h-screen bg-[#fafafa]">
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
        <div className="max-w-3xl mx-auto px-5 py-10">
          {/* Hero - hanya tampil tanpa search */}
          {!searchQuery && <HeroSection />}

          {/* How to Use - hanya tampil tanpa search */}
          {!searchQuery && <HowToUse />}

          {/* Search results info - styling lebih sederhana */}
          {searchQuery && (
            <div className="mb-6 p-4 bg-slate-100 border-l-4 border-slate-400">
              <p className="text-slate-700 text-sm">
                Ditemukan <strong>{totalFilteredPrompts} prompt</strong> dari{" "}
                <strong>{filteredSections.length} bagian</strong> untuk "{searchQuery}"
              </p>
            </div>
          )}

          {/* Sections dengan spacing yang lebih natural */}
          <div className="space-y-16">
            {filteredSections.map((section) => (
              <SectionPanel key={section.id} section={section} />
            ))}
          </div>

          {/* No results - styling lebih flat */}
          {searchQuery && filteredSections.length === 0 && (
            <div className="text-center py-16 border border-dashed border-gray-300 rounded-sm">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Tidak ada hasil
              </h3>
              <p className="text-gray-500 text-sm">
                Coba kata kunci lain seperti: latar belakang, hipotesis, atau kuesioner
              </p>
            </div>
          )}

          {/* Footer - lebih minimalis */}
          <footer className="mt-20 mb-10 text-center border-t border-gray-200 pt-8">
            <h4 className="text-base font-medium text-gray-800 mb-2">
              Kitab Prompt Skripsi
            </h4>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Kumpulan prompt untuk membantu penulisan skripsi. 
              Dari pencarian judul hingga persiapan sidang.
            </p>
            <p className="text-gray-400 text-xs mt-6">
              Gunakan sebagai referensi, bukan pengganti pemikiran kritis.
            </p>
          </footer>
        </div>
      </main>

      {/* Scroll to top - styling lebih flat */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white shadow-md flex items-center justify-center transition-colors"
          aria-label="Kembali ke atas"
        >
          <svg
            className="w-4 h-4"
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