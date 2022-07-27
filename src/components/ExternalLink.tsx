import { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  classes?: string;
  children: ReactNode;
}
function ExternalLink ({href, classes, children}: ExternalLinkProps) {
  return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default ExternalLink