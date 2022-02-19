import React from 'react';
import Applications from "../Applications";
import Snap from "../Snap";
import Playground from "../Playground";
import Metaverse from "../Metaverse"
import Avatars from "../Avatars"
import Threedee from "../Threedee"

const Data  = [
    {

        name: "Meta",
        component: <Metaverse/>,
        title: "Metavers articles scraper",
        pathname: "/metaverse",
        firstBackground: '#E6DADA',
        secondBackground: '#274046'
    },
    {

        name: "Play",
        title: "React three fiber playground",
        component: <Playground />,
        pathname: "/playground",
        firstBackground: '#274046',
        secondBackground: '#E6DADA'
    },
    {

        name: "Avatars",
        title: "Three.js Avatar loading screens",
        component: <Avatars />,
        pathname: "/avatars",
        firstBackground: '#E6DADA',
        secondBackground: '#274046'
    },
    {

        name: "Yana",
        title: "React booking application",
        component: <Applications/>,
        pathname: "/applications",
        firstBackground: '#274046',
        secondBackground: '#E6DADA'
    },
    {

        name: "3D",
        title: "React based 3D appication",
        component: <Threedee/>,
        pathname: "/threedee",
        firstBackground: '#E6DADA',
        secondBackground: '#274046'
    },
    {

        name: "Snap",
        title: "Interactive emails",
        component: <Snap/>,
        pathname: "/snap",
        firstBackground: '#274046',
        secondBackground: '#E6DADA'
    }
    
]
export default Data;