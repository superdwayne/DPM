import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import Website from '../website';
import Slider from '../slider';
import Tree from '../tree';
import Playground from '../Playground';
import Ani from '../ani';
import './menu.css';


export default function Menu() { 
    const [page, setPage] = useState(window.location.pathname);
    
    

    const handleOnClick = (e) => {
        // const page = window.location.pathname
        // this.setState ({ page: page })
        console.log(e.target.dataset.page)
        setPage(e.target.dataset.page); 
        console.log ('click' )
    };
   
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li className="hide">
                            <Link to="/" data-page="/" >Home</Link>
                        </li>
                        <li className="explore">
                            <Link to="/ani" data-page="/explore" onClick={handleOnClick} >Explore</Link>
                        </li>
                        <li className={ page === "/" ? 'hide' : 'explore' } >
                            <Link to="/playground" data-page="/playground" onClick={handleOnClick} >Playground</Link>
                        </li>
                        <li className={page === "/" ? 'hide' : 'explore' }>
                            <Link to="/slider" data-page="/slider" onClick={handleOnClick}>Slider</Link>
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
                    <Route path="/playground" >
                        <Playground name="playground" />
                    </Route>
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}