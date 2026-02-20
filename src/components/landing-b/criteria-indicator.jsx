"use client"

import { HelpCircle } from "lucide-react"
import { useState } from "react"

const tooltips = {
  Estructura: "Formato optimizado para motores generativos",
  Densidad: "Qué tan completa es la información de tu producto",
  Citabilidad: "Probabilidad de que la IA te recomiende",
  Coherencia: "Qué tan fácil le resulta a la IA entenderte",
}

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
  const [activeTooltip, setActiveTooltip] = useState(null)

  return (
    <div className="w-full max-w-xs space-y-4">
      {criteria.map((criterion) => (
        <div key={criterion.name}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-[#1F0E5E]">
              {criterion.name}
            </span>
            <div
              className="relative"
              onMouseEnter={() => setActiveTooltip(criterion.name)}
              onMouseLeave={() => setActiveTooltip(null)}
              onTouchStart={() => setActiveTooltip(activeTooltip === criterion.name ? null : criterion.name)}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#1F0E5E]/60 stroke-[2] cursor-help" />
              {activeTooltip === criterion.name && (
                <div className="absolute right-0 bottom-full mb-2 w-52 px-3 py-2 text-xs text-white bg-[#1F0E5E] rounded-lg shadow-lg z-50 pointer-events-none">
                  {tooltips[criterion.name]}
                  <div className="absolute top-full right-2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#1F0E5E]" />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-1">
            {segmentColors.map((color, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 rounded-full ${idx < criterion.level ? color.active : color.inactive
                  }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
