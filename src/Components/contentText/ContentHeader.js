import React from 'react'
import header from '../../Assets/headercont.png'
import cima from '../../Assets/CIMA.png'

export function ContentHeader() {
    return (
        <section className="cont-header">
            <img src={header} alt="header"/>
            <div className="header-inside">
                <img src={cima} alt="cima"/>
            </div>
        </section>
    )
}
