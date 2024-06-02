
import { Outlet } from "react-router-dom";
import './mainlayout.css'
import { useEffect, useState } from "react";

function MainLayout(){
    
    let [displayed, setDisplayed ] = useState(false)
    
    function handler(){
      setDisplayed((prev)=> !prev)
    }

    useEffect(()=>{
        const nav_ul = document.querySelector(".nav .nav-ul");
        let clientWidth = window.innerWidth;
        window.addEventListener("resize",()=>{
            clientWidth = window.innerWidth; 
            // to make sure ul is displayed after changing from small screens to bigger ones
            //while displayed was false
            
        if(clientWidth > 1250 && !displayed){
            setDisplayed(true)
            nav_ul.style = `opacity: 1;
            pointer-events: all;`
    }

    
        })

        if(clientWidth > 1250){

            setDisplayed(true)
            nav_ul.style = `opacity: 1;
            pointer-events: all;`
            
        }

         else if(displayed && clientWidth <1250){
            nav_ul.style = `opacity: 1;
            pointer-events: all;`
            }
            else{
                nav_ul.style = `opacity: 0;
                pointer-events: all;`
            }


    },[displayed])

   
    return(
        <>
        <nav className="nav ">
            <div className="wrapper">
            <svg

  viewBox="45 44 40 40"
  version="1.1"
  id="svg1"
  data-inkscape-export-filename="BARAA.svg"
  data-inkscape-export-xdpi="96"
  data-inkscape-export-ydpi="96"
  data-inkscape-version="1.3.2 (091e20e, 2023-11-25, custom)"
  data-sodipodi-docname="drawing.svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  xmlns="http://www.w3.org/2000/svg"
>
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#505050"
     inkscape:document-units="px"
     inkscape:zoom="4.1373683"
     inkscape:cx="287.2599"
     inkscape:cy="236.9864"
     inkscape:window-width="1920"
     inkscape:window-height="1017"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />

<defs id="defs1">
    <linearGradient id="linearGradient1">
      <stop
        style={{ stopColor: '#000000', stopOpacity: 1 }}
        offset="0"
        id="stop1"
      />
      <stop
        style={{ stopColor: '#000000', stopOpacity: 0 }}
        offset="1"
        id="stop2"
      />
    </linearGradient>
    <radialGradient
      xlinkHref="#linearGradient1"
      id="radialGradient2"
      cx="116.7437"
      cy="55.789364"
      fx="116.7437"
      fy="55.789364"
      r="63.529682"
      gradientTransform="matrix(2.4656154,0,0,0.25201112,-82.439242,52.058133)"
      gradientUnits="userSpaceOnUse"
    />
    <radialGradient
      xlinkHref="#linearGradient1"
      id="radialGradient2-1"
      cx="116.7437"
      cy="55.789364"
      fx="116.7437"
      fy="55.789364"
      r="63.529682"
      gradientTransform="matrix(3.6575749,0,0,0.25201112,-145.72444,52.078017)"
      gradientUnits="userSpaceOnUse"
    />
  </defs>
  
  <g id="layerM" data-inkscape-label="Layer M">
    <path
      id="text1-7"
      style={{
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '22.5482px',
        fontFamily: 'Poppins',
        fill: '#f2f2f2',
        fillOpacity: 1,
        stroke: 'url(#radialGradient2-1)',
        strokeWidth: 0,
        strokeLinecap: 'round',
        strokeLinejoin: 'bevel',
      }}
      d="m 54.66488,52.047469 0.01034,4.242635 h 3.462837 c 0.86709,0 1.527602,0.195823 1.981792,0.588078 0.474827,0.392255 0.712618,0.960043 0.712618,1.703255 0,0.743212 -0.237791,1.311008 -0.712618,1.703255 -0.45419,0.37161 -1.114702,0.557589 -1.981792,0.557589 h -3.366202 c -0.01527,0.0085 -0.03542,0.01401 -0.06098,0.01447 h -0.0057 c -0.0062,1.55e-4 -0.01242,7.19e-4 -0.0186,10e-4 l 0.0093,3.87935 3.813721,-0.02429 c 0.887727,0 1.579329,0.217069 2.074809,0.650606 0.516117,0.433545 0.774113,1.032416 0.774113,1.796273 0,0.763857 -0.247635,1.351858 -0.743107,1.76475 -0.474835,0.392255 -1.156076,0.588595 -2.043803,0.588595 h -3.863847 l 0.01034,4.281392 4.782654,-0.0078 c 2.270931,-0.0038 4.035947,-0.526862 5.295284,-1.579749 1.279982,-1.073532 1.920296,-2.518392 1.920296,-4.335136 0,-1.259337 -0.382326,-2.374184 -1.146183,-3.344499 -0.763857,-0.990952 -1.775103,-1.620905 -3.03444,-1.88929 1.114822,-0.33032 2.002254,-0.918313 2.662886,-1.76475 0.681285,-0.846437 1.02216,-1.910004 1.02216,-3.189986 0,-1.734164 -0.629953,-3.107015 -1.88929,-4.118612 -1.238692,-1.011597 -2.736436,-1.517219 -4.945435,-1.51722 z m 0.04289,17.465601 v -0.0155 c -0.0021,9.2e-5 -0.0041,-6.5e-5 -0.0062,0 v 0.0155 z m -0.01189,-4.775936 h -0.0021 v 0.02377 c 7.8e-4,6.65e-4 0.0013,0.0014 0.0021,0.0021 z m -0.02067,-8.44703 h -0.0057 v 0.01602 c 0.0019,-1.29e-4 0.0038,6.9e-5 0.0057,0 z"
      data-inkscape-label="M"
    />
  </g>

  <g id="layerB" data-inkscape-groupmode="layer" data-inkscape-label="Layer B">
    <path
      style={{
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '22rem',
        fontFamily: 'Poppins',
        fill: '#f2f2f2',
        fillOpacity: 1,
        stroke: 'url(#radialGradient2)',
        strokeWidth: 0,
        strokeLinecap: 'round',
        strokeLinejoin: 'bevel',
      }}
      d="m 48.8,52.045948 h 3.859166 v 21.71523 l -3.825504,0.02259 z M 48.84347,64.9761 v 4.547205 z m 0,-3.866673 v -4.794673 z"
      id="text1"
      aria-label="B"
      data-sodipodi-nodetypes="ccccccccccc"
      data-inkscape-label="B"
    />
  </g>
</svg>

                <ul className="nav-ul displayed">
                    <li className="nav-li"><a href="#mysec">Home</a></li>
                    <li className="nav-li"><a href="#skills">Skills</a></li>
                    <li id="goContact" className="nav-li"><a href="#contact">Contact</a></li>
                </ul>

                <div onClick={handler} className="collapse-nav">
                    <div className="bars"></div>
                    <div className="bars"></div>
                    <div className="bars"></div>
                </div>
            </div>
        </nav>
        <Outlet/>
        
        </>
        
    )
}


export default MainLayout;