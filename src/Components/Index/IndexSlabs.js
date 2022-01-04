import React from 'react'
import Menor from "../../Assets/menorqueAzul.png"
import Flor from "../../Assets/flor.png"
import { SlabsContent } from './SlabsContent'
import { Link } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'

export const IndexSlabs = () => {
    
    const {data: dataSlabs, loading: loadingSlabs, error: errorSlabs} =  useFetch(`slabs/slabsByCourseId/1`)
    
    return (
        <section className="Slab-section">
            <div className="img-cont-des">
                <img className="menor" src={Menor} alt="menor"/>
                <img className="flor" src={Flor} alt="flor"/>
            </div>
            {(!loadingSlabs) 
            && (dataSlabs.map(data => (<SlabsContent topic={data} />)))}
            <div className="start-cont-buttom">
                <Link className="start-buttom" to="/">FINALIZAR</Link>
            </div>
        </section>
    )
}
