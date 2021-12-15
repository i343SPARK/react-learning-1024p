import React from 'react'
import { ContentDescribt } from './ContentDescribt'
import { ContentHeader } from './ContentHeader'
import { ContentTematic } from './ContentTematic'
import { useFetch } from '../../Hooks/useFetch'

export function ContentTextScreen() {

    const {data, loading, error} = useFetch(`content/contentBySlab/1`)

    return (
        <>
            <ContentHeader/>
            {
                (!loading) && (
                    <ContentDescribt topic = {data[0]}/>,
                    <ContentTematic topic = {data[0]}/>
                )
            }
        </>
    )
}
