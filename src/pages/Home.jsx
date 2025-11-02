import '../App.css'
import mascoteDevlink from '../assets/images/mascote.png'
import logo2Bis from '../assets/images/logo-2bis.jpeg'
import { FaCog, FaFolder, FaCube, FaDatabase, FaGlobe, FaCode, FaBrain, FaPalette, FaMobileAlt } from 'react-icons/fa'

function Home() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Sobre a DevLink</h1>
            <p className="hero-text">
              A DevLink é a Liga Acadêmica de Ciência da Computação dedicada a promover inovação, aprendizado e integração entre estudantes apaixonados por tecnologia. Buscamos desenvolver projetos práticos, realizar eventos enriquecedores e fortalecem o conhecimento prático de nossos membros.
            </p>
          </div>
          <div className="hero-image">
            <img src={mascoteDevlink} alt="DevLink Robot Mascote" className="robot-illustration-img" />
            <div className="hero-icons">
              <div className="hero-icon"><FaCog /></div>
              <div className="hero-icon"><FaFolder /></div>
              <div className="hero-icon"><FaCube /></div>
              <div className="hero-icon"><FaDatabase /></div>
              <div className="hero-icon"><FaGlobe /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section className="journey">
        <div className="container">
          <h2 className="section-title">Nossa Jornada</h2>
          <p className="section-subtitle">[Substituir com um resumo sobre a origem e propósito da liga]</p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <div className="container">
          <div className="divider-line"></div>
        </div>
      </div>

      {/* O Que Fazemos & Parcerias */}
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-content">
            <div className="section-header">
              <h2 className="section-title">O Que Fazemos</h2>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon"><FaCode /></div>
                <h3>Desenvolvimento de Software</h3>
              </div>
              <div className="card">
                <div className="card-icon"><FaBrain /></div>
                <h3>Inteligência Artificial</h3>
              </div>
              <div className="card">
                <div className="card-icon"><FaPalette /></div>
                <h3>Design e UX/UI</h3>
              </div>
              <div className="card">
                <div className="card-icon"><FaMobileAlt /></div>
                <h3>Aplicações mobile</h3>
              </div>
            </div>
          </div>

          <div className="partnerships">
            <div className="partnerships-content">
              <h2 className="section-title">Parcerias</h2>
              <div className="partnership-item">
                <div className="partnership-icon">
                  <img src={logo2Bis} alt="Logo 2º BIS" className="partnership-logo" />
                </div>
                <div className="partnership-text">
                  <h3>Segundo Batalhão de Infantaria de Selva (2º BIS)</h3>
                  <p>Desenvolvemos um software completo para gerenciamento de militares, incluindo módulo próprio de check-in.</p>
                </div>
              </div>
              <div className="partnership-placeholder">
                <p>Em breve</p>
              </div>
              <div className="partnership-placeholder">
                <p>Em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <div className="container">
          <div className="divider-line"></div>
        </div>
      </div>

      {/* Nossa Equipe */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Nossa equipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="https://github.com/rafaelgoesti.png" alt="Rafael Góes" className="member-photo-img" />
              </div>
              <h3 className="member-name">Rafael Góes</h3>
              <p className="member-role">Presidente</p>
              <div className="member-socials">
                <a href="https://github.com/rafaelgoesti" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://www.linkedin.com/in/rafael-g%C3%B3es-duarte-10709332a/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="https://github.com/Luan-carvalho-b.png" alt="Luan Levi" className="member-photo-img" />
              </div>
              <h3 className="member-name">Luan Levi</h3>
              <p className="member-role">Vice-Presidente</p>
              <div className="member-socials">
                <a href="https://github.com/Luan-carvalho-b" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://www.linkedin.com/in/luan-carvalho-496a72197/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="https://github.com/AlbertoMJr0.png" alt="Alberto Monteiro" className="member-photo-img" />
              </div>
              <h3 className="member-name">Alberto Monteiro</h3>
              <p className="member-role">Diretor Acadêmico</p>
              <div className="member-socials">
                <a href="https://github.com/AlbertoMJr0" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://www.linkedin.com/in/alberto-junior-4776ab2a5/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              </div>
            </div>
          </div>
          <button className="btn-members">Ver todos os membros</button>
        </div>
      </section>
    </div>
  )
}

export default Home
