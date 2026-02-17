import { useState } from 'react'

import '../css/About.css'

function About() {
    return (
        <section id="About">
            <div className="title">
                <span>SOBRE</span>
                <h1>Um dev versátil</h1>
            </div>
            <div className="grid-container">
                <div className="div1">
                    <h3>
                        <span className="card-icon">✨</span>
                        Frontend & Design</h3>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vue.Js</li>
                        <li>Next.js</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
                <div className="div2">
                    <h3>
                          <span className="card-icon">✨</span>

                        Backend & DevOps</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>C# .Net</li>
                        <li>Java Spring</li>
                        {/* <li>Python</li> */}
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        {/* <li>N8N</li> */}
                        <li>Docker</li>
                    </ul>
                </div>
                <div className="div3">
                    <h3>Visão geral</h3>
                    <p className='about-text'>
                        <span className="icon">EU</span>
                       sou formado em Desenvolvimento de Jogos Digitais (2022–2025), atualmente curso Análise e Desenvolvimento de Sistemas (2026–2028), com foco na criação de sistemas robustos e bem estruturados. Atuo principalmente no desenvolvimento back-end, com sólida base em full stack, trabalhando com C#, Node.js e React para construir aplicações eficientes, escaláveis e de fácil manutenção. Ao longo da minha formação e projetos práticos, desenvolvi experiência em lógica de sistemas, arquitetura de aplicações, integração entre front-end e back-end e resolução de problemas reais através de software. Meu objetivo é criar soluções confiáveis, bem organizadas e realmente úteis, sempre priorizando qualidade técnica e boas práticas de desenvolvimento.
                       </p></div>
                <div className="div4">
                    <h3>Ilustração</h3>
                    <ul>
                        <li>Blender</li>
                        <li>Inkscape</li>
                        <li>Krita</li>
                    </ul>
                </div>
                <div className="div5">
                    <h3></h3> </div>
                <div className="div6">
                    <h3>Formação</h3>
                    <ul>
                        <li>
                            <h4>Analise e Desenvolvimento de Sistemas</h4>
                            <p>Universidade Positivo (2026-2028)</p>
                        </li>
                        <li>
                            <h4>Técnico em Programação de Jogos Digitais</h4>
                            <p>Instituto Federal do Paraná (2022-2025)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About