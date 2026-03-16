import React from "react";
import { } from 'motion/react'
import '../../css/ProjectCard.css';
import profileImage from '../../assets/pedro-vitor.png'

function ProjectCard({ data, title, about, tags }) {
    const tagsRender = tags.map((text, id) => <span className="bg-gray-300 text-gray-700 px-3 py-2 rounded-2xl mx-1 text-base" key={id}>{text}</span>);
    return (
        <div
            className="project-card aspect-video w-full shrink-0 rounded-b-xl scale-98"
        >
            <div
                className="flex-1 flex flex-row h-40 "
            >
                <div className="w-60 px-2">
                    <img
                        className="w-20 rounded-3xl"
                        src={profileImage} alt="" />
                </div>
                <div>
                    <h2 className="font-bold  text-lg" >{title}</h2>
                    <p>{about}</p>

                </div>
            </div>
            <hr className="border-gray-400 w-90%" />
            <div className="flex flex-row justify-around mt-5">
                <div>
                    {tagsRender}

                </div>
                <button className="px-3 py-2 bg-neutral-800 text-neutral-50 rounded-2xl">Ver mais</button>

            </div>
        </div>

    )
}

export default ProjectCard;