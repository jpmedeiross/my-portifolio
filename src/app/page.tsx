import { Experience } from './components/header/experience/experience';
import { Header } from './components/header/header'
import { Infos } from './components/header/information/information';
import { SocialBtns } from './components/header/social-btns/social-btns';

import "./components/header/styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Infos/>
        <div className="buttons">
          <SocialBtns/>
          <button className='btn-primary'>Entre em contato
          </button>
        </div>
    </main>
  );
}
