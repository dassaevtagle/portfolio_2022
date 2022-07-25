import '../assets/scss/components/Title.scss';

type TitleProps = {
  marginTop?: boolean;
  children: string;
}

function Title ({marginTop = true, children}: TitleProps) {
  return <h1 className={"title reiju" + (marginTop ? 'mt-36' : '')}>{children}</h1>
}

export default Title