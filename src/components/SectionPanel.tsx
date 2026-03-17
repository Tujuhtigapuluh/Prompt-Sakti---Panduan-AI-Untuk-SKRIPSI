import type { Section } from "../data/prompts";
import PromptCard from "./PromptCard";

interface SectionPanelProps {
  section: Section;
}

export default function SectionPanel({ section }: SectionPanelProps) {
  return (
    <div id={section.id} className="scroll-mt-24 mb-14">
      
      {/* Section Header */}
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-5 mb-5">
        
        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-900 rounded-l-xl" />

        <div className="pl-3">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight">
              {section.title}
            </h2>

            <span className="text-[11px] px-2 py-1 rounded-md bg-gray-100 text-gray-600">
              {section.prompts.length} prompt
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
            {section.description}
          </p>
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