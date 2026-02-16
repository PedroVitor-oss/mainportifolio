import {useState} from 'react'
import '../css/Home.css'
import profileImage from '../assets/pedro-vitor.png'
function Home() {
  return (
    <section id="home">
        <div className="cont-text">
            <span className="profession">Desenvolvedor Full-Stack | C# & JavaScript/TypeScript | Interfaces e Sistemas </span>
            <h1 className="name">Pedro Vitor</h1>
            <h1 className="last-name">Ferreira dos Santos</h1>
            <p className="about-me">Desenvolvedor Full-Stack com foco em criar soluções eficientes e escaláveis utilizando tecnologias modernas como VueJS, NodeJS, C# e JavaScript/TypeScript.</p>
            <div className="routes">
                <a href="#works">Trabalhos </a>
                <a href="#contact">Contato</a>
            </div>
        </div>
        <div className="cont-img">
            <div className="mold">
            <img src={profileImage} alt="Profile Image" />

            </div>
        </div>
    
    </section>
  )
}

export default Home