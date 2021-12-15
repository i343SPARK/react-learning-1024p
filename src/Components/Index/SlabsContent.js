import React from 'react'

import start from '../../Assets/start.png'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const SlabsContent = ({topic}) => {
    console.log(topic)

    return (
        <>
        <div className="slab-counter">
            <h2>{topic.slab.title}</h2>
            <div className="slab-sect-a">
            <Link className="linkSlab" to="/content-text">
                <article className="article-a1">
                    <h3 className="h3-slab">Contenido</h3>
                    <p className="p-slab">{topic.content[0].description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            <Link className="linkSlab" to="/Activity-A">
                <article className="article-b1">
                    <h3 className="h3-slab">Actividad A</h3>
                    <p className="p-slab">{topic.activities[0].description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            </div>
            <div className="slab-sect-b">
            <Link className="linkSlab" to="/activity-B">
                <article className="article-a2">
                    <h3 className="h3-slab">Actividad B</h3>
                    <p className="p-slab">{topic.activities[1]?.description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            <Link className="linkSlab" to="/autoevaluation">
                <article className="article-b2">
                    <h3 className="h3-slab">AUTOEVALUACIÓN</h3>
                    <p className="p-slab">{topic.autoevaluation[0].description}</p>
                    <img className="icon" src={start} alt="icon"/>
                </article>
            </Link>
            </div>
        </div>
        </>
    )
}