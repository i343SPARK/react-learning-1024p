import React from 'react'
import { IndexDescription } from './IndexDescription'
import { IndexHero } from './IndexHero'
import { IndexSlabs } from './IndexSlabs'

export const IndexScreen = () => {
    return (
        <>
            <IndexHero/>
            <IndexDescription/>
            <IndexSlabs/>
        </>
    )
}