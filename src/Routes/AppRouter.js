import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {IndexScreen} from '../Components/Index/IndexScreen'
import {ContentTextScreen} from '../Components/contentText/ContentTextScreen'
import { ContentVideoScreen } from '../Components/contentVideo/ContentVideoScreen'
import { ActivityAScreen } from '../Components/activityA/ActivityAScreen'


export default function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={IndexScreen} />
            <Route exact path='/content-text' component={ContentTextScreen}/>
            <Route exact path='/content-video' component={ContentVideoScreen} />
            <Route exact path='/Activity-A' component={ActivityAScreen} />
            <Route render={() => <IndexScreen />} />
        </Switch>
    )
}
