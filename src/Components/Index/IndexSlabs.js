import React from 'react'

import Check from "../../Assets/check.png"
import Start from "../../Assets/start.png"
import Menor from "../../Assets/menorqueAzul.png"
import Flor from "../../Assets/flor.png"

import { SlabsContent } from './SlabsContent'
import { Link } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'

/*const dataSlab = [{
    noSlab:"Slab 1.",
    content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    activityA:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis",
    activityB:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis",
    test:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    check: Check,
    start: Start
}, {
     noSlab:"Slab 2.",
     content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
     activityA:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis",
     activityB:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis",
     test:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
     check: Check,
    start: Start
 }
]*/

export const IndexSlabs = () => {
    const {data: dataSlabs, loading: loadingSlabs, error: errorSlabs} =  useFetch(`slabs/slabsByCourseId/1`)
    console.log(dataSlabs)
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
