import React from 'react';
import { useHistory } from "react-router-dom";
import './hook.css'

export default 
function HistoryNav (){

  
      const history = useHistory();

      const threedee = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/threedee');
      }

      const applications = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/applications');
      }
    
      const snap = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.push('/snap');
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
            img: 'https://tinyurl.com/yd6ezobw',
            link: applications
        },
        {
            img: 'https://tinyurl.com/yy9hozje',
            link: metaverse
        },
        {
            img: 'https://tinyurl.com/y772mhxv',
            link: playground
        },
        {
            img: 'https://tinyurl.com/ybujj4jg',
            link: snap
        },
        {
            img: 'https://tinyurl.com/y49t2gxa',
            link: avatars
        },
        {
          img: 'https://tinyurl.com/y7nfgov2',
          link: threedee  
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
// console.log(ans[0])

const nextprojectLoop = Object.keys(nextProjects).slice(0,2).map((title, i) => {

    return (
        <>
            <img key={i} src={nextProjects[ans[i]].img} onClick={nextProjects[ans[i]].link} alt="" /> 
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