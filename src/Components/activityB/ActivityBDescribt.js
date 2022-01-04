import React from 'react'

export function ActivityBDescribt(data) {
    return (
        <section className="intro-text-content">
            <h1>{data.data.title}</h1>
            <p className="intro-p">{data.data.description}</p>
        </section>
    )
}
