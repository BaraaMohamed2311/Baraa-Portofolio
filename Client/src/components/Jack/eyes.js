import { useEffect} from "react";
function AnimateEyes( leftEyeBackRef  , leftEyeBallRef  , rightEyeBallRef){
    
  useEffect(() => {

    function handleMouseMove(e) {
      const leftEyeBack = leftEyeBackRef.current.getBoundingClientRect();
      // distance mouse moved from leftEyeBack
      const mouseX = e.clientX - leftEyeBack.left;
      const mouseY = e.clientY - leftEyeBack.top;
      
      const moveEyeBall = (eyeBallRef, eyeBack) => {
        // we divide by window width to get a ratio & multiply with eyeBack.width to get equavalent distance in eye so eyeball stay inside jack body
        // in another words we cannot just assgn mouseX & mouseY to transform translate as it will make the eyeball move far away from jack so we get a relative values
        const moveX = (mouseX / window.innerWidth) * eyeBack.width; 
        const moveY = (mouseY / window.innerHeight) * eyeBack.height;
        const maxMoveX = eyeBack.width / 4; // boudries so eye ball stay inside jake's eye
        const maxMoveY = eyeBack.height / 4; // boudries so eye ball stay inside jake's eye

        const clampedMoveX = Math.min(maxMoveX, Math.max(-maxMoveX, moveX));
        const clampedMoveY = Math.min(maxMoveY, Math.max(-maxMoveY, moveY));

        eyeBallRef.current.style.transform = `translate(${clampedMoveX}px, ${clampedMoveY}px)`;
      };

      
      const rightEyeBack = leftEyeBack; // Assuming right eye has the same dimensions

      moveEyeBall(leftEyeBallRef, leftEyeBack);
      moveEyeBall(rightEyeBallRef, rightEyeBack);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}


export default AnimateEyes;