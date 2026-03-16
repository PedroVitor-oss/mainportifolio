import { useState } from "react";
import { motion,useMotionValue} from "framer-motion";
import "../../css/Work.css";
import ProjectCard from "../lyouts/ProjectCard";

const projetos = [
    { title: "Catecumenato1", about: "Ferramenta avançada de análise estática que inspeciona automaticamente repositórios Python, identificando problemas de qualidade, código duplicado, complexidade excessiva e oportunidades de refatoração. Processamento 100% local sem dependências externas.", tags: ["Node.js", "Express", "JS"] },
    { title: "Catecumenato2", about: "Projeto desenvolvido para coisas", tags: ["Node.js", "Express", "JS"] },
    { title: "Catecumenato3", about: "Projeto desenvolvido para coisas", tags: ["Node.js", "Express", "JS"] },
    { title: "Catecumenato4", about: "Projeto desenvolvido para coisas", tags: ["Node.js", "Express", "JS"] },
];
const DRAG_BUFFER = 50;

export default function Works() {
    const [dragging, setDragging] = useState(false);
    const [projectIndex, setProjectIndex] = useState(0);

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true);
        console.log("start drag");
    }
    const onDragEnd = () => {
        setDragging(false);
        console.log("end drag");
        const x = dragX.get();
        if (x <= - DRAG_BUFFER && projectIndex<projetos.length-1) {
            setProjectIndex(pv => pv + 1);
        } else if (x >= DRAG_BUFFER  && projectIndex>0) {
            setProjectIndex(pv => pv - 1);

        }


    }

    return (
        <section id="Works">
            <main>
                <div className="title">
                    <span className="tracking-widest">PROJETOS</span>
                    <h1 className="text-4xl">Trabalhos já feitos</h1>
                    <p>Projetos desenvolvidos ao longo da minha carreira.</p>
                </div>
                <div
                    className="w-full h-80 flex-1 overflow-hidden">


                    <div className="cont-slide-projects">
                        <div
                            className="relative h-250  0"
                        >
                            <motion.div
                                drag="x"
                                dragConstraints={{
                                    left: 0,
                                    right: 0
                                }}
                                style={{
                                    x: dragX,
                                    transition:'0.2s'
                                }}
                                animate={{
                                    translateX: `-${projectIndex * 100}%`,
                                    
                                }}
                                
                                onDragStart={onDragStart}
                                onDragEnd={onDragEnd}
                                
                                className="flex items-center content-center cursor-grab active:cursor-grabbing "
                            >
                                <Projetos projectIndex={projectIndex}></Projetos>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
const Projetos = ({ projectIndex }) => {
    console.log("projectIndex: ",projectIndex)
    return (
        <>
            {projetos.map((data, id) => (
                <motion.div
                    key={id}
                    animate={{
                        opacity: id === projectIndex ? 1 : 0.7,
                        scale: id === projectIndex ? 1 : 0.95,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                    className="flex-shrink-0 w-full"
                >
                    <ProjectCard
                        data={data}
                        title={data.title}
                        about={data.about}
                        tags={data.tags}
                    />
                </motion.div>
            ))}
        </>
    );
};