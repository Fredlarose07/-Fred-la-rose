import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../config/projects'

function Projects() {
  return (
    <div className="min-h-screen text-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[190px] pt-12 md:pt-20 pb-32">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-10 text-neutral-50 hover:text-neutral-90 hover:border-neutral-20 transition-all duration-200 mb-12"
        >
          <ArrowLeft size={14} />
          <span className="font-body text-sm">Back</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-neutral-100 leading-tight">
            Mon atelier
          </h1>
          <p className="font-body text-sm text-neutral-50">
            Tout ce que j'ai construit, raté, et parfois réussi.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map(project => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="flex flex-col rounded-xl border border-neutral-10 bg-neutral-3 overflow-hidden group hover:border-neutral-20 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenu */}
              <div className="flex flex-col gap-2 p-4">
                {project.subtitle && (
                  <span className="font-body text-xs text-accent tracking-widest uppercase">
                    {project.subtitle}
                  </span>
                )}
                <span className="font-display font-medium text-base text-neutral-90 leading-tight">
                  {project.title}
                </span>

                {project.tagline && (
                  <p className="font-body text-[13px] text-neutral-50 italic">
                    "{project.tagline}"
                  </p>
                )}

                <p className="font-body text-[13px] text-neutral-30 leading-snug line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects