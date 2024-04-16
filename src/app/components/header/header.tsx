import Image from "next/image";
export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Olá, meu nome é João!</h1>
          <h2>Frontend Developer</h2>
        </div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    )
}