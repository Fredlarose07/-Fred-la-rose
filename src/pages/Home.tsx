import React from 'react' // Import requis pour React.Fragment si tu n'as pas le nouveau transform
import chillImg from '../assets/Chill.jpg'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'
import LinkButton from '../components/LinkButton'
import { projects } from '../config/projects'

function Home() {
    return (
        <div className="min-h-screen bg-bg text-neutral-100 selection:bg-accent/30 font-body">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[190px] pt-12 md:pt-20 pb-32">

                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">

                    {/* Sidebar */}
                    <aside className="w-full flex justify-center md:justify-start flex-shrink-0 md:w-auto md:sticky md:top-20">
                        <ProfileCard image={chillImg} name="@FredLaRose" />
                    </aside>

                    {/* Main Content */}
                    <main className="w-full flex-1 flex flex-col gap-8">

                        <section className="flex flex-col gap-4">
                            <SectionLabel label="Mon atelier" />

                            {/* Container Projets */}
                            <div className="flex flex-col w-full bg-neutral-3 border border-neutral-6 rounded-lg p-1">
                                {projects.map((project, index) => (
                                    <React.Fragment key={project.id}>
                                        <ProjectCard 
                                            {...project} 
                                            isFirst={index === 0} 
                                            isLast={index === projects.length - 1} 
                                        />
                                        {/* Séparateur horizontal */}
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