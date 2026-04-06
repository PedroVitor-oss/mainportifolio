import { useState } from 'react'

import '../../css/Header.css'

function toggleMenu() {
    const routes = document.querySelector('.routes')
    routes.classList.toggle('active')
}

function Header() {

    return (
        <>
            <header>
                <button onClick={toggleMenu}>III</button>
                <div className="logo">
                    <h1>Pedro Vitor</h1>
                    
                </div>
                <div className="routes">
                    <a onClick={toggleMenu} href="#">Inicio</a>
                    <a onClick={toggleMenu} href="#About">Sobre</a>
                    <a onClick={toggleMenu} href="#Habilidades">Habilidades</a>
                    <a onClick={toggleMenu} href="#Works">Trabalhos</a>
                    <a onClick={toggleMenu} href="#Contact">Contato</a>
                </div>
            </header>
        </>
    )
}

export default Header
