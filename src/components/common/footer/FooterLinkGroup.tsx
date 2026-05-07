export const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-neutral-125 text-base leading-6 font-light transition-colors hover:text-neutral-900"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
