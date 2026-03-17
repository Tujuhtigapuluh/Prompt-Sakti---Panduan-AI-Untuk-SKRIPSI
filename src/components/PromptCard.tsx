import { useState } from "react";
import type { PromptItem } from "../data/prompts";

interface PromptCardProps {
  prompt: PromptItem;
  index: number;
}

function getBadgeStyle(badge: string): string {
  if (badge.includes("WAJIB"))
    return "bg-gray-800 text-white";
  if (badge.includes("KUALITATIF"))
    return "bg-gray-200 text-gray-800";
  if (badge.includes("KUANTITATIF"))
    return "bg-gray-300 text-gray-800";
  if (badge.includes("STARTER"))
    return "bg-gray-100 text-gray-800 border border-gray-300";
  if (badge.includes("BARU"))
    return "bg-gray-100 text-gray-800";
  return "bg-gray-100 text-gray-700";
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
    <div className={`bg-white border overflow-hidden ${
      prompt.badge?.includes("WAJIB") ? "border-gray-800" : "border-gray-200"
    }`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`flex-shrink-0 w-6 h-6 text-white text-xs font-medium flex items-center justify-center ${
            prompt.badge?.includes("WAJIB")
              ? "bg-gray-800"
              : "bg-gray-600"
          }`}>
            {index + 1}
          </span>
          <h3 className="text-base font-medium text-gray-800">
            {prompt.title}
          </h3>
          {prompt.badge && (
            <span
              className={`inline-flex items-center px-2 py-0.5 text-xs ${getBadgeStyle(
                prompt.badge
              )}`}
            >
              {prompt.badge}
            </span>
          )}
        </div>
        <svg
          className={`w-4 h-4 text-gray-500 flex-shrink-0 ml-2 ${
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
        <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
          {/* Prompt Text */}
          <div className="relative bg-gray-50 border border-gray-200 p-4 mt-3">
            <div className="absolute top-2 right-2">
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1 px-2 py-1 text-xs border ${
                  copied
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {copied ? (
                  <>
                    <svg
                      className="w-3 h-3"
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
                    Tersalin
                  </>
                ) : (
                  <>
                    <svg
                      className="w-3 h-3"
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
                    Salin
                  </>
                )}
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm pr-20 whitespace-pre-line font-mono">
              {prompt.prompt}
            </p>
          </div>

          {/* Tips */}
          {prompt.tips && (
            <div className="pt-2">
              <button
                onClick={() => setShowTips(!showTips)}
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {showTips ? "Sembunyikan tips" : "Lihat tips"}
              </button>
              {showTips && (
                <div className="mt-2 p-3 bg-gray-100 border-l-4 border-gray-400">
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {prompt.tips}
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