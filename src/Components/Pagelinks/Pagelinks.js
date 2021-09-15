import React from 'react'
import { Route, Link} from "react-router-dom";
import Applications from '../Applications';
import Interactiveemails from '../interactiveemails';
import Playground from '../Playground';
import Website from '../../Pages/Websites';

export default function Pagelinks() { 

    return (

    <nav className="nav-container">
    <Route path="/websites" >
        <Website />
    </Route>
    <Route path="/applications" component={Apps} />
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


const Apps = () => {
  
    return (
      <div>
        <Applications/>
      </div>
    );
  };