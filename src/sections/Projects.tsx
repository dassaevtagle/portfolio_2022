import FullPageContainer from "../components/FullPageContainer"
import { Box, Grid } from "../components/Grid"
import Title from "../components/Title"

import TorreTest from '../assets/img/torre-test.png'
import TodoApp from '../assets/img/todo-app.png'
import Restaurant from '../assets/img/restaurant-app.png'
import FancyTails from '../assets/img/fancytails.png'
import CostCalculator from '../assets/img/cost-calculator.png'

type Project = {
  image: string;
  name: string;
  lgColumn?: boolean;
  lgRow?: boolean;
}

function Projects() {
  const projectsCollection: Project[] = [
    {
      image: CostCalculator,
      name: 'Cost calculator',
      lgColumn: true,
    },
    {
      name: 'Torre test application',
      image: TorreTest,
      lgRow: true,
    },
    {
      name: 'Fancy Tails (Pet grooming)',
      image: FancyTails,
    },
    {
      name: 'Todo list',
      image: TodoApp,
      lgRow: true,
    },
    {
      name: 'Restaurant app',
      image: Restaurant,
    },
    {
      name: 'More on Github...',
      image: FancyTails,
    }
  ]
  return (
    <FullPageContainer>
      <Title>Projects</Title>
      <div className="mt-9">
        <Grid>
          {
            projectsCollection.map(({name, image, lgColumn, lgRow}, i) => (
              <Box key={i} image={image} lgColumn={lgColumn} lgRow={lgRow}>
              </Box>
            ))
          }
        </Grid>
      </div>
    </FullPageContainer>
  )
}

export default Projects