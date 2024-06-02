
 function isStartedFn(setIsStarted , [YellowPartCurrent , LeftBorderCurrent ,RightBorderCurrent]  ,setStartingPosY){
  // destructing initial y & height as custom names 
  const {y: YellowPart_y, height: YellowPart_h} = YellowPartCurrent.getBoundingClientRect();
  const {y: LeftBorder_y, height: LeftBorder_h} = LeftBorderCurrent.getBoundingClientRect();
  const {y: RightBorder_y,  height: RightBorder_h} = RightBorderCurrent.getBoundingClientRect();

  setIsStarted(true);
    setStartingPosY(() => {
      return {
        YellowPart:{  y:  YellowPart_y  , h:  YellowPart_h },
        LeftBorder:{  y:  LeftBorder_y  , h:  LeftBorder_h },
        RightBorder:{  y:  RightBorder_y  , h:  RightBorder_h }
      }
    })
  }
 // stretching animation
 function MouseMove(event, isStarted , StartingPosY , [YellowPartCurrent , LeftBorderCurrent ,RightBorderCurrent] , WholeHeadCurrent  ){
  const MouseposY =event.clientY
  const navbarHeight = 104;

    if(isStarted && MouseposY > navbarHeight && MouseposY < StartingPosY.YellowPart.y ){
      //extracting values
      // startig point is used so when mouse moves up the result is - otherwise - so element motion direction is correct
      // 1.2 used to increase speed 
      const allSameSpeed = (MouseposY - StartingPosY.YellowPart.y) * 1.1;  
      const yellowheight = StartingPosY.YellowPart.h;
      const leftBheight = StartingPosY.LeftBorder.h;
      const rightBheight = StartingPosY.RightBorder.h;
      // StartingPosY.h height & StartingPosY.y position  on first render 
      YellowPartCurrent.style = 
      `transform:translateY(${allSameSpeed}px);
        height:${yellowheight +Math.abs(allSameSpeed )}px ;
      ` ;
      // borders of  YellowPartCurrent
      LeftBorderCurrent.style = 
      `transform:translateY(${allSameSpeed}px);
        height:${leftBheight +Math.abs(allSameSpeed)}px ;
      ` ;
      RightBorderCurrent.style = 
      `transform:translateY(${allSameSpeed }px);
        height:${rightBheight +Math.abs(allSameSpeed)}px ;
      ` ;

      
      // 1.2 is used for speed correction & height increasing speed
      WholeHeadCurrent .style = 
      `transform:translateY(${allSameSpeed}px);
      ` ;
    }

  
}

function resetPosition(YellowPartCurrent , LeftBorderCurrent ,RightBorderCurrent, WholeHeadCurrent){
  const cssResetStyle =  `transform:translateY(0px);
  transition:transform 0.6s ease , height 0.6s ease; 
`;
  const Timeout = setTimeout(()=>{
    // reseteing position
  YellowPartCurrent.style = cssResetStyle;

  LeftBorderCurrent.style = cssResetStyle;

  RightBorderCurrent.style = cssResetStyle;
  
  WholeHeadCurrent .style = cssResetStyle;
  },600)
  return Timeout;
}


// stopping animation
 function isStopped(setIsStarted ,  [YellowPartCurrent , LeftBorderCurrent ,RightBorderCurrent] , WholeHeadCurrent ){
    setIsStarted(false);

    return resetPosition(YellowPartCurrent ,LeftBorderCurrent , RightBorderCurrent, WholeHeadCurrent)
    

    
 }

 export { isStartedFn  ,isStopped ,MouseMove }