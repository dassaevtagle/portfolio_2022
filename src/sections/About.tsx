import FullPageContainer from "../components/FullPageContainer"
import Title from "../components/Title"
import ProfileBlack from "../assets/img/memoji_rodolfo.png"

import '../assets/scss/sections/About.scss';

function About () {
  return (
    <FullPageContainer>
      <Title>About me</Title>
      <section className="md:flex md:flex-row-reverse px-4 md:px-20 py-12 px-8">
        <div className="md:w-1/3">
          <img src={ProfileBlack} alt="Me" className="rounded image" />
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
        <div className="md:w-2/3 font-extralight text-gray-50">
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. 
            Ex alias fugiat animi! Veritatis enim possimus
            reprehenderit quia mollitia minima ullam eius ut nostrum harum!
            Odit ullam eum voluptates omnis repellendus.
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. 
            Ex alias fugiat animi! Veritatis enim possimus
            reprehenderit quia mollitia minima ullam eius ut nostrum harum!
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. 
            Ex alias fugiat animi! Veritatis enim possimus
            reprehenderit quia mollitia minima ullam eius ut nostrum harum!
          </p>
          <a href="a" className="underline rounded p-2 hover:bg-highlight hover:text-black relative top-12">Resumé</a>
        </div>
      </section>
    </FullPageContainer>
  )
}

export default About