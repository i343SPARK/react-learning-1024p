import React from 'react'
import Bgimg from "../../Assets/HeroBg.png"

export const IndexHero = () => {
    return (
        <section className="background-hero">
            <img className="hero-bg" src={Bgimg} alt="Hero-Cima"/>
            <div className="text-hero">
                <h1>Administración de ventas</h1>
                <p className="phero">Bienvenido a microlearning de adminstración de ventas, participa en esta experiencia donde desarrollaras aprendizajes únicos para las ventas.</p>
            </div>
        </section>
    )
}
