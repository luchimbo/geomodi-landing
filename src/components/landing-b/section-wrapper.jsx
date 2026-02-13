export function SectionWrapper({ children, className = "", id }) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
