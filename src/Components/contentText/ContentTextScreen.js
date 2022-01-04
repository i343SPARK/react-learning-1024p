import React from 'react'
import { ContentDescribt } from './ContentDescribt'
import { ContentHeader } from './ContentHeader'
import { ContentTematic } from './ContentTematic'
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router'

export function ContentTextScreen() {

    const {slabId} = useParams(); 

    const {data, loading, error} = useFetch(`content/contentBySlab/${slabId}`)

    return (
        <>
            <ContentHeader/>
            {
                (!loading) && (
                    <>
                    <ContentDescribt data = {data[0]}/>
                    <ContentTematic topic = {data[0]}/>
                    </>
                )
            }
        </>
    )
}
