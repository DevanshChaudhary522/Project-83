canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var  mouseEvent ="empty";
color="blue";
width=5;
var last_of_X,last_of_Y;
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    current_of_X=e.clientX - canvas.offsetleft;
    current_of_Y=e.clientY - canvas.offsettop;
    

    if (mouseEvent == "mousedown" ) {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo (last_of_X,last_of_Y);
        ctx.lineTo (current_of_X,current_of_Y);
        ctx.stroke();
    }

    last_of_X=current_of_X;
    last_of_Y=current_of_Y;

    
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
   last_of_touchX=e.touches[0].clientX - canvas.offsetleft;
   last_of_touchY=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);

function mytouchmove(e){
    current_of_touchX=e.touches[0].clientX - canvas.offsetleft;
    current_of_touchY=e.touches[0].clientY - canvas.offsettop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo (last_of_touchX,last_of_touchY);
        ctx.lineTo (current_of_touchX,current_of_touchY);
        ctx.stroke();

    last_of_touchX=current_of_touchX;
    last_of_touchY=current_of_touchY;

    
}