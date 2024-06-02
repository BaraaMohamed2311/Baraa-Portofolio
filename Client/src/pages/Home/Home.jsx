import { useEffect, useState } from 'react';
import Contact from '../../components/Contacts/Contacts';
import MySec from '../../components/MySec/MySec';
import Skills from '../../components/Skills/Skills.jsx';
import "./home.css"

function Home(){
    let [isDark,setDark] = useState(false);

    async function handlemood(){
        setDark((prev)=>!prev)
    }

    useEffect(()=>{

        isDark ? document.querySelector("body").classList.add("dark-mode") 
        : document.querySelector("body").classList.remove("dark-mode");
        
    },[isDark])
    
    return(
        <>
        
        <MySec />
        <Skills isDark = {isDark}/>
        
        <Contact />
        <button onClick={handlemood} className='darkmood'><ion-icon name="contrast-outline"></ion-icon></button>
        </>
        
    )
}


export default Home;