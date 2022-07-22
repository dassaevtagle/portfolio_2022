import FullPageContainer from "../components/FullPageContainer"
import { Box, Grid } from "../components/Grid"

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
      lgColumn: true 
    },
    {
      name: 'Torre test application',
      image: TorreTest,
      lgRow:true
    },
    {
      name: 'Fancy Tails (Pet grooming)',
      image: FancyTails,
      lgRow: true
    },
    {
      name: 'Todo list',
      image: TodoApp
    },
    {
      name: 'Restaurant app',
      image: Restaurant
    },
    {
      name: 'More on Github...',
      image: FancyTails
    }
  ]
  return (
    <FullPageContainer>
      <Grid>
        {
          projectsCollection.map(({image, name, lgColumn, lgRow}) => (
            <Box lgColumn={lgColumn} lgRow={lgRow}>
              <div style={{background: `url('${image}') top center`, height: '100%'}}>
                {name}
              </div>
            </Box>
          ))
        }
      </Grid>
    </FullPageContainer>
  )
}

export default Projects