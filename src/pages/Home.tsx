import React from 'react'
import chillImg from '../assets/Chill.jpg'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'
import LinkButton from '../components/LinkButton'
import { projects } from '../config/projects'

function Home() {
    return (
        <div className="min-h-screen text-neutral-100 selection:bg-accent/30 font-body">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[190px] pt-12 md:pt-20 pb-32">

                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">

                    {/* Sidebar */}
                    <aside className="w-full flex justify-center md:justify-start flex-shrink-0 md:w-auto md:sticky md:top-20">
                        <ProfileCard image={chillImg} name="@FredLaRose" />
                    </aside>

                    {/* Main Content */}
                    <main className="w-full flex-1 flex flex-col gap-12">

                        {/* Hero */}
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="font-display font-bold text-6xl lg:text-8xl text-neutral-100 leading-none tracking-tight">
                                FAIL{' '}
                                <span
                                    style={{
                                        WebkitTextStroke: '2px rgba(255,255,255,0.9)',
                                        color: 'transparent',
                                    }}
                                >
                                    BUILDER
                                </span>
                            </h1>
                            <p className="font-body text-sm text-neutral-50 max-w-md leading-relaxed mx-auto md:mx-0">
                                Pas d'école prestigieuse, pas de GAFAM dans le CV, une boîte qui a coulé…
                                je construis des choses qui foirent. Parfois elles servent quand même et ça me fait kiffer.
                            </p>
                        </div>

                        {/* Projets */}
                        <section className="flex flex-col gap-4">
                            <SectionLabel label="Mon atelier" />

                            <div className="flex flex-col w-full bg-neutral-3 border border-neutral-6 rounded-lg p-1">
                                {projects.map((project, index) => (
                                    <React.Fragment key={project.id}>
                                        <ProjectCard
                                            {...project}
                                            isFirst={index === 0}
                                            isLast={index === projects.length - 1}
                                        />
                                        {index < projects.length - 1 && (
                                            <div className="mx-4 h-px bg-neutral-6 my-1 opacity-50" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="flex md:justify-end pr-1">
                                <LinkButton label="Voir tous les projets" href="/projects" />
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    )
}

export default Home