var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;
    var width= screen.width
    var newwidth= screen.width-70;
    var newheight= screen. height-300;

    if(width<992){
        canvas.width= newwidth;
        canvas.height= newheight;
        document.body.style.overflow="hidden";

    }
    canvas.addEventListener("touchstart", touchstart);
    
    function touchstart(e)
    {
       lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
       lastPositionOfY=e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", touchmove);
    function touchmove(e)
    {   
        lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
        lastPositionOfY=e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
        
        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }
   