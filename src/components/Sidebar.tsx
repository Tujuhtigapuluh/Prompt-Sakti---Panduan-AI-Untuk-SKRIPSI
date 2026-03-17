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
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md border-r border-gray-200 z-50 transform transition-all duration-300 ease-out overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:z-30`}
      >
        {/* Logo */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 z-10">
          <h1 className="text-sm font-semibold text-gray-900 tracking-tight">
            Kitab Prompt
          </h1>
          <p className="text-[11px] text-gray-500">
            Panduan Skripsi
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          <p className="text-[11px] font-medium text-gray-400 px-2 mb-2 tracking-wide">
            DAFTAR BAB
          </p>

          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`group relative w-full flex items-center gap-2 px-3 py-2 rounded-md text-left text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-white rounded-r" />
                )}

                {/* Title */}
                <span className="leading-snug truncate">
                  {section.title.split("—")[0].split(":")[0].trim()}
                </span>

                {/* Count */}
                <span
                  className={`ml-auto text-[11px] px-1.5 py-0.5 rounded 
                  ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {section.prompts.length}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Stats */}
        <div className="p-3 mx-3 mb-4 mt-2 rounded-lg bg-gray-50 border border-gray-100">
          <p className="text-[11px] font-medium text-gray-500 mb-2 tracking-wide">
            STATISTIK
          </p>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Bagian</span>
              <span className="font-medium text-gray-900">
                {sections.length}
              </span>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Prompt</span>
              <span className="font-medium text-gray-900">
                {sections.reduce((acc, s) => acc + s.prompts.length, 0)}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}