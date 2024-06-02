import { createContext, useContext , useState , useEffect} from "react";

const ScrollPosContext =  createContext()

const  useScrollPosContext = ()=>{
    return useContext(ScrollPosContext)
}


function ScrollPosContextProvider({children}){
    let [scrollPos , setScrollPos] = useState(0);

    // updating position
    useEffect(()=>{
        const onScrollY = ()=>setScrollPos(window.scrollY);
        window.addEventListener("scroll",onScrollY);
        return ()=>{
            window.removeEventListener("scroll",onScrollY);
        }
    },[scrollPos])


    return (
        <ScrollPosContext.Provider value={{scrollPos , setScrollPos}}>
            {children}
        </ScrollPosContext.Provider>
    )
}

export { useScrollPosContext , ScrollPosContextProvider};