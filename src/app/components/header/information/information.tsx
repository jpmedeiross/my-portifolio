import "./information.scss"

import { SectionTitle } from "../sectionTitle/section-title"

export function Infos(){
    return(
        <div className="infos">
          <SectionTitle text="Linguagens"/>
          <div className="languages-info">
            <span>EN - Avançado</span>
            <span>PT-BR - Linguagem Nativa</span>
          </div>
          <SectionTitle text="Educação"/>
          <div className="educational-info">
            <span>Ciências e Tecnologia - Universidade Federal do Rio Grande do Norte</span>
          </div>
        </div>
    )
}