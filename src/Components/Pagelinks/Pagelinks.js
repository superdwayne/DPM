import React from 'react'
import { Route, Link} from "react-router-dom";
import loadable from '@loadable/component'

const Applications = loadable(() => import('../Applications'))
const Playground = loadable(() => import('../Playground'))
const Interactiveemails = loadable(() => import('../interactiveemails'))
const Website = loadable(() => import('../../Pages/Websites'))


export default function Pagelinks() { 

    return (

    <nav className="nav-container">
    <Route path="/websites" >
        <Website />
    </Route>
    <Route path="/applications" component={Applications} />
    <Route path="/interactiveemails" component={Interactiveemails} />
    <Route path="/playground" component={Playground}  />
       
        <section className="nav-home">
            <Link className="Websites" data-page="/websites" to="/websites" >
            <p className="intronav">Websites</p></Link> 
            <Link to="/applications" className="Applications" data-page="/applications">
            <p className="intronav">Applications</p></Link> 
            <Link to="/interactiveemails" data-page="/interactiveemails" >
            <p className="intronav">Interactive emails</p></Link> 
            <Link to="/playground" className="mobile-shift" data-page="/playground" >
            <p className="intronav">Playground</p><small>*loading times vary</small> </Link>                
        </section>
    </nav>     
   
    )
}
