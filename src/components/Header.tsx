interface HeaderProps {
  onMenuToggle: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Header({
  onMenuToggle,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 lg:pl-72">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Menu button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Title for mobile */}
        <div className="lg:hidden">
          <span className="font-semibold text-gray-900 tracking-tight text-sm">
            Kitab Prompt
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Cari prompt favoritmu..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-gray-200 text-sm bg-gray-50/70 
              focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-200 
              transition-all duration-200 outline-none"
            />

            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md 
                text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
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
                    strokeWidth={1.8}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="ml-auto">
          <a
            href="#cara-pakai"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-gray-600 
            hover:text-gray-900 transition-colors duration-200"
          >
            Cara Pakai
          </a>
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden px-4 pb-3 border-t border-gray-100">
        <div className="relative w-full mt-3">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Cari sesuatu..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/70
            focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-gray-200
            transition-all duration-200 outline-none"
          />
        </div>
      </div>
    </header>
  );
}