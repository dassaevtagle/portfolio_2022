import { RefObject } from 'react';
import '../assets/scss/sections/Header.scss';

export type HeaderProps = {
  heroRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

function Header({heroRef, aboutRef, projectsRef, contactRef}: HeaderProps) {
  const scrollTo = (ref: RefObject<HTMLElement>)  => {
    if (ref.current) {
      const yOffset = -60;
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  return (
    <header className="h-wrapper reiju">
      <div className="h-wrapper_hero" onClick={() => scrollTo(heroRef)}>
        <span className="text-highlight">T</span>agle
      </div>
      <div className="h-wrapper_link" onClick={() => scrollTo(aboutRef)}>About</div>
      <div className="h-wrapper_link" onClick={() => scrollTo(projectsRef)}>Projects</div>
      <div className="h-wrapper_link" onClick={() => scrollTo(contactRef)}>Contact</div>
    </header>
  )
}

export default Header;