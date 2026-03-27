import type { LucideIcon } from 'lucide-react'
import { MessageCircleMore } from 'lucide-react'

interface ProfileCardProps {
    image: string
    name: string
    contactLabel?: string
    contactHref?: string
    contactIcon?: LucideIcon
}

function ProfileCard({
    image,
    name,
    contactLabel = 'Contacte-moi',
    contactHref = '#',
    contactIcon: Icon = MessageCircleMore,
}: ProfileCardProps) {
    return (
        <div className="relative w-[232px] h-[330px] md:w-[239px] md:h-[354px] lg:w-[290px] lg:h-[430px] flex-shrink-0 rounded-lg overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.5)] bg-neutral-3">
            
            {/* Bordure de finition interne (Overlay) */}
            <div className="absolute inset-0 rounded-lg border border-neutral-10 z-20 pointer-events-none" />

            {/* Image de fond */}
            <img src={image} alt={name} className="w-full h-full object-cover bg-neutral-10" />

            {/* Overlay de flou progressif (Ton masque custom) */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[120px] z-10 pointer-events-none"
                style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    maskImage: 'linear-gradient(to bottom, transparent, black 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 80%)',
                }}
            />

            {/* Contenu (Texte + Bouton) */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between p-4 gap-2 z-30">
                <div className="flex flex-col gap-1">
                    <span className="font-display font-normal text-base text-neutral-90 leading-tight">
                        {name}
                    </span>

                    <span className="font-body font-normal text-[12px] text-neutral-50">
                        {contactLabel}
                    </span>
                </div>

                <a
                    href={contactHref}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-neutral-10 hover:bg-neutral-20 border border-neutral-20 hover:border-accent/50 transition-all duration-300 backdrop-blur-md"
                >
                    <Icon size={20} className="text-neutral-100" />
                </a>
            </div>
        </div>
    )
}

export default ProfileCard