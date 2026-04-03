import type { Category, Grade } from '../config/categories'

interface GardenCardProps extends Category { }

const GRADE_COLORS: Record<Grade, string> = {
    Iron: '#444441',
    Bronze: '#5F5E5A',
    Silver: '#888780',
    Gold: '#B4B2A9',
    Platinum: '#D3D1C7',
    Diamond: '#F1EFE8',
}

export function GardenCardSkeleton() {
    return (
        <div
            className="rounded-lg border border-neutral-6"
            style={{ minHeight: 130, background: 'rgba(255,255,255,0.01)' }}
        />
    )
}

function GardenCard({ name, icon: Icon, notesCount, grade }: GardenCardProps) {
    const gradeColor = GRADE_COLORS[grade]

    return (
        <button
            className="group w-full text-left rounded-lg border border-neutral-6 bg-neutral-3 p-1 transition-all duration-300"
            style={{ minHeight: 130 }}
        >
            <div className="flex flex-col justify-between h-full p-4 rounded-xl group-hover:bg-neutral-6 transition-all duration-300"
                style={{ minHeight: 118 }}
            >

                {/* Top */}
                <div className="flex items-start justify-between">
                    <div className="relative w-6 h-6">
                        <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-95">
                            <Icon size={24} weight="duotone" color="#606060" />
                        </div>
                        <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                            <Icon size={24} weight="duotone" color={gradeColor} />
                        </div>
                    </div>

                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-neutral-10 text-neutral-30">
                        <span className="group-hover:hidden">{grade}</span>
                        <span className="hidden group-hover:inline" style={{ color: '#888780' }}>{grade}</span>
                    </span>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-0.5">
                        <span className="font-display font-medium text-base text-neutral-90 leading-tight">
                            {name}
                        </span>
                        <span className="font-body text-xs text-neutral-30 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-4 transition-all duration-500 ease-in-out">
                            {notesCount} notes
                        </span>
                    </div>
                    {grade !== 'Diamond' && (
                        <div className="h-px w-full bg-neutral-6 rounded-full" />
                    )}
                </div>

            </div>
        </button>
    )
}

export default GardenCard