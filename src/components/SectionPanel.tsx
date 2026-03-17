import type { Section } from "../data/prompts";
import PromptCard from "./PromptCard";

interface SectionPanelProps {
  section: Section;
}

export default function SectionPanel({ section }: SectionPanelProps) {
  return (
    <div id={section.id} className="scroll-mt-24 mb-12">
      {/* Section Header */}
      <div className="bg-white border border-gray-300 p-5 mb-4">
        <div className="flex items-start gap-3 mb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {section.title}
          </h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {section.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
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
          {section.prompts.length} prompt
        </div>
      </div>

      {/* Prompt Cards */}
      <div className="space-y-3">
        {section.prompts.map((prompt, index) => (
          <PromptCard key={prompt.id} prompt={prompt} index={index} />
        ))}
      </div>
    </div>
  );
}