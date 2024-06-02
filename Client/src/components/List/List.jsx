/* eslint-disable react/prop-types */
import Cards from "../Cards/Cards";
import  SlideEvents from "./list.js"
import { useScrollPosContext} from "../../../Context/ScrollPosContext.jsx";
import "./list.css"
function List({data , className , id , isDark , header,iscert}){
    let cards = data;
    // getting scroll value 
    let {scrollPos} = useScrollPosContext();

    // acrivating slide animation
    SlideEvents(scrollPos);


    return(
        <div className="list-wrapper">
            <h2 id={header} className="skills-section-title">
                {header}
            </h2>
                
            <div className={className} id={id}>
                    {cards.map((card , index)=>{
                        return (
                            <Cards iscert={iscert} key= {index}  imgPath = {card.imgPath}
                             title = {card.title}   link={card.link}/>
                        )
                    })}
                </div>
        </div>
        
    )
}


export default List;