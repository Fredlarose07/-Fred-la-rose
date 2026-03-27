interface SectionLabelProps {
  label: string
}

function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="font-display font-medium text-[12px] tracking-wider text-neutral-30 w-full">
  {label}
</span>
  )
}

export default SectionLabel