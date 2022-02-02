import React, {useContext, lazy, Suspense} from 'react'
import { Route, Link} from "react-router-dom";
import './page.css';
import svg from './qr'

// import Applications from '../Applications'
// import Playground  from '../Playground'
// import Interactiveemails from '../interactiveemails'
// import Website  from '../Websites'
// import Metaverse  from '../Metaverse'
// import Avatars  from '../Avatars'

import { ThemeContext } from '../../App';

const Avatars = lazy(() => import('../Avatars'))
const Metaverse = lazy(() => import('../Metaverse'))
const Websites = lazy(() => import('../Websites'))
const Interactiveemails = lazy(() => import('../interactiveemails'))
const Applications = lazy(() => import('../Applications'))
const Playground = lazy(() => import('../Playground'))
const About = lazy(() => import('../About'))

const renderLoader = () => <p>Loading</p>;

export default function Pagelinks() { 
//    const pathname = useTheme()
const pathname = useContext(ThemeContext)
    return (
        <>
    <nav className="nav-container" >
    
        <section className="nav-home" >
        { pathname === "/applications" || pathname === "/metaverse" || pathname === '/interactiveemails' || pathname === '/websites' || pathname === '/playground' || pathname === '/avatars' || pathname === '/about'  || pathname === "/contact"  ? <Link className="dpm-link" data-page="/" to="/" >
            <p className="intronav">DPM </p></Link>  : null }
            <Link className="Websites" data-page="/about" to="/about" >
            <p className="intronav">About </p></Link> 
            {/* <Link to="/contact" className="Applications" data-page="/contact">
            <p className="intronav">Contact</p></Link>  */}
            {/* <Link to="/applications" className="Applications" data-page="/applications">
            <p className="intronav">Publications</p></Link>  */}
        </section>
    </nav> 
    
    <section className={ pathname === '/applications'  || pathname === '/metaverse' || pathname === '/interactiveemails' || pathname === '/websites' || pathname === '/playground'  || pathname === '/avatars' || pathname === '/about' || pathname === '/contact' ? null : 'intro' } style={{ display: pathname === '/applications'  || pathname === '/metaverse' || pathname === '/interactiveemails' || pathname === '/websites' || pathname === '/playground'  || pathname === '/avatars' || pathname === '/about' || pathname === '/contact'   ? "none" : "flex" } }>
         <h1 className="projects-dpm"> Dwayne Paisley-Marshall</h1>
         <h1 className="projects-dpm">Creative Techno<br/>logist</h1> 
         <h1 className="projects-dpm">{svg}</h1>
   </section>     
        
   <Suspense fallback={renderLoader()}>
            <Route path="/websites"  component={Websites} /> 
            <Route path="/about"  component={About} /> 
            <Route path="/metaverse" component={Metaverse} />
            <Route path="/applications" component={Applications} />
            <Route path="/interactiveemails" component={Interactiveemails} />
            <Route path="/avatars" component={Avatars}  /> 
            <Route path="/playground" component={Playground}  /> 
       </Suspense> 
    </>
   
    )
}
