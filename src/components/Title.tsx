import './Title.scss'

type TitleProps = {
  children: string;
}

function Title ({children}: TitleProps) {
  return <h1 className="title">{children}</h1>
}

export default Title