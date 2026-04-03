import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const scores = [
  { label: 'Névrosisme',   abbr: 'Nev',  value: 43  },
  { label: 'Extraversion', abbr: 'Ex',   value: 80  },
  { label: 'Ouverture',    abbr: 'Ouv',  value: 94  },
  { label: 'Convivialité', abbr: 'Conv', value: 79  },
  { label: 'Conscience',   abbr: 'Cons', value: 106 },
]

const MAX_SCORE = 120
const CHART_HEIGHT = 160

function PersonalityChart() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div
      className="group flex flex-col gap-4 w-full bg-neutral-3 border border-neutral-6 rounded-lg p-5 cursor-pointer hover:bg-neutral-6 transition-colors duration-500"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
    >

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="font-display font-semibold text-base text-neutral-90 leading-tight">
            Architecte
          </span>
          <span className="font-body text-[13px] font-medium text-neutral-30 leading-snug">
            Ma personnalité
          </span>
        </div>
        <ArrowUpRight
          size={16}
          strokeWidth={2.4}
          className="text-icon-default group-hover:text-icon-active transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>

      {/* Chart */}
      <div className="flex flex-col gap-4">

        {/* Barres */}
        <div className="flex items-end justify-between gap-2" style={{ height: CHART_HEIGHT }}>
          {scores.map(({ label, value }, index) => {
            const barHeight = Math.round((value / MAX_SCORE) * CHART_HEIGHT)
            return (
              <div key={label} className="flex flex-col items-center justify-end flex-1 h-full">
                <span
                  className="font-body text-xs text-neutral-30 mb-2 transition-all duration-300"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? 'translateY(0)' : 'translateY(4px)',
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  {value}
                </span>
                <div
                  className="w-full rounded-[4px] bg-neutral-20 transition-all"
                  style={{
                    height: revealed ? barHeight : 0,
                    transitionDuration: '600ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${index * 60}ms`,
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Séparateur */}
        <div className="h-px w-full bg-neutral-6 opacity-50" />

        {/* Labels */}
        <div className="flex justify-between gap-2">
          {scores.map(({ label, abbr }, index) => (
            <div
              key={label}
              className="flex-1 text-center transition-all duration-300"
              style={{
                opacity: revealed ? 1 : 0.3,
                transitionDelay: `${index * 60}ms`,
              }}
            >
              <span className="font-body text-xs font-medium text-neutral-30 hidden md:block">
                {label}
              </span>
              <span className="font-body text-xs font-medium text-neutral-30 block md:hidden">
                {abbr}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default PersonalityChart