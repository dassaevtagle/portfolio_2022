import { useRef } from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header, { HeaderProps } from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const headerProps: HeaderProps = {
    heroRef,
    aboutRef,
    projectsRef,
    contactRef
  }
  return (
    <>
      <Header {...headerProps}/>
      <div ref={heroRef}>
        <Hero/>
      </div>
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
