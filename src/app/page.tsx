import { Header } from './components/header/header'

import "./components/header/styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div className="experience">
        <h3>Experiência</h3>
        <p>Estágio TI - Secretaria de Mobilidade Urbana (STTU)</p>
        <p>Atendendo demandas relacionadas a hardware e software, desenvolvimento de um sistema de chamados em HTML, CSS e JavaScript.</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Tecnologias</h3>
          <div className="languages-info">
            <span>EN - Avançado</span>
            <span>PT-BR - Linguagem Nativa</span>
          </div>
          <h3>Educação</h3>
          <div className="educational-info">
            <span>Ciências e Tecnologia - Universidade Federal do Rio Grande do Norte</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Entre em contato</button>
        </div>
      </div>
    </main>
  );
}
