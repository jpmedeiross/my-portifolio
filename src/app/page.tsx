import { Experience } from './components/header/experience/experience';
import { Header } from './components/header/header'

import "./components/header/styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
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
    </main>
  );
}
