import { ReactNode, MouseEvent } from "react";
import '../assets/scss/components/ExternalLink.scss'

type ExternalLinkProps = {
  href: string;
  classes?: string;
  type?: "hover";
  children: ReactNode;
}

function ExternalLink ({href, type, classes, children}: ExternalLinkProps) {
  const stopPropagation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
  } 
  return <a href={href} className={type ? 'hover-link ' + classes : classes} onClick={stopPropagation} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default ExternalLink