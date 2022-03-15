import React, {useContext, lazy, Suspense} from 'react'
import { Route, Link} from "react-router-dom";
import './page.css';
import svg from './qr'

import { ThemeContext } from '../../App';

const Avatars = lazy(() => import('../Avatars'))
const Metaverse = lazy(() => import('../Metaverse'))
const Threedee = lazy(() => import('../Threedee'))
const Snap = lazy(() => import('../Snap'))
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
        { pathname === '/threedee' ||  pathname === "/applications" || pathname === "/metaverse" || pathname === '/snap' || pathname === '/playground' || pathname === '/avatars' || pathname === '/about'  || pathname === "/contact"  ? <Link className="dpm-link" data-page="/" to="/" >
            <p className="intronav">DPM </p></Link>  : null }
            <Link className="Websites" data-page="/about" to="/about" >
            <p className="intronav">About &gt; </p></Link>
            <a className="Websites"  rel="noreferrer" target="_blank" href="https://medium.com/@DPM.XYZ" >
            <p className="intronav">Publications </p></a> 

           
        </section>
    </nav> 
    
    <section 
    className={ pathname === '/threedee' || pathname === '/applications'  || pathname === '/metaverse' || pathname === '/snap' || pathname === '/playground'  || pathname === '/avatars' || pathname === '/about' || pathname === '/contact' ? null : 'intro' } 
    style={{ display: pathname === '/threedee'  || pathname === '/applications'  || pathname === '/metaverse' || pathname === '/snap' || pathname === '/playground'  || pathname === '/avatars' || pathname === '/about' || pathname === '/contact'   ? "none" : "flex" } }
    >
         <h1 className="projects-dpm"> Dwayne Paisley-Marshall</h1>
         <h1 className="projects-dpm">Creative Techno<br/>logist</h1> 
         <h1 className="projects-dpm">{svg}</h1>
   </section>     
        
   <Suspense fallback={renderLoader()}>
            <Route path="/threedee"  component={Threedee} /> 
            <Route path="/about"  component={About} /> 
            <Route path="/metaverse" component={Metaverse} />
            <Route path="/applications" component={Applications} />
            <Route path="/snap" component={Snap} />
            <Route path="/avatars" component={Avatars}  /> 
            <Route path="/playground" component={Playground}  /> 
       </Suspense> 
    </>
   
    )
}
