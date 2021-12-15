import React from 'react'
/*
No tenemos contenido al respecto.
*/

export function ContentDescribt(topic) {

    console.log(`Content > ` + topic)

    return (
        <section className="intro-text-content">
            <h1>topic.topic.title</h1>
            <p className="intro-p">topic.topic.description</p>
        </section>
    )
}
