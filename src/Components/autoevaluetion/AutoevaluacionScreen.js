import React from 'react'
import { AutoevaluacionDescribt } from './AutoevaluacionDescribt'
import { ContentHeader } from './ContentHeader'
import { AutoevaluacionContent } from './AutoevaluacionContent'

export function AutoevaluacionScreen() {
    return (
        <>
            <ContentHeader/>
            <AutoevaluacionDescribt/>
            <AutoevaluacionContent/>
        </>
    )
}
