import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
// import Website from '../website';
import Slider from '../slider';
import Tree from '../tree';
import Ani from '../ani';
import './menu.css';


export default function Menu() { 
   
    return (
        <Router>
            <div className="nav">
                <nav>
                    <ul>
                        <li className="hide">
                            <Link to="/" data-page="/" >Home</Link>
                        </li>
                        <li className="explore">
                            <Link to="/ani" data-page="/ani">Applications</Link>
                        </li>
                        <li className="explore" >
                            <Link to="/tree" data-page="/tree"  >Interactive emails</Link>
                        </li>
                        <li className="explore" >
                            <Link to="/playground" data-page="/playground" >Experiments </Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/slider">
                        <Slider />
                    </Route>
                    <Route path="/ani">
                        <Ani name="ani" />
                    </Route>
                    <Route path="/tree">
                        <Tree name="tree" />
                    </Route>
                    {/* <Route path="/playground" >
                        <Playground name="playground" />
                    </Route> */}
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}