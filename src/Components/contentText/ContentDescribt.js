import React from 'react'
/*
No tenemos contenido al respecto.
*/

export function ContentDescribt(data) {

    console.log(`Content > ` + data)
    
    return (
        <section className="intro-text-content">
            <h1>{data.data.title}</h1>
            <p className="intro-p">{data.data.description}</p>
        </section>
    )
}