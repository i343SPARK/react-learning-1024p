import React from 'react'

export const SlabsContent = ({topic}) => {
    return (
        <div className="slab-counter">
            <h2>{topic.noSlab}</h2>
            <div className="slab-sect-a">
                <article>
                    <h3>Contenido</h3>
                    <p>{topic.content}</p>
                    <span></span>
                </article>
                <article>
                    <h3>Actividad A</h3>
                    <p>{topic.activityA}</p>
                    <span></span>
                </article>
            </div>
            <div className="slab-sect-b">
                <article>
                    <h3>Actividad B</h3>
                    <p>{topic.activityB}</p>
                    <span></span>
                </article>
                <article>
                    <h3>AUTOEVALUACIÓN</h3>
                    <p>{topic.test}</p>
                    <span></span>
                </article>
            </div>
        </div>
    )
}