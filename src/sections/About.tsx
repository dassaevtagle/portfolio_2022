import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"
import Tilt from 'react-parallax-tilt'
import ProfileBlack from "../assets/img/memoji_rodolfo.png"
import {ReactComponent as ExternalIcon} from "../assets/svg/icons/external.svg"

import '../assets/scss/sections/About.scss';
import ExternalLink from "../components/ExternalLink";
import { useState } from "react"

function About () {
  const [flip, setFlip] = useState<boolean>(false)
  const latestTeachnologiesUsed: string[] = [
    'React',
    'Node',
    'Vue',
    'TypeScript',
    'TailwindCSS',
    'SASS',
  ]
  return (
    <FullPageContainer>
      <Title>About me</Title>
      <div className="about-grid">
        <div className="about-grid_description">
          <p>
            Hey! I'm Rodolfo Dassaev Tagle, a Software Engineer who loves <span className="text-highlight">Front End</span> development.
            <br/>
            I started to learn programming back in 2019 when I found about&nbsp;
            <ExternalLink href="https://theodinproject.com" type="hover">The Odin Project</ExternalLink>,
            since then I've worked as a Full Stack Developer using technologies such as .NET, Scala and Node.js.
            <br/>
            Currently I focus on mastering my skills in <span className="text-highlight">JavaScript</span> and <span className="text-highlight">TypeScript</span>.
          </p>
        </div>
        <div className="about-grid_memoji">
          <Tilt tiltReverse scale={1.2} flipVertically={flip}>
            <p className="absolute text-sm top-2 right-20 text-gray-400">Click me</p>
            <img onClick={() => setFlip(!flip)} src={ProfileBlack} alt="Me" className="rounded image" />
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
            href="https://drive.google.com/file/d/1LxeepIkH6VVdJ8SxOMem-RHj03PUii4p/view?usp=sharing">
            Resumé
            <span className="inline-flex ml-2 my-auto align-text-bottom">
              <ExternalIcon/>
            </span>
          </ExternalLink>
        </div>
      </div>
    </FullPageContainer>
  )
}

export default About