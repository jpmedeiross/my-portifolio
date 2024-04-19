import Image from "next/image";

import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>Estágio TI - Secretaria de Mobilidade Urbana (STTU)</p>
            <p>Atendendo demandas relacionadas a hardware e software, desenvolvimento de um sistema de chamados em HTML, CSS e JavaScript.</p>
            <div className="experience-time">
                <div>
                    <Image
                        src="/js.png"
                        alt="js"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/react.png"
                        alt="react"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/typescript.png"
                        alt="ts"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/sass.png"
                        alt="sass"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}