import type { Section } from "../data/prompts";

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  sections,
  activeSection,
  isOpen,
  onClose,
}: SidebarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:z-30`}
      >
        {/* Logo */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-5 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg">📜</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-tight">
                Kitab Prompt
              </h1>
              <p className="text-xs text-gray-500">Panduan Skripsi AI</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
            Daftar Bab
          </p>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-indigo-50 text-indigo-700 font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <span className="text-lg flex-shrink-0">{section.icon}</span>
              <span className="leading-snug">{section.title.split("—")[0].split(":")[0].trim()}</span>
              <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {section.prompts.length}
              </span>
            </button>
          ))}
        </nav>

        {/* Stats */}
        <div className="p-4 mx-4 mb-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
          <p className="text-xs font-semibold text-indigo-600 mb-2">
            📊 Statistik
          </p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Total Bagian</span>
              <span className="font-semibold text-gray-800">
                {sections.length}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Total Prompt</span>
              <span className="font-semibold text-gray-800">
                {sections.reduce((acc, s) => acc + s.prompts.length, 0)}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
