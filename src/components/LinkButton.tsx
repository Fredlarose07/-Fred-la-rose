import { ArrowRight } from 'lucide-react'

interface LinkButtonProps {
    label: string
    href?: string
    onClick?: () => void
}

function LinkButton({ label, href, onClick }: LinkButtonProps) {
    // h-11 = 44px (Standard UI)
    // px-5 = 20px (Équilibre visuel avec h-11)
    const classes = `
        inline-flex items-center gap-2 h-11 px-5 
        font-body font-medium text-[13px] 
        text-accent/90 hover:text-accent
        transition-all duration-300 group
    `

    const content = (
        <>
            {label}
            <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
            />
        </>
    )

    if (href) {
        return (
            <a href={href} className={classes}>
                {content}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={classes} type="button">
            {content}
        </button>
    )
}

export default LinkButton