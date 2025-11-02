import logoDevlink from '../assets/images/logo-devlink.jpeg'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logoDevlink} alt="DevLink Logo" className="logo-img" />
          <span className="logo-text">DEVLINK</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projetos">Projetos</a>
          <a href="#membros">Membros</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
