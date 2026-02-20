import React from "react";
import { motion } from "motion/react"
import '../../css/Work.css'

let projetos =[
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
    {
        title:"Catecumenato",
        tipe:"Desenvolvimento de Sofwaer",
        about:"projeto desenvolvifo para coisas",
        tags:["nodejs","Express","JavaScript","HTML5","CSS"]
    },
]

function Works() {
    return (
        <section id="Works">
            <main>
                <div className="title">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >PROJETOS</motion.span>
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Trabalho já feitos</motion.h1>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Projetos desenvolvidos em minha carreira como programador.</motion.p>
                </div>
                <div className="cont-slide-porjects">

                    
                </div>
            </main>
        </section>
    )
}

export default Works;