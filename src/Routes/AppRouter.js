import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {IndexScreen} from '../Components/Index/IndexScreen'
import {ContentTextScreen} from '../Components/contentText/ContentTextScreen'


export default function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={IndexScreen} />
            <Route exact path='/content-text' component={ContentTextScreen}/>
            <Route render={() => <IndexScreen />} />
        </Switch>
    )
}
