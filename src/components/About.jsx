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
                     <h3>Frontend & Design</h3>
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
                   <h3>Backend & DevOps</h3>
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
                    <p>Formado em Técnico em Programação de Jogos Digitais pelo Instituto Federal do Paraná (2022-2025), sou especializado em criar sistemas web robustos, automações inteligentes e agentes avançados que resolvem problemas reais de ponta a ponta. Trabalho principalmente com Next.js, React, Node.js, Python e N8N — tecnologias que uso para construir desde aplicações completas até fluxos autônomos capazes de operar em produção 24/7.

Ao longo dos projetos, desenvolvi experiência prática em design, scraping avançado, integrações com APIs, análise de dados, IA aplicada, automação empresarial e desenvolvimento full-stack. Meu foco é sempre o mesmo: entregar soluções eficientes, escaláveis e realmente úteis para quem usa.</p></div>
                <div className="div4"> 
                    <h3>Ilustração</h3>
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