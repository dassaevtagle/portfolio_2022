import { useRef } from "react"
import FullPageContainer from "../components/FullPageContainer"
import { Box, Grid } from "../components/Grid"
import Title from "../components/Title"
import Lightbox, { LightboxHandle } from "../components/Lightbox"

import TorreTest from '../assets/img/torre-test.png'
import TodoApp from '../assets/img/todo-app.png'
import RocketCode from '../assets/img/rocket-code.png'
import FancyTails from '../assets/img/fancytails.png'
import CostCalculator from '../assets/img/cost-calculator.png'
import Portfolio2021 from '../assets/img/portfolio-2021.png'

import '../assets/scss/sections/Projects.scss';

export type Project = {
  image: string;
  name: string;
  description: string;
  sourceUrl?: string;
  demoUrl?: string;
  lgColumn?: boolean;
  lgRow?: boolean;
}

function Projects() {
  const projectsCollection: Project[] = [
    {
      image: CostCalculator,
      name: 'Cost calculator',
      description: `This was my first React application and my first one deployed to AWS (EC2). 
      It is a cost calculator made for a local bakery. Made with MERN stack. PASSWORD: chocolate`,
      sourceUrl: 'https://github.com/dassaevtagle/cost-calculator',
      demoUrl: 'https://calculador-costos.herokuapp.com/',
      lgColumn: true,
    },
    {
      name: 'Torre test application',
      image: TorreTest,
      description: `This was made in 3 days to pass the Torre (torre.co) 
      test for the Software Developer Intern position. Written with the MERN stack.`,
      sourceUrl: 'https://github.com/dassaevtagle/employee-info',
      demoUrl: 'https://torreco-test.herokuapp.com/',
      lgRow: true,
    },
    {
      name: 'Fancy Tails (Pet grooming)',
      image: FancyTails,
      description: `I learned a lot about pure CSS as I wrote this with no CSS framework. 
      Also, I learned about web design and GIMP. Static site. `,
      sourceUrl: 'https://github.com/dassaevtagle/veterinaria-huesitos',
      demoUrl: 'https://dassaevtagle.github.io/veterinaria-huesitos/',
    },
    {
      name: 'Todo list',
      image: TodoApp,
      description: `Made with Bootstrap, jQuery. I wrote it all in JS modules. No HTML. 
      In this project I learn a lot from Webpack from scratch and pure JS (modules, factory functions, DOM manipulation).`,
      sourceUrl: 'https://github.com/dassaevtagle/Todo_App',
      demoUrl: 'https://dassaevtagle.github.io/Todo_App/',
      lgRow: true,
    },
    {
      name: 'Messenger form',
      image: RocketCode,
      description: `This was a test made in 2 days for a project I collaborated. It is a form simulating a messenger chat.
      It was written with React, Express, Tailwind.`,
      sourceUrl: 'https://github.com/dassaevtagle/rocketcode-test',
    },
    {
      name: 'Portfolio 2021',
      image: Portfolio2021,
      description: `This was my first portfolio I created. A single HTML, CSS and JS static project.
      A small Express server was used for the mail delivery in the contact form.`,
      demoUrl: 'http://dassaev-tagle-portfolio.herokuapp.com/',
    },
  ]


  const lightboxRef = useRef<LightboxHandle>(null);

  const openLightBox = (i: number) => {
    if (lightboxRef.current) {
      lightboxRef.current.openLightbox(i);
    }
  }

  return (
    <FullPageContainer>
      <Title>Projects</Title>
      <Grid>
        {
          projectsCollection.map((project, i) => (
            <Box key={i} {...project} onClick={() => openLightBox(i)}/>
          ))
        }
      </Grid>
      <Lightbox projects={projectsCollection} ref={lightboxRef}/>
    </FullPageContainer>
  )
}

export default Projects