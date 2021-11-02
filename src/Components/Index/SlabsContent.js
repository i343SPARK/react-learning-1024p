import React from 'react'

import start from '../../Assets/start.png'

import { Link } from 'react-router-dom'

export const SlabsContent = ({topic}) => {
    return (
        <div className="slab-counter">
            <h2>{topic.noSlab}</h2>
            <div className="slab-sect-a">
            <Link className="linkSlab" to="/">
                <article className="article-a1">
                    <h3 className="h3-slab">Contenido</h3>
                    <p className="p-slab">{topic.content}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            <Link className="linkSlab" to="/">
                <article className="article-b1">
                    <h3 className="h3-slab">Actividad A</h3>
                    <p className="p-slab">{topic.activityA}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            </div>
            <div className="slab-sect-b">
            <Link className="linkSlab" to="/">
                <article className="article-a2">
                    <h3 className="h3-slab">Actividad B</h3>
                    <p className="p-slab">{topic.activityB}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            <Link className="linkSlab" to="/">
                <article className="article-b2">
                    <h3 className="h3-slab">AUTOEVALUACIÓN</h3>
                    <p className="p-slab">{topic.test}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            </div>
        </div>
    )
}