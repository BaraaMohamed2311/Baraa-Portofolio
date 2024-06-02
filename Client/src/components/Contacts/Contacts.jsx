import './contact.css'
import { useEffect, useRef, useState } from 'react';
import Jack from '../Jack/Jack';
import {  toast } from "react-toastify";

function Contact(){
    const [form , setForm] = useState({
                
                subj:"",
                text :""
    })

    const [submitting,isSubmitting] = useState(false);

    const [styleState,isStyleState] = useState("null");

    let ContactSectionRef = useRef(null);


     let style = {
        faild:{
            color:"var(--white)",
            backgroundColor:"red"
        },
        success:{
            color:"var(--sec-dark)",
            backgroundColor:"var(--green)"
        }
     }

    const [loading , isloading]=useState("Submit");

      function inputHandler(e){
        setForm(prevData =>{
            return {...prevData , [e.target.name] : e.target.value}; 
        })

    }

    function selectStyle(){
        if(styleState === "null"){
            return null;
        }
        else if(styleState === "submitted"){
            return style.success;
        }

        else if(styleState === "failed"){
            return style.faild;
        }
    }

    function handleFocus(){
    ContactSectionRef.current.style = `opacity:1`
    }
    function handleBlur(){
        ContactSectionRef.current.style = `opacity:0`
        }
    

     function formHandler(e){
        e.preventDefault();
        isSubmitting(true);
        
    }
    useEffect(()=>{
        
        if(submitting){

            isloading("Loading");

            fetch("http://localhost:3000/",{
            method:"POST",
            body:JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            },
            mode:'cors'
        })
        .then((res)=> {return res.json()}) 
        .then(data => 
            { 
            isloading("Submitted");
            isStyleState("submitted");
            toast.success("Email sent successfully!");
            return data;
        }).catch(e => {
            isloading("Try Again");
            isStyleState("failed");
            toast.error("Faild, Please contact through email or LinkedIn");
            console.log("error",e)
        });
            isSubmitting(false);

        }
    },[submitting])


    
    return(
<section id='contact' className="contact" >
    <div className="custom-shape-divider">
        <svg className='shape-divider' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
    <div className='contacts-bg' ref={ContactSectionRef}></div>
            <Jack />
            <div className="socials">
                    <a target="_blank" className='socials-a' rel='noreferrer' href='https://www.linkedin.com/in/baraa-mohamed-4b2034284/'><h4 className='socials-h4'>LinkedIn</h4></a>
                    <a target="_blank" className='socials-a' rel='noreferrer' href='https://github.com/BaraaMohamed2311'><h4 className='socials-h4'>GitHub</h4></a>
                    <a target="_blank" className='socials-a' rel='noreferrer' href='https://leetcode.com/baraamohamed2311/'><h4 className='socials-h4'>Leetcode</h4></a>
                    <a target="_blank" className='socials-a' rel='noreferrer' href='https://www.cloudskillsboost.google/public_profiles/6becfaf3-2a99-4fa2-bae5-5c78c01df900'><h4 className='socials-h4'>Google Profile</h4></a>
            </div>
            <form onSubmit={formHandler} className="form">
            
                <input  onFocus={handleFocus} onBlur={handleBlur}  onChange={inputHandler} type="email"  name="subj"  placeholder='Your Email' required />
                <textarea onFocus={handleFocus} onBlur={handleBlur}  onChange={inputHandler} type="text"  name="text"   />
                <button style={selectStyle()} className='form-btn' disabled = {submitting}>{loading}</button>
            </form>
        </section>
        
    )
}


export default Contact;