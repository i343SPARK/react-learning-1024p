import React from 'react'
import { IndexDescription } from './IndexDescription'
import { IndexHero } from './IndexHero'
import { IndexSlabs } from './IndexSlabs'
import { useFetch } from '../../Hooks/useFetch'


export const IndexScreen = () => {
    
    const {data, loading, error} = useFetch(`courses/courseById/1`)
    return (
        <>
        {(!loading) &&(
            <>
            <IndexHero title = {data[0].title} description = {data[0].description}/>
            <IndexDescription introducction = {data[0].intro}/>
            <IndexSlabs/>
            </>
        )}
        </>
    )
}