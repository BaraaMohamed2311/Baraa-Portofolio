import { useEffect } from "react";

function SlideEvents(ScrollPos) {
    

useEffect(()=>{

    const lists = Array.from(document.querySelectorAll(".skills .list")) ;

    const ListAnimation =  ()=>{
        lists.forEach((list) => {
            
    if( list.id === "Practicing-list" && ScrollPos>= list.offsetTop - list.scrollHeight *2){
        
        list.style = ` animation: slideLeft 1.2s ease forwards,LoadOpacity 1.2s ease forwards;
                -webkit-animation: slideLeft 1.2s ease forwards,LoadOpacity 1.2s ease forwards;`
        }
    if( list.id === "Studying-list" &&  ScrollPos>= list.offsetTop - list.scrollHeight *2){
        list.style = `    animation: slideRight 1.2s ease forwards,LoadOpacity 1.2s ease forwards;
        -webkit-animation: slideRight 1.2s ease forwards,LoadOpacity 1.2s ease forwards;`
        }
            });
       
    
    }

    window.addEventListener("scroll",ListAnimation)

    return ()=>{
        window.removeEventListener("scroll",ListAnimation)
    }

},[ScrollPos])



}


export default SlideEvents;
