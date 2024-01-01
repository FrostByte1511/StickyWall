const canvas=document.getElementById("canvas");
const canvasWidth=canvas.width=640;
const canvasHeight=canvas.height=480;
const ctx=canvas.getContext("2d");
//Create rectangle
// ctx.fillRect(x,y,width,height);

function animate() {
    // ctx.clearRect(0,0,canvasWidth,canvasHeight)
    let x= Math.random()*canvasWidth*0.95; //100
    let y= Math.random()*canvasHeight*0.95; //120
    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.fillRect(x,y,20,4);
    //COnverting function into infinite loop
    requestAnimationFrame(function(){
        setTimeout(animate,1) //1000ms means 1second.
    });
};
animate();