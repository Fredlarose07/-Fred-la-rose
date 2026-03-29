import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../config/projects'
import { ArrowLeft } from 'lucide-react'

function ProjectDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-50">
        Projet introuvable.
      </div>
    )
  }

  return (
    <div className="min-h-screen text-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[190px] pt-12 md:pt-20 pb-32">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-10 text-neutral-50 hover:text-neutral-90 hover:border-neutral-20 transition-all duration-200 mb-12"
        >
          <ArrowLeft size={14} />
          <span className="font-body text-sm">Back</span>
        </button>


        {/* Layout deux colonnes */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

          {/* Image sticky */}
          <div className="w-full md:w-1/2 md:sticky md:top-20">
            <div className="w-full max-w-[280px] mx-auto md:max-w-none rounded-xl overflow-hidden border border-neutral-10">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col gap-3">
              {project.subtitle && (
                <span className="font-body text-xs text-accent tracking-widest uppercase">
                  {project.subtitle}
                </span>
              )}
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-neutral-100 leading-tight">
                {project.title}
              </h1>

              {project.tagline && (
                <p className="font-body text-base text-neutral-70 italic">
                  "{project.tagline}"
                </p>
              )}

              <p className="font-body text-sm text-neutral-50 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetail