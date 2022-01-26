
import './projects.css';
import React, {useContext} from 'react';
import {Link } from "react-router-dom";
import projectsdata from './projectsdata';
import { ThemeContext } from '../../App';

export default function Projects () {
    // const pathname = useTheme()
    const pathname = useContext(ThemeContext)
        const projectLoop = Object.keys(projectsdata).map((title, i) => {

            return (
                <>
                    <Link key={i} style={{backgroundImage: `linear-gradient(to right, ${projectsdata[i].firstBackground}, ${projectsdata[i].secondBackground})`}}
                    className={pathname === '/applications' || pathname === '/metaverse' || pathname === '/interactiveemails' || pathname === '/websites' || pathname === '/playground'  || pathname === '/avatars' || pathname === '/about'  || pathname === '/contact' ? "hide" : "item" } 
                    to={projectsdata[i].pathname}>
                        <section key={i} >
                            <h1>{projectsdata[i].name}</h1>
                            {/* <section className="bottom">
                                <p>{projectsdata[i].title}</p>
                            </section> */}
                        </section>
                    </Link>
                    
                </>
            )
        })
    
        return (
            <>  
            <section className="projects" >
                {projectLoop}
            </section> 
          </>
          
        )
}
