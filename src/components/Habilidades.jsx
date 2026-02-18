import { } from 'react'
import '../css/Habilidades.css';

const skills = [
    {
        title: "Resolução de Problemas",
        icon: "fa-regular fa-lightbulb",
        text: "Capacidade analítica para identificar, diagnosticar e resolver problemas complexos de forma eficiente e criativa."
    },
    {
        title: "Trabalho em Equipe",
        icon: "fa-solid fa-people-group",
        text: "Experiência colaborativa em projetos multidisciplinares, comunicação efetiva e liderança técnica."
    },
    {
        title: "Gestão de Projetos",
        icon: "fa-solid fa-diagram-project",
        text: "Planejamento, organização e execução de projetos de software com foco em prazos e qualidade."
    },
    {
        title: "Aprendizado Contínuo",
        icon: "fa-solid fa-graduation-cap",
        text: "Autodidatismo e adaptabilidade para acompanhar novas tecnologias e tendências do mercado."
    },
    {
        title: "Comunicação Técnica",
        icon: "fa-solid fa-comments",
        text: "Habilidade para explicar conceitos complexos de forma clara para diferentes públicos e stakeholders."
    },
    {
        title: "Análise de Dados",
        icon: "fa-solid fa-chart-simple",
        text: "Interpretação de métricas, geração de insights e tomada de decisões baseada em dados."
    },
    {
        title: "Documentação Técnica",
        icon: "fa-solid fa-file-lines",
        text: "Criação de documentação clara, manuais de usuário e especificações técnicas detalhadas."
    },
    {
        title: "Otimização de Performance",
        icon: "fa-solid fa-gauge-high",
        text: "Identificação de gargalos e implementação de melhorias para aumentar eficiência e velocidade."
    }
];
function CardInfoHabi({ icon, title, text }) {
    return (
        <div className="card-info">
            <div className="title">
                <span className="icon"><i className={icon}></i></span>
                <h3>{title}</h3>
            </div>
            <div className="info-text">
                <div className="border-top-rigth"></div>
                <p>{text}</p>
                <div className="border-bottom-left"></div>
            </div>
        </div>
    )
}
const RenderCardsInfo = skills.map((skill, index) => (
    <CardInfoHabi 
        key={index}
        icon={skill.icon} 
        title={skill.title} 
        text={skill.text} 
    />
));
function Habilidades() {
    return (
        <section id="Habilidades">
            <main>

                <div className="title">
                    <span>COMPETENCIAS</span>
                    <h1>Habilidade</h1>
                    <p>Minhas abilidades desenvolvidas para agragar valor aos projetos trabalhos em equipe</p>
                </div>
                <div className="cont-cards-info">
                    {/* <CardInfoHabi title="Resolução de Problemas" icon="fa-regular fa-lightbulb" text="Capacidade analítica para identificar, diagnosticar e resolver problemas complexos de forma eficiente e criativa." /> */}
                    {RenderCardsInfo}
                </div>
            </main>

        </section>
    );
}

export default Habilidades;