import React from 'react';
import Applications from "../Applications";
import Interactiveemails from "../interactiveemails";
import Playground from "../Playground";
import Websites from "../Websites";
import Metaverse from "../Metaverse"
import Avatars from "../Avatars"

export default  [
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

        name: "Elixir",
        title: "React based CRM appication",
        component: <Websites/>,
        pathname: "/websites",
        firstBackground: '#E6DADA',
        secondBackground: '#274046'
    },
    {

        name: "HTML",
        title: "Interactive emails",
        component: <Interactiveemails/>,
        pathname: "/interactiveemails",
        firstBackground: '#274046',
        secondBackground: '#E6DADA'
    }
    
]