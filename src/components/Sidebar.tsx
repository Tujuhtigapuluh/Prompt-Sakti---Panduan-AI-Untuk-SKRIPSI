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
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-300 z-50 transform transition-transform duration-200 overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:z-30`}
      >
        {/* Logo */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
          <div>
            <h1 className="text-base font-semibold text-gray-800">
              Kitab Prompt
            </h1>
            <p className="text-xs text-gray-500">Panduan Skripsi</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-0.5">
          <p className="text-xs font-medium text-gray-400 px-2 mb-2">
            Daftar Bab
          </p>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`w-full flex items-center gap-2 px-2 py-2 text-left text-sm ${
                activeSection === section.id
                  ? "bg-gray-200 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="leading-snug truncate">
                {section.title.split("—")[0].split(":")[0].trim()}
              </span>
              <span className="ml-auto text-xs text-gray-400">
                {section.prompts.length}
              </span>
            </button>
          ))}
        </nav>

        {/* Stats */}
        <div className="p-3 mx-3 mb-3 bg-gray-100 border border-gray-200">
          <p className="text-xs font-medium text-gray-600 mb-2">
            Statistik
          </p>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Total Bagian</span>
              <span className="font-medium text-gray-800">
                {sections.length}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Total Prompt</span>
              <span className="font-medium text-gray-800">
                {sections.reduce((acc, s) => acc + s.prompts.length, 0)}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}