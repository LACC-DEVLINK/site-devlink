import '../App.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaArrowLeft } from 'react-icons/fa'

function Members() {
  // Dados dos membros da diretoria
  const orientador = {
    name: "Prof. Ermínio Augusto Ramos da Paixão",
    role: "Orientador",
    github: "https://github.com/ErminioRamos",
    linkedin: "https://www.linkedin.com/in/ermínio-paixão-428344223"
  }

  const diretoria = [
    {
      name: "Rafael Góes",
      role: "Presidente",
      github: "https://github.com/rafaelgoesti",
      linkedin: "https://www.linkedin.com/in/rafael-góes-duarte-10709332a/"
    },
    {
      name: "Luan Carvalho",
      role: "Vice-Presidente",
      github: "https://github.com/Luan-carvalho-b",
      linkedin: "https://www.linkedin.com/in/luan-carvalho-496a72197/"
    },
    {
      name: "Alberto Monteiro",
      role: "Diretor Acadêmico",
      github: "https://github.com/AlbertoMJr0",
      linkedin: "https://www.linkedin.com/in/alberto-junior-4776ab2a5/"
    },
    {
      name: "Kai Márcio",
      role: "Diretor Financeiro",
      github: "https://github.com/Kaioz47",
      linkedin: "https://www.linkedin.com/in/kaio-márcio-287885322"
    },
    {
      name: "Breno Silva",
      role: "Diretoria Científica",
      github: "https://github.com/BrenoFerreira01",
      linkedin: "https://www.linkedin.com/in/breno-luiz-ferreira"
    },
    {
      name: "Waldo César Soares",
      role: "Diretoria Científica",
      github: "https://github.com/Cesar0399",
      linkedin: "https://www.linkedin.com/in/cesar-souza-860933375"
    },
    {
      name: "Dan Cezar",
      role: "Diretoria de Marketing",
      github: "https://github.com/DanZR0",
      linkedin: "https://www.linkedin.com/in/dan-carvalho-7a9532329"
    },
    {
      name: "Rafael Rocha",
      role: "Diretoria de Marketing",
      github: "https://github.com/Rafaremo33",
      linkedin: "https://www.linkedin.com/in/rafael-rocha-467a442a6"
    },
    {
      name: "Luiz Martins",
      role: "Diretoria de Marketing",
      github: "https://github.com/luispeky",
      linkedin: "https://www.linkedin.com/in/eduardo-martins-bb429035b"
    }
  ]

  const membros = [
    // Adicione aqui os membros regulares
    {
        name: "Helena Soares",
        role: "Membro",
        github: "https://github.com/helenab20",
        linkedin: "https://linkedin.com/in/helena-brito-50487b30b"
    },
    {
        name: "Wallace Ney",
        role: "Membro",
        github: "https://github.com/wallacesantos07",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Matheus Barbosa",
        role: "Membro",
        github: "https://github.com/MatheusBarbosaDeAndrade",
        linkedin: "https://linkedin.com/in/matheusbarbosa2005"
    },
    {
        name: "Sean Max",
        role: "Membro",
        github: "https://github.com/Kaiser-sm",
        linkedin: "https://linkedin.com/in/sean-max-877632329"
    },
    {
        name: "Eros Souza",
        role: "Membro",
        github: "https://github.com/erosscoles-jpg",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Diego Prestes",
        role: "Membro",
        github: "https://github.com/Diegocohen03",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Felipe Teles",
        role: "Membro",
        github: "https://github.com/felipeteles",
        linkedin: "https://linkedin.com/in/felipe-teles-8771a2395"
    },
    {
        name: "Samuel Maciel",
        role: "Membro",
        github: "https://github.com/samuelmacielcs-afk",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Anthony Gabriel",
        role: "Membro",
        github: "https://github.com/Anthony2038",
        linkedin: "https://linkedin.com/in/anthony-cardoso-0b23b2349"
    },
    {
        name: "Marcus Paulo",
        role: "Membro",
        github: "https://github.com/marcusbatistadev",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "André Marques",
        role: "Membro",
        github: "https://github.com/AndreyMarquesDev",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Igor Alexsandro",
        role: "Membro",
        github: "https://github.com/DEV-4LEX",
        linkedin: "https://linkedin.com/in/igor-alexsandro-igor-b8240b2a1"
    },
  ]

  return (
    <div className="app">
      <section className="members-page">
        <div className="container">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Voltar para Home
          </Link>
          
          <h1 className="page-title">Nossa Equipe</h1>
          <p className="page-subtitle">Conheça todos os membros da DevLink</p>

          {/* Orientador */}
          <div className="members-section">
            <h2 className="section-title">Orientador</h2>
            <div className="team-grid-single">
              <div className="team-member">
                <div className="member-photo">
                  <img 
                    src={`https://github.com/${orientador.github.split('/').pop()}.png`}
                    alt={orientador.name} 
                    className="member-photo-img" 
                  />
                </div>
                <h3 className="member-name">{orientador.name}</h3>
                <p className="member-role">{orientador.role}</p>
                <div className="member-socials">
                  <a href={orientador.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={orientador.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Diretoria */}
          <div className="members-section">
            <h2 className="section-title">Diretoria</h2>
            <div className="team-grid">
              {diretoria.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-photo">
                    <img 
                      src={member.github !== "#" ? `${member.github}.png` : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=00233F&color=00D9FF&size=200`}
                      alt={member.name} 
                      className="member-photo-img" 
                    />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-socials">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Membros */}
          {membros.length > 0 && (
            <div className="members-section">
              <h2 className="section-title">Membros</h2>
              <div className="team-grid">
                {membros.map((member, index) => (
                  <div key={index} className="team-member">
                    <div className="member-photo">
                      <img 
                        src={member.github !== "#" ? `${member.github}.png` : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=00233F&color=00D9FF&size=200`}
                        alt={member.name} 
                        className="member-photo-img" 
                      />
                    </div>
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="member-socials">
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                        <FaGithub />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Members
