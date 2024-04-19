import Image from "next/image";

import "./header.scss"

export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Olá, meu nome é João!</h1>
          <h2>Frontend Developer</h2>
        </div>
        <Image
          src="/joao.png"
          alt="João Pedro"
          width={300}
          height={400}
          priority
        />
      </div>
    )
}