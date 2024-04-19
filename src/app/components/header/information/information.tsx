import "./information.scss"

import { SectionTitle } from "../sectionTitle/section-title"

export function Infos(){
    return(
        <div className="infos">
          <SectionTitle text="Languages"/>
          <div className="languages-info">
            <span>EN - Avançado</span>
            <span>PT-BR - Linguagem Nativa</span>
          </div>
          <SectionTitle text="Education"/>
          <div className="educational-info">
            <span>Ciências e Tecnologia - Universidade Federal do Rio Grande do Norte</span>
          </div>
        </div>
    )
}