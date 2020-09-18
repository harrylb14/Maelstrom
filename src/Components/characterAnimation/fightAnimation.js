import { banditIdle } from './bandit/bandit_idle.js';
import { wizardIdle } from './wizard/wizard_idle.js';

const idleAnimation = () => {
  const canvas = document.getElementById('game-area')
  const context = canvas.getContext('2d')
  const sprites = [banditIdle,wizardIdle];

  function drawFrame(img, frameX, frameY, canvasX, canvasY) {
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      const scale = 1; 
      const scaledWidth = img.width*scale;
      const scaledHeight = img.height*scale;

      context.drawImage(img,
                      (frameX * img.width), (frameY * img.height), img.width, img.height,
                      canvasX+img.xOffset, canvasY+img.yOffset, scaledWidth, scaledHeight);
        
  }
     
  let frameCount = 0
  let animationFrameId
  let currentLoopIndex = 0;
  let numberOfFramesPerCycle = 10; //decrease value to increase speed of animation
  var fpsInterval, startTime, now, then, elapsed;
  (banditIdle && wizardIdle).onload = function () {
  init(10); //initiate animation
  }
 

  function render() {
    frameCount++
    if (frameCount < numberOfFramesPerCycle) {
        window.requestAnimationFrame(render);
        return;
      }
    frameCount = 0;
    context.clearRect(0, 0, canvas.width, canvas.height); //clear animation after each frame

    now = Date.now();
    elapsed = now - then;
    //only draw image if enough time has passed since last frame
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      for(var i = 0; i < sprites.length; i++){
        drawFrame(sprites[i], sprites[i].cycleLoop[currentLoopIndex], 0, 0, 0);
        currentLoopIndex++;
        if (currentLoopIndex >= sprites[i].cycleLoop.length) {
          currentLoopIndex = 0;
        }
      } //iterate through every sprite in sprites array and draw sprites to canvas
    }
    
    window.requestAnimationFrame(render);

  }

  //define framespersecond and begin animation
  function init(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    window.requestAnimationFrame(render); 
    }

  return () => {
      window.cancelAnimationFrame(animationFrameId)
  } 
}

export default idleAnimation;