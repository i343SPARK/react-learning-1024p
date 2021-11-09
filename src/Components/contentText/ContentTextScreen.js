import React from 'react'
import { ContentDescribt } from './ContentDescribt'
import { ContentHeader } from './ContentHeader'
import { ContentTematic } from './ContentTematic'

export function ContentTextScreen() {
    return (
        <>
            <ContentHeader/>
            <ContentDescribt/>
            <ContentTematic/>
        </>
    )
}
