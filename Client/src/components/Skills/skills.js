import { useEffect } from "react";

function Magnet(){
    useEffect(() => {
    
    const magneto_element = document.querySelector(".skills .inner-circle");
    const magneto_text = document.querySelector(".skills .inner-circle h4");

//  start magnetic effect 
let activateMagneto = function(e){

    let rect = magneto_element.getBoundingClientRect();
    magneto_element.classList.remove("leave");
    magneto_text.classList.remove("leave");
    // set reference point of calculation at middle of element
    let dx_center = (e.clientX - rect.left)/rect.width - 0.5;
    let dy_center = (e.clientY - rect.top)/rect.height - 0.5;
    
    // elements speed
    let magElementVelocity = 45;
    let magTextVelocity = 90;
    // translating
    magneto_element.style = `transform:translate(${dx_center*magElementVelocity}%,${dy_center*magElementVelocity}%)`;
    magneto_text.style = `transform:translate(${dx_center*magTextVelocity}%,${dy_center*magTextVelocity}%)`;

}

//  Cancel magnetic effect 
let cancelMagneto = function(){
    magneto_element.classList.add("leave");
    magneto_text.classList.add("leave");
    return setTimeout(()=>{
        magneto_element.style = `transform:translate(${0}%,${0}%);`;
        magneto_text.style = `transform:translate(${0}%,${0}%);`;
    },100)
    
}

    // mouse magnet
    magneto_element.addEventListener("mousemove",activateMagneto);
    magneto_element.addEventListener("mouseleave",cancelMagneto);
    // mobile touch magnet 
    const Activate = (e)=>activateMagneto(e.touches[0])
    magneto_element.addEventListener("touchmove",Activate); // to get clientx and y when touched
    magneto_element.addEventListener("touchend",cancelMagneto);


    //cleanup function
    return ()=>{
    magneto_element.removeEventListener("mousemove",activateMagneto);
    magneto_element.removeEventListener("mouseleave",cancelMagneto);
    magneto_element.removeEventListener("touchmove",Activate); // to get clientx and y when touched
    magneto_element.removeEventListener("touchend",cancelMagneto);
    clearTimeout(cancelMagneto);
    }

    },[])


}


function ActivateH2(ScrollPos){
        /******active header in skills section*******/
            const h2_els = document.querySelectorAll(".skills h2");
            // self invoked for choosing active header
                    (
                        (ScrollPos)=>{
                        h2_els.forEach((h2,indx) => {
                            if(ScrollPos>= h2.offsetTop - h2.scrollHeight * 10){
                                // undefined when index h2 is the first one so no other h2's before it 
                                if(h2_els[indx-1] === undefined && ScrollPos< h2_els[1].offsetTop - h2.scrollHeight * 10){
                                    //first element
                                    h2.classList.add("h2-active");
                                    h2_els[indx+1].classList.remove("h2-active");
                                    
                                }
                                // undefined when index h2 is the end one so no other h2's before it 
                                else if(h2_els[indx+1] === undefined){
                                    //last element
                                    h2.classList.add("h2-active");
                                    h2_els[indx-1].classList.remove("h2-active"); 
                                }
                                // h2 's in the middle
                                else if( ScrollPos< h2_els[indx+1].offsetTop - h2.scrollHeight * 10 && ScrollPos> h2_els[indx-1].offsetTop - h2.scrollHeight * 10 ){
                                    h2_els[indx-1].classList.remove("h2-active"); // remove from previous
                                    h2.classList.add("h2-active");
                                    h2_els[indx+1].classList.remove("h2-active"); 
                                    
                                }
                            }
                            
                        });
                    })(ScrollPos);
            
}




 let Practicing = [
    
    {
        title:'React',
        imgPath:'assets/react.png',
        
    }
    ,{
        title:'Routers',
        imgPath:'assets/router.png',
        
    }
    ,{
        title:'MongoDB',
        imgPath:'assets/mongo.png',
        
    }
     ,
    {
        title:'SQL',
        imgPath:'assets/mysql.png',
    }
    ,{
        title:'Html',
        imgPath:'assets/html.png',
        
    }
    ,{
        title:'CSS',
        imgPath:'assets/css.png',
        
    },
    {
        title:'JWT',
        imgPath:'assets/jwt.png',
        
    },{
        title:"For Api's",
        imgPath:'assets/nodejs.png',
        
    },{
        title:"Jenkins",
        imgPath:'assets/jenkins.png',
        
    },{
        title:'Docker',
        imgPath:'assets/docker.png',
    }
]

let Studying = [
    
    
    {
        title:'Terraform',
        imgPath:'assets/terraform.png',
    },{
        title:'Kubernetes',
        imgPath:'assets/kubernetes.png',
    },
    
    
    {
        title:'Linux',
        imgPath:'assets/linux.png',
    }
    
    
]

let Certificates = [
    {
        link:'https://drive.google.com/file/d/1T2BcPOQyIDhOB8mzgeXZaEwmfN7oTiQ7/view',
        imgPath:'assets/webdev.png',
    },
    {
        link:'https://drive.google.com/file/d/1yDkaDouPW-AeFHXYSDj0MhOezW8NXNVO/view',
        imgPath:'assets/CCNA.png',
    },
    {
        link:'https://www.cloudskillsboost.google/public_profiles/6becfaf3-2a99-4fa2-bae5-5c78c01df900',
        imgPath:'assets/googlecloud.png',
    }
    ,
    {
        link:'https://drive.google.com/drive/u/1/folders/1HCgC_lzKpM1pud47kbUolhjrJpG8fY8W',
        imgPath:'assets/english.png',
    }
    ,
    {
        link:'https://drive.google.com/drive/u/1/folders/1HCgC_lzKpM1pud47kbUolhjrJpG8fY8W',
        imgPath:'assets/jenkins.png',
    }
]

    export  {Practicing , Studying , ActivateH2 , Magnet , Certificates } ;

