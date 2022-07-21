import { ReactNode } from "react";
import FullPageContainer from "./common/FullPageContainer"
import './Projects.scss'

type BoxProps = {
  rows?: number;
  columns?: number;
  children: ReactNode;
}

//Rows and columns will span only after lg breakpoint.
function Box({rows = 1, columns = 1, children}: BoxProps) {
  const classes = `p-grid_box lg:col-span-${columns} lg:row-span-${rows}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

type Project = {
  url: string;
  name: string;
  columns?: number;
  rows?: number;
}

function Projects() {
  const projectsCollection: Project[] = [
    {
      url: '../assets/img/cost-calculator.png',
      name: 'Cost calculator',
      columns: 2  
    },
    {
      name: 'Torre test application',
      url: '../assets/img/torre-test.png',
      rows: 2
    },
    {
      name: 'Fancy Tails (Pet grooming)',
      url: '../assets/img/fancytails.png',
      rows: 2
    },
    {
      name: 'Todo list',
      url: '../assets/img/fancytails.png',
    },
    {
      name: 'Restaurant app',
      url: '../assets/img/restaurant-app.png'
    },
    {
      name: 'More on Github...',
      url: '.../fakeurl'
    }
  ]
  return (
    <FullPageContainer>
      <div className="p-grid">
        {
          projectsCollection.map(({url, name, columns, rows}) => (
            <Box columns={columns} rows={rows}>{name}</Box>
          ))
        }
      </div>
    </FullPageContainer>
  )
}

export default Projects