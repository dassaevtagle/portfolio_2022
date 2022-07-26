import '../assets/scss/components/Title.scss';

function Title ({children}: {children: string}) {
  return <h1 className="title reiju">{children}</h1>
}

export default Title