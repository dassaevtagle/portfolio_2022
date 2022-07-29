import FullPageContainer from "../components/FullPageContainer"
import { Box, Grid } from "../components/Grid"
import { useRef } from "react"
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
      sourceUrl: 'https://github.com/dassaevtagle/cost-calculator',
      demoUrl: 'https://calculador-costos.herokuapp.com/',
      lgColumn: true,
    },
    {
      name: 'Torre test application',
      image: TorreTest,
      sourceUrl: 'https://github.com/dassaevtagle/employee-info',
      demoUrl: 'https://torreco-test.herokuapp.com/',
      lgRow: true,
    },
    {
      name: 'Fancy Tails (Pet grooming)',
      image: FancyTails,
      sourceUrl: 'https://github.com/dassaevtagle/veterinaria-huesitos',
      demoUrl: 'https://dassaevtagle.github.io/veterinaria-huesitos/',
    },
    {
      name: 'Todo list',
      image: TodoApp,
      sourceUrl: 'https://github.com/dassaevtagle/Todo_App',
      demoUrl: 'https://dassaevtagle.github.io/Todo_App/',
      lgRow: true,
    },
    {
      name: 'Messenger form',
      image: RocketCode,
      sourceUrl: 'https://github.com/dassaevtagle/rocketcode-test',
    },
    {
      name: 'Portfolio 2021',
      image: Portfolio2021,
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
            <Box key={i} {...project} onClick={() => openLightBox(i)}>
            </Box>
          ))
        }
      </Grid>
      <Lightbox projects={projectsCollection} ref={lightboxRef}/>
    </FullPageContainer>
  )
}

export default Projects