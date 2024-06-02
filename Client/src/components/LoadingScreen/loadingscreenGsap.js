/* eslint-disable no-undef */

export default function AnimateLoadingScreen(){
    
 // position timeline
const timeline = gsap.timeline({defaults:{ease:'power4.out' , duration:2 }})
    gsap.set('#loadingscreen g',{
    autoAlpha:1
    })


// Using fromTo method for #layerB
timeline.fromTo('#loadingscreen #layerB', {
    yPercent: -200,
    opacity: 0
}, {
    yPercent: 0, 
    opacity: 1, 
    duration: 1 
}, 0);

// Using fromTo method for #layerM
timeline.fromTo('#loadingscreen #layerM', {
    yPercent: 200,
    opacity: 0
}, {
    yPercent: 0, 
    opacity: 1, 
    duration: 1 
}, 0);



// scaleing svg
gsap.fromTo('#loadingscreen svg',{
    scale:0.6,
    
},{
        scale:1.2,
        duration:2
})

// Breathing color timeline
const breath_timeline = gsap.timeline({
        defaults: {ease: 'expoScale', duration: 1, yoyo: true, repeat: -1 ,repeatDelay:1.5,delay:1.8},
});

// Repeating color timeline
breath_timeline.to('#loadingscreen #layerB path', {
        fill: "#ffff",
        duration: 1,
},0);

breath_timeline.to('#loadingscreen #layerM path', {
        fill: "#ffff",
        duration: 1,
}, 0); 



}