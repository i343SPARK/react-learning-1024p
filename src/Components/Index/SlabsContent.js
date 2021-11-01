import React from 'react'

export const SlabsContent = ({topic}) => {
    return (
        <div className="slab-counter">
            <h2>{topic.noSlab}</h2>
            <div className="slab-sect-a">
                <article className="article-a1">
                    <h3 className="h3-slab">Contenido</h3>
                    <p className="p-slab">{topic.content}</p>
                    <span></span>
                </article>
                <article className="article-b1">
                    <h3 className="h3-slab">Actividad A</h3>
                    <p className="p-slab">{topic.activityA}</p>
                    <span></span>
                </article>
            </div>
            <div className="slab-sect-b">
                <article className="article-a2">
                    <h3 className="h3-slab">Actividad B</h3>
                    <p className="p-slab">{topic.activityB}</p>
                    <span></span>
                </article>
                <article className="article-b2">
                    <h3 className="h3-slab">AUTOEVALUACIÓN</h3>
                    <p className="p-slab">{topic.test}</p>
                    <span></span>
                </article>
            </div>
        </div>
    )
}