import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"
import ProfileBlack from "../assets/img/memoji_rodolfo.png"

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
            <br/>
            <div>
              These are some technologies I've been using recently:
              <div>
                <ul className="grid grid-cols-3 gap-2">
                  <li>React</li>
                  <li>Vue</li>
                  <li>Node</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>Sass</li>
                </ul>
              </div> 
            </div>
          </p>
        </div>
        <div className="about-grid_memoji">
          <img src={ProfileBlack} alt="Me" className="rounded image" />
        </div>
        <div className="about-grid_resume">
          <a
            className="rounded p-2 border-solid border-2 hover:border-highlight hover:text-highlight"
            href="https://drive.google.com/file/d/1LxeepIkH6VVdJ8SxOMem-RHj03PUii4p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resumé
          </a>
        </div>
      </div>
      {/*
          <div>
            <ul className="grid grid-cols-3 gap-2">
              <li>React</li>
              <li>Vue</li>
              <li>Node</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Sass</li>
            </ul>
          </div> 
      */}
    </FullPageContainer>
  )
}

export default About