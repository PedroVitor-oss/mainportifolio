import { useState } from 'react'

import '../css/Header.css'

function Header() {

    return (
        <>
            <header>
                <div className="logo">
                    <h1>Pedro Vitor</h1>
                </div>
                <div className="routes">
                    <a href="#">Inicio</a>
                    <a href="#About">Sobre</a>
                    <a href="#Habilidades">Habilidades</a>
                    <a href="#Works">Trabalhos</a>
                    <a href="#Contact">Contato</a>
                </div>
            </header>
        </>
    )
}

export default Header
