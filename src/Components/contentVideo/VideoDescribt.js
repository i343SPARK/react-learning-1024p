import React from 'react'

export function VideoDescribt(topic) {
    return (
        <section className="intro-text-content">
            <h1>Propósito</h1>
            <p className="intro-p">{topic.topic.description}</p>
        </section>
    )
}
