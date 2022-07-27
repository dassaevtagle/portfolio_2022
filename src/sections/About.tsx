import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"
import ProfileBlack from "../assets/img/memoji_rodolfo.png"
import {ReactComponent as ExternalIcon} from "../assets/svg/icons/external.svg"

import '../assets/scss/sections/About.scss';

function About () {
  return (
    <FullPageContainer>
      <Title>About me</Title>
      <div className="about-grid">
        <div className="about-grid_description">
          <p>
            Hey! I'm Rodolfo Dassaev Tagle, a Software Engineer who loves front-end development.
            <br/>
            I started to learn programming back in 2019 when I found about The Odin Project,
            since then I've worked as a Fullstack developer using technologies such as .NET, Scala and Node.js.
            <br/>
            Currently I focus on mastering my skills in JavaScript and TypeScript.
          </p>
        </div>
        <div className="about-grid_memoji">
          <img src={ProfileBlack} alt="Me" className="rounded image" />
        </div>
        <div className="about-grid_tech">
          These are some <span className="underline">technologies</span> I've been working with recently:
          <div className="tech-container">
            <ul className="grid grid-cols-3 gap-2 ml-8 list-disc text-lg reiju p-4 gap-x-12">
              <li>React</li>
              <li>Vue</li>
              <li>Node</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Sass</li>
            </ul>
          </div> 
        </div>
        <div className="about-grid_resume">
          <a
            className="rounded py-3 px-6 border-solid border-2 hover:border-highlight hover:text-highlight"
            href="https://drive.google.com/file/d/1LxeepIkH6VVdJ8SxOMem-RHj03PUii4p/view?usp=sharing"
            target="_blank" rel="noopener noreferrer">
            Resumé
            <span className="inline-flex ml-2 my-auto align-text-bottom">
              <ExternalIcon/>
            </span>
          </a>
        </div>
      </div>
    </FullPageContainer>
  )
}

export default About