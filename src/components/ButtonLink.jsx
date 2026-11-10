export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  ariaLabel,
  onClick,
  ...props
}) {
  const isExternal = external || (href && href.startsWith('http'));
  const isTel = href && href.startsWith('tel:');

  const rel = isExternal && !isTel ? 'noopener noreferrer' : undefined;
  const target = isExternal && !isTel ? '_blank' : undefined;

  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  return (
    <a
      href={href}
      className={classes}
      rel={rel}
      target={target}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}

