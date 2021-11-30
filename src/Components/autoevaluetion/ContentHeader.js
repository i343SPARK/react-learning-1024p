import React from 'react'
import header from '../../Assets/headercont.png'
import cima from '../../Assets/CIMA.png'

import { Link } from 'react-router-dom'

export function ContentHeader() {
    return (
        <section className="cont-header">
            <img src={header} alt="header"/>
            <div className="header-inside">
            <Link to="/">
                <img src={cima} alt="cima"/>
            </Link>
            </div>
        </section>
    )
}
