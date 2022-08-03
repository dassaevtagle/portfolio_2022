import { RefObject, useRef } from 'react';
import '../assets/scss/sections/Header.scss';
import Icon from '../components/Icon';
import useScrollTo from '../hooks/useScrollTo';
import useWidth from '../hooks/useWidth';

export type HeaderProps = {
  heroRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

function Header({heroRef, aboutRef, projectsRef, contactRef}: HeaderProps) {
  const {isMobile} = useWidth()
  const scrollTo = useScrollTo()
  const mobileMenuRef = useRef<HTMLDivElement>(null)


  const showMenu = () => {
    console.log("showing")
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.display = 'grid'
    }
  }
  const hideMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.display = 'none'
    }
  }

  const handleOnClick = (elementToScroll: RefObject<HTMLElement>) => {
    isMobile && hideMenu()
    scrollTo(elementToScroll)
  }

  return (
    <>
      <header className="h-wrapper reiju">
        <div className="h-wrapper_hero" onClick={() => handleOnClick(heroRef)}>
          <span className="text-highlight">T</span>agle
        </div>
        {
          isMobile ?
          <div onClick={showMenu}>
            <Icon name='Burger'/>
          </div>
          :
          <>
            <div className="h-wrapper_link" onClick={() => handleOnClick(aboutRef)}>About</div>
            <div className="h-wrapper_link" onClick={() => handleOnClick(projectsRef)}>Projects</div>
            <div className="h-wrapper_link" onClick={() => handleOnClick(contactRef)}>Contact</div>
          </>
        }
      </header>
      <div className='mobile-menu' ref={mobileMenuRef}>
        <div className='mobile-menu_close' onClick={hideMenu}>
          <Icon name='Close'/>
        </div>
        <div className="h-wrapper_link" onClick={() => handleOnClick(aboutRef)}>About</div>
        <div className="h-wrapper_link" onClick={() => handleOnClick(projectsRef)}>Projects</div>
        <div className="h-wrapper_link" onClick={() => handleOnClick(contactRef)}>Contact</div>
      </div>
    </>
  )
}

export default Header;