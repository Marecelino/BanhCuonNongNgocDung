export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Component = 'h2',
  align = 'center',
  className = '',
  ...props
}) {
  const alignmentClass = align === 'left' ? 'section-heading--left' : 'section-heading--center';

  return (
    <div className={`section-heading ${alignmentClass} ${className}`.trim()} {...props}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <Component className="section-heading__title">{title}</Component>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

