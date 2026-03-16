import type { Section } from "../data/prompts";
import PromptCard from "./PromptCard";

interface SectionPanelProps {
  section: Section;
}

export default function SectionPanel({ section }: SectionPanelProps) {
  return (
    <div id={section.id} className="scroll-mt-24">
      {/* Section Header */}
      <div
        className={`bg-gradient-to-r ${section.color} rounded-2xl p-6 md:p-8 mb-6 shadow-lg`}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl">{section.icon}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {section.title}
          </h2>
        </div>
        <p className="text-white/90 text-base md:text-lg leading-relaxed ml-0 md:ml-14">
          {section.description}
        </p>
        <div className="mt-4 ml-0 md:ml-14">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            {section.prompts.length} Prompt Tersedia
          </span>
        </div>
      </div>

      {/* Prompt Cards */}
      <div className="space-y-4">
        {section.prompts.map((prompt, index) => (
          <PromptCard key={prompt.id} prompt={prompt} index={index} />
        ))}
      </div>
    </div>
  );
}
