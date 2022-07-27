import '../assets/scss/sections/Header.scss';

function Header() {
  return (
    <header className="h-wrapper reiju">
      <div className="mr-auto ml-4 text-3xl"><span className="text-highlight">T</span>agle</div>
      <div className="uppercase">About</div>
      <div className="uppercase">Projects</div>
      <div className="uppercase">Contact</div>
    </header>
  )
}

export default Header;