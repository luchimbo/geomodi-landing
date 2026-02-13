"use client"

import { HelpCircle } from "lucide-react"

const defaultCriteria = [
  { name: "Estructura", level: 4 },
  { name: "Densidad", level: 4 },
  { name: "Citabilidad", level: 4 },
  { name: "Coherencia", level: 4 },
]

const segmentColors = [
  { active: "bg-[#EAC9C9]", inactive: "bg-gray-200" },
  { active: "bg-[#E4CCAB]", inactive: "bg-gray-200" },
  { active: "bg-[#E7DBB5]", inactive: "bg-gray-200" },
  { active: "bg-[#338E66]", inactive: "bg-gray-200" },
]

export function CriteriaIndicator({ criteria = defaultCriteria }) {
  return (
    <div className="w-full max-w-xs space-y-4">
      {criteria.map((criterion) => (
        <div key={criterion.name}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-[#1F0E5E]">
              {criterion.name}
            </span>
            <HelpCircle className="w-3.5 h-3.5 text-[#1F0E5E]/60 stroke-[2]" />
          </div>
          <div className="flex gap-1">
            {segmentColors.map((color, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 rounded-full ${
                  idx < criterion.level ? color.active : color.inactive
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
