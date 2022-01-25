import React from 'react';
import { useHistory } from "react-router-dom";
import './hook.css'

export default 
function HistoryNav (){

  
      const history = useHistory();

      const interactive = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/interactiveemails');
      }

      const applications = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/applications');
      }
    
      const websites = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/websites');
      }

      const playground = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/playground');
      }

      const metaverse = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/metaverse');
      }
      const avatars = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/avatars');
      }

      const nextProjects = [
        {
            img: 'https://tinyurl.com/y57d5sqz',
            link: applications
        },
        {
            img: 'https://tinyurl.com/yy9hozje',
            link: metaverse
        },
        {
            img: 'https://tinyurl.com/y2jdxymd',
            link: playground
        },
        {
            img: 'https://tinyurl.com/y6eh42p2',
            link: websites
        },
        {
            img: 'https://tinyurl.com/y3f7rbmh',
            link: interactive
        },
        {
            img: 'https://tinyurl.com/y49t2gxa',
            link: avatars
        }
   ]

   const amount = 4
   if (amount === 0) {
    console.log(null)
}

let randomnumbers = new Set(), ans;

while (randomnumbers.size < amount) {
  
    // Generating random number 
    // and adding it
    randomnumbers.add(Math.floor(
        Math.random() * 5) + 1);
}
  
// Copying set elements into 
// the result array
ans = [...randomnumbers];
  
// Printing the array
console.log(ans[0])

const nextprojectLoop = Object.keys(nextProjects).slice(0,2).map((title, i) => {

//TODO fix duplicate array issue

    return (
        <>
            <img key={i} src={nextProjects[ans[i]].img} onClick={nextProjects[ans[i]].link} alt="Websites" /> 
        </>
    )
})
    
      return (
        
       <>
         <h3>More projects</h3>
         <section className="nextProjects">
         
            {nextprojectLoop }
            </section>
        </>
      );
    };