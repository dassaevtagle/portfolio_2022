import { useEffect, useRef, useState } from "react"
import anime from "animejs";
import Tilt from 'react-parallax-tilt'
import useOnScreen from "../hooks/useOnScreen"
import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"
import ExternalLink from "../components/ExternalLink";

import {ReactComponent as ExternalIcon} from "../assets/svg/icons/external.svg"
import ProfileBlack from "../assets/img/memoji_rodolfo.png"
import '../assets/scss/sections/About.scss';
import useWidth from "../hooks/useWidth";

function About () {
  const latestTeachnologiesUsed: string[] = [
    'React',
    'Node',
    'Vue',
    'TypeScript',
    'TailwindCSS',
    'SASS',
  ]
  const resumeUrl = 'https://drive.google.com/file/d/1fwXagkzVHhH2N3Mv6rgwcuLzrCih494D/view?usp=sharing'
  const [flip, setFlip] = useState<boolean>(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const { isMobile } = useWidth()
  const ROOT_MARGIN = isMobile ? '0px' : '-300px'
  const isOnScreen = useOnScreen({
    ref: aboutRef,
    observerOptions: {
      rootMargin: ROOT_MARGIN,
    },
    triggerOnce: true
  })
  const animate = () => {
    const tl = anime.timeline()
    tl
    .add({
      targets: '.about-grid',
      opacity: [0, 1],
      translateY: ['30%', '0%'],
      duration: 800,
      easing: 'easeInOutCubic'
    })
  }
  useEffect(() => {
    if (aboutRef.current && isOnScreen){
      animate()
    }
  }, [aboutRef, isOnScreen])

  return (
    <FullPageContainer>
      <Title>About me</Title>
      <div ref={aboutRef}>
        <div className="about-grid">
          <div className="about-grid_description">
            <p>
              Hey! I'm Rodolfo Dassaev Tagle, a Software Engineer who loves
              <span className="text-highlight"> Front End</span> development.
              <br/>
              I started to learn programming back in 2019 when I found about&nbsp;
              <ExternalLink href="https://theodinproject.com" type="hover">The Odin Project</ExternalLink>,
              since then I've worked as a Full Stack Developer using technologies such as .NET, Scala and Node.js.
              <br/>
              Currently I focus on mastering my skills in
              <span className="text-highlight"> JavaScript</span> and <span className="text-highlight">TypeScript</span>.
            </p>
          </div>
          <div className="about-grid_memoji">
            <Tilt tiltReverse scale={1.2} flipVertically={flip}>
              <p className="absolute text-sm top-2 right-20 text-gray-400">Click me</p>
              <img onClick={() => setFlip(!flip)} src={ProfileBlack} alt="Me" className="rounded about-grid_memoji-img" />
            </Tilt>
          </div>
          <div className="about-grid_tech">
            These are some <span className="underline text-highlight">technologies</span> I've been working with recently:
            <div className="tech-container">
              <ul className="grid grid-cols-3 gap-2 ml-8 list-disc text-lg reiju p-4 gap-x-12">
                {
                  latestTeachnologiesUsed.map((tech, idx) => <li key={idx}>{tech}</li>)
                }
              </ul>
            </div> 
          </div>
          <div className="about-grid_resume">
            <ExternalLink
              classes="rounded py-3 px-6 border-solid border-2 hover:border-highlight hover:text-highlight"
              href={resumeUrl}>
              Resumé
              <span className="inline-flex ml-2 my-auto align-text-bottom">
                <ExternalIcon/>
              </span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </FullPageContainer>
  )
}

export default About