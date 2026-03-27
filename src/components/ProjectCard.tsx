import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  thumbnail: string
  title: string
  description: string
  href?: string
  isFirst?: boolean
  isLast?: boolean
}

function ProjectCard({ 
  thumbnail, 
  title, 
  description, 
  href, 
  isFirst, 
  isLast 
}: ProjectCardProps) {
  
  // Construction dynamique des classes d'arrondi
  const roundedClasses = `
    rounded-[4px] 
    ${isFirst ? 'rounded-t-[12px]' : ''} 
    ${isLast ? 'rounded-b-[12px]' : ''}
  `

  return (
    <a 
      href={href ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 p-4 transition-all duration-200 group hover:bg-neutral-6 ${roundedClasses}`}
    >
      {/* Thumbnail */}
      <div className="w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0 border border-neutral-10 bg-neutral-3">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1 min-w-0 pr-8 md:pr-0">
        <span className="font-display font-medium text-base text-neutral-90 leading-tight">
          {title}
        </span>
        <p className="font-body font-normal text-[13px] text-neutral-30 leading-snug line-clamp-2">
          {description}
        </p>
      </div>

      {/* Icon */}
      <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto flex-shrink-0">
        <ArrowUpRight
          size={16}
          strokeWidth={2.4}
          className="text-icon-default group-hover:text-icon-active transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </a>
  )
}

export default ProjectCard