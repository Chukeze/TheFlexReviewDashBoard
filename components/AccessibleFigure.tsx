export default function AccessibleFigure({
  titleId,
  title,
  desc,
  children,
}: {
  titleId: string
  title: string
  desc?: string
  children: React.ReactNode
}) {
  return (
    <figure aria-labelledby={titleId}>
      <h3 id={titleId}>{title}</h3>
      {children}
      {desc && <figcaption>{desc}</figcaption>}
      {/* add “Show data as table” button + table markup where you render the chart */}
    </figure>
  )
}
