/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useCallback, useEffect, useRef, useState } from "react";
import "./jack.css"
import AnimateEyes from "./eyes";

import  { isStartedFn  ,isStopped ,MouseMove } from "./StretchJack";
function Jack(){
    
    // eye animation
    let leftEyeBackRef = useRef();
    let leftEyeBallRef= useRef();
    let rightEyeBallRef= useRef();
    // stretch animation 
    let [ isStarted , setIsStarted ] = useState(false);
    let [ StartingPosY , setStartingPosY ] = useState(
      {
        YellowPart:{y:0,h:0},
        LeftBorder:{y:0,h:0},
        RightBorder:{y:0,h:0}}
      ); 
    const YellowPartRef = useRef();
    const SVG_REF = useRef();
    const WholeHeadREF = useRef();
    const RightBorderRef = useRef();
    const LeftBorderRef = useRef();
    
    
    AnimateEyes(  leftEyeBackRef  , leftEyeBallRef  , rightEyeBallRef );

    useEffect(()=>{
    },[])
    
    useEffect(()=>{
      const elements_2be_stretched = [YellowPartRef.current , LeftBorderRef.current ,RightBorderRef.current]
      // to resolve issue of refrence changig before cleanup 
      const SVG_Current = SVG_REF.current;
      // we start animation and get the start point on Y
      //passing elements to be stretched as array for better visualizing as thre is too many params
      const started = ()=>isStartedFn(setIsStarted, elements_2be_stretched ,setStartingPosY);
      const moving = (event)=>  MouseMove(event, isStarted , StartingPosY , elements_2be_stretched , WholeHeadREF.current );
      const stopped = ()=>isStopped(setIsStarted , elements_2be_stretched , WholeHeadREF.current )
      // adding events
      SVG_Current.addEventListener("mousedown" , started);
      SVG_Current.addEventListener("mousemove" , moving);
      SVG_Current.addEventListener("mouseup" , stopped);
      
      // WHEN MOUSE  UP OUTSIDE SVG WE RESET 
      window.addEventListener("mouseup" , stopped);
      


      return ()=>{ 
        SVG_Current.removeEventListener("mousedown" , started);
        SVG_Current.removeEventListener("mousemove" , moving);
        SVG_Current.removeEventListener("mouseup" , stopped);
        // WHEN MOUSE  UP OUTSIDE SVG WE RESET 
        window.removeEventListener("mouseup" , stopped);

        clearTimeout(stopped)
      
      }
    },[ isStarted ])
    

        

    return (
            
        
        
        <svg 
          
          ref={SVG_REF}
            className="jack"
           viewBox="0 0 600 600"
           version="1.1"
           id="svg1"
           xmlSpace="preserve"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           xmlns="http://www.w3.org/2000/svg"
           ><sodipodi:namedview
             id="namedview1"
             pagecolor="#ffffff"
             bordercolor="#999999"
             borderopacity="1"
             inkscape:showpageshadow="2"
             inkscape:pageopacity="0"
             inkscape:pagecheckerboard="0"
             inkscape:deskcolor="#d1d1d1"
             inkscape:document-units="mm" /><defs
             id="defs1" />
             <g
             id="layer1"
             inkscape:label="layer1"><image
               width="238.125"
               height="305.32916"
               preserveAspectRatio="none"

               id="image1"
               x="-419.0625"
               y="147.33542"
               transform="scale(-1,1)"
               style={{display:"none"}} />
                <g 
               id="lowerbody">

                
                   <path
                 style={{
                            fill: '#ffd415',
                            fillOpacity: 1,
                            stroke: '#000000',
                            strokeWidth: 1.05833,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1,
                            
                          }}
                 d="m 371.79932,272.08554 c 0,0 -0.0757,5.80458 -0.0558,7.88515 0.11577,12.10534 -4.06522,53.76769 -33.49568,64.286 -13.52163,4.83257 -35.05318,8.93971 -46.37917,8.39321 -16.95481,-0.8181 -26.56813,-7.00372 -25.62939,-4.35931 14.23372,40.0962 1.06839,68.16241 1.06839,68.16241 0,0 4.36053,1.62778 7.17656,5.29528 4.31031,5.6136 6.14983,13.71049 -7.81759,10.08931 -23.07691,-5.9829 -9.61538,-26.28204 -9.61538,-26.28204 0,0 10.13372,-38.79871 -13.24787,-71.79487 -5.87646,-8.29289 -6.79379,-16.70121 -8.27127,-24.32961 -1.71308,-8.84487 -2.69157,-16.57209 -3.2055,-21.41477 -0.35592,-3.35371 -0.38219,-5.43083 -0.38219,-5.43083"
                 id="leftleg"
                 inkscape:label="leftleg" />
                 <path
                 style={{
                            fill: '#ffd415',
                            fillOpacity: 1,
                            stroke: '#000000',
                            strokeWidth: 1.05833,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1
                          }}
                 d="m 354.70086,332.90597 c 0,0 12.58868,19.79271 14.3506,40.51432 0.96306,11.32634 -6.26982,28.80704 -4.68338,31.80826 0.66685,1.26156 2.81707,2.88799 5.08537,3.26412 3.74143,0.6204 4.36596,5.78578 4.36596,5.78578 0,0 -0.28922,11.95359 -21.89633,-0.81691 -7.07154,-4.1795 3.09966,-18.20729 3.22712,-25.62597 0.32288,-18.79379 -3.58194,-34.96912 -11.77414,-46.59626"
                 id="rightleg"
                 inkscape:label="rightleg" />
            </g>
               {/* we put refrence on group not yellow rectangulr itself to animate the rect borders also */}
        <g 
                 id="g16"
                 inkscape:label="stretch">

<rect
            
            ref={RightBorderRef}
                  width="1.2"
                   height="45.8"
                   x="371"
                   y="244.75621"
                   id="rightBstretch"
                   inkscape:label="rightBstretch" />
            <rect
            
            ref={LeftBorderRef }
                    width="1.2"
                   height="45"
                   x="231.5"
                   y="244.75621"
                   id="leftBstretch"
                   inkscape:label="leftBstretch" />

            <rect ref={YellowPartRef}
                   id="stretchyellow"
                   width="139"
                   height="50"
                   x="233"
                   y="244.75621"
                   inkscape:label="stretchyellow" />
            
            </g>
               {/* all head elements grouped for moving up and down*/}

               <g ref={WholeHeadREF} >
                    
               

                  <g
               id="head"
               inkscape:label="head">
                <path
                
                
                  style={{
                            fill: '#ffd415',
                            fillOpacity: 1,
                            stroke: '#000000',
                            strokeWidth: 1.05833,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1
                          }}
                 d="m 371.99177,244.94734 c 0,0 -2.19216,-31.33298 -1.76689,-29.87432 0.94457,3.23991 0.58403,9.68864 2.40593,9.73316 2.04038,0.0499 6.18556,-4.6291 2.47375,-18.27979 -5.74251,-21.11883 -26.3604,-67.17207 -96.04474,-48.83409 -17.15688,4.51497 -25.64442,13.4376 -31.91297,21.47539 -7.48519,9.59779 -11.07855,18.84384 -12.52271,30.27672 -1.18552,9.38531 -2.2946,16.42897 -2.39367,21.73982 -0.23696,12.70257 -0.4997,15.11103 -0.4997,15.11103"
                 id="headyellow"
                 inkscape:label="headyellow" />
                 {/* eye tracking elements group*/}
            <g
                 id="g12">
                    <ellipse
                    ref={leftEyeBackRef}
                    
                 className="eyeBack stretch"
                  style={{
                            fill: '#000000',
                            fillOpacity: 1,
                            stroke: '#000000',
                            strokeWidth: 1.12963,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1
                          }}
                   id="leftEyeb"
                   cx="280.1282"
                   cy="199.46581"
                   rx="22.613924"
                   ry="21.86606"
                   inkscape:label="leftEyeb" />
                   <ellipse
                   ref={leftEyeBallRef}
                   className="eye stretch"
                   style={{
                            fill: '#FFFF',
                            fillOpacity: 1,
                            stroke: 'none', // Setting stroke to none
                            strokeWidth: 0.857616,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1,
                          }}
                   id="leftbrow"
                   cx="279.97195"
                   cy="198.59526"
                   rx="17.422764"
                   ry="16.358463"
                   inkscape:label="leftbrow" />
                   </g>
                   <g
                 id="rightEye"
                 inkscape:label="rightEye">
                 <ellipse
                 className="eyeBack stretch"
                   style={{
                            fill: '#000000',
                            fillOpacity: 1,
                            stroke: '#000000',
                            strokeWidth: 1.12963,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1
                          }}
                   id="rightEyeb"
                   cx="344.14221"
                   cy="199.38551"
                   rx="22.613924"
                   ry="21.86606"
                   inkscape:label="rightEyeb" />
                   <ellipse
                   ref={rightEyeBallRef}
                   className="eye righteyeball stretch"
                   style={{
                            fill: '#FFFF',
                            fillOpacity: 1,
                            stroke: 'none', // Setting stroke to none
                            strokeWidth: 0.857616,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeDasharray: 'none',
                            strokeOpacity: 1
                          }}
                   id="rightbrow"
                   cx="345.44904"
                   cy="198.35143"
                   rx="17.422764"
                   ry="16.358463"
                   inkscape:label="rightbrow" >
                   <animate
          attributeName="rx"
          begin="3s;op.end+3s"
          values="17.422764;0;17.422764"
          keyTimes="0;0.5;1"
          dur="3s"
          
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          begin="3s;op.end+3s"
          values="16.358463;0;16.358463"
          keyTimes="0;0.5;1"
          dur="3s"
           
          repeatCount="indefinite"
        />
                   </ellipse>
                   </g>
                   <g
                 id="g13">
                 <path
                 
                   style={{
                                fill: '#ffd415',
                                fillOpacity: 1,
                                stroke: '#000000',
                                strokeWidth: 1.05833,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeDasharray: 'none',
                                strokeOpacity: 1
                              }}
                   d="m 339.19972,229.05424 c 0,0 -3.19514,-31.2594 -29.8821,-30.51463 -20.85931,0.58213 -27.63838,17.36452 -27.22277,30.66573 0.46098,14.75359 8.72835,14.05308 13.13352,10.93198 3.12384,-2.21327 3.63001,-5.64379 3.63001,-5.64379 l 3.77727,-18.13095 c 0,0 -4.68381,-6.19473 1.96419,-8.76328 6.64803,-2.56856 14.86953,-0.90655 15.77607,4.23055 0.90655,5.1371 -2.72723,4.83492 -2.72723,4.83492 0,0 1.90919,4.23055 1.75809,8.31001 -0.15108,4.07946 1.96419,14.50476 9.21657,14.05148 7.25237,-0.45327 10.4253,-3.47509 10.57638,-9.97202 z"
                   id="yellownose"
                   inkscape:label="yellownose" />
                   <path
                   
                   style={{
                                fill: '#000000',
                                fillOpacity: 1,
                                stroke: '#000000',
                                strokeWidth: 1.05833,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeDasharray: 'none',
                                strokeOpacity: 1
                              }}
                   d="m 309.34829,218.42949 c 0,0 -5.76924,-0.80129 -6.62392,-2.40385 -0.85471,-1.60257 -4.59404,-5.87607 2.67094,-8.49359 7.26495,-2.61752 13.08759,1.33547 13.08759,1.33547 0,0 4.38033,6.41027 -1.76282,8.06624 -0.88958,0.2398 -1.0885,0.54835 -1.78316,0.71798 -4.10247,1.00179 -5.58863,0.77775 -5.58863,0.77775 z"
                   id="blacknose"
                   inkscape:label="blacknose" />
                   </g>
                   <path
                   
                 style={{
                                fill: '#ffd415',
                                fillOpacity: 0,
                                stroke: '#000000',
                                strokeWidth: 1.05833,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeDasharray: 'none',
                                strokeOpacity: 1
                              }}
                 d="m 301.60256,226.06837 c 0,0 6.94444,5.55556 16.66666,0.74787"
                 id="mouth"
                 inkscape:label="mouth" /><path
                 
                 style={{
                                fill: '#ffd415',
                                fillOpacity: 1,
                                stroke: '#000000',
                                strokeWidth: 1.05833,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeDasharray: 'none',
                                strokeOpacity: 1
                              }}
                 d="m 239.04914,204.5406 c 0,0 -4.70085,15.49145 3.63248,17.04059 8.33333,1.54915 9.56197,-14.26282 9.56197,-14.26282"
                 id="Lear"
                 inkscape:label="Lear" /></g>

<g
                    id="arms"
                    inkscape:label="arms">
                      
                      <path
                      
                      style={{
                                  
                                  fill: '#ffd415',
                                  fillOpacity: 1,
                                  stroke: '#000000',
                                  strokeWidth: 1.05833,
                                  strokeLinecap: 'round',
                                  strokeLinejoin: 'round',
                                  strokeDasharray: 'none',
                                  strokeOpacity: 1,
                                  
                                }}
                      d="m 372.21316,241.51927 c 0,0 13.95951,53.78815 -4.53274,82.91129 -0.48817,0.7688 -0.80934,0.48247 -1.1799,0.007 -0.22813,-0.29273 -1.91034,-3.94338 0.87099,-9.6545 0.16013,-0.3288 -2.33724,8.86669 -2.74398,9.27677 -0.6352,0.64041 -1.33231,1.49791 -1.85496,0.85966 -0.24914,-0.30425 -1.28071,-0.66536 -0.91443,-1.88435 2.24248,-7.46299 4.46245,-15.79118 4.46245,-15.79118 0,0 7.78119,-52.35309 5.89257,-65.72466 z"
                      id="rightarm"
                      inkscape:label="rightarm" />
                      <path
                      
                      style={{
                                  fill: '#ffd415',
                                  fillOpacity: 1,
                                  stroke: '#000000',
                                  strokeWidth: 1.05833,
                                  strokeLinecap: 'round',
                                  strokeLinejoin: 'round',
                                  strokeDasharray: 'none',
                                  strokeOpacity: 1,
                                  
                                  
                                }}
                      d="m 244.31446,236.7599 c 0,0 -5.06157,83.4779 2.79518,86.95299 0.33076,0.1463 0.67283,-0.15217 0.96904,-0.39313 0.19761,-0.16076 -1.2294,-9.42583 -1.26154,-9.28411 -0.2601,1.14697 2.40434,10.03287 2.83556,10.26702 0.42942,0.23318 1.03637,0.13312 1.39464,-0.004 0.75026,-0.28746 -2.32383,-13.90182 -0.69465,-9.8922 0.26979,0.66399 1.4562,9.54953 2.28857,9.93565 1.84652,0.85657 2.60843,-0.72352 2.60843,-0.72352 0,0 3.11625,-85.19655 3.0407,-85.64982"
                      id="leftarm"
                      inkscape:label="leftarm" />
                  </g>
                 
               </g>
        
            
            </g>
                 </svg>
        

    )
}


export default Jack;