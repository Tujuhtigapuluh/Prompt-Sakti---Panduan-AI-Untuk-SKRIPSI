import { useState } from "react";
import type { PromptItem } from "../data/prompts";

interface PromptCardProps {
  prompt: PromptItem;
  index: number;
}

function getBadgeStyle(badge: string): string {
  if (badge.includes("WAJIB"))
    return "bg-red-100 text-red-700 border-red-200";
  if (badge.includes("KUALITATIF"))
    return "bg-green-100 text-green-700 border-green-200";
  if (badge.includes("KUANTITATIF"))
    return "bg-blue-100 text-blue-700 border-blue-200";
  if (badge.includes("STARTER"))
    return "bg-purple-100 text-purple-700 border-purple-200";
  if (badge.includes("BARU"))
    return "bg-amber-100 text-amber-700 border-amber-200";
  return "bg-gray-100 text-gray-700 border-gray-200";
}

export default function PromptCard({ prompt, index }: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompt.prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
      prompt.badge?.includes("WAJIB") ? "border-red-300 ring-1 ring-red-100" : "border-gray-200"
    }`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`flex-shrink-0 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center ${
            prompt.badge?.includes("WAJIB")
              ? "bg-gradient-to-br from-red-500 to-rose-600"
              : "bg-gradient-to-br from-indigo-500 to-purple-600"
          }`}>
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-gray-800">
            {prompt.title}
          </h3>
          {prompt.badge && (
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getBadgeStyle(
                prompt.badge
              )}`}
            >
              {prompt.badge}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-2 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Content */}
      {expanded && (
        <div className="px-5 pb-5 space-y-4 animate-fadeIn">
          {/* Prompt Text */}
          <div className={`relative rounded-xl p-5 border ${
            prompt.badge?.includes("WAJIB")
              ? "bg-gradient-to-br from-red-50 to-rose-50 border-red-100"
              : "bg-gradient-to-br from-gray-50 to-slate-50 border-gray-100"
          }`}>
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  copied
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                }`}
              >
                {copied ? (
                  <>
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Tersalin!
                  </>
                ) : (
                  <>
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Salin Prompt
                  </>
                )}
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed text-[15px] pr-28 whitespace-pre-line">
              {prompt.prompt}
            </p>
          </div>

          {/* Tips */}
          {prompt.tips && (
            <div>
              <button
                onClick={() => setShowTips(!showTips)}
                className="flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {showTips ? "Sembunyikan Tips" : "Lihat Tips Penggunaan"}
              </button>
              {showTips && (
                <div className="mt-2 p-4 bg-amber-50 border border-amber-200 rounded-xl animate-fadeIn">
                  <p className="text-amber-800 text-sm leading-relaxed">
                    💡 {prompt.tips}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
