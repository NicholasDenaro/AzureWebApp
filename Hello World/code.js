/*
 * 
 */

function init()
{
	document.getElementById("b1").disabled=false;
	clearCanvas(document.getElementById("c1"));
}


function changeText(element)
{
	var body=document.getElementById("hello");
	
	body.innerHTML="Hello World";
	
	element.disabled=true;
}

function mousePos(element,event)
{
	var x=0;
	var y=0;
	/*while(element)
	{
		x+=(element.offsetLeft-element.scrollLeft+element.clientLeft);
		y+=(element.offsetTop-element.scrollTop+element.clientTop);
		element=element.offsetParent;
	}
	x=event.clientX-x;
	y=event.clientY-y;*/
	
	var rect=element.getBoundingClientRect(), root=document.documentElement;
	x=event.pageX-rect.left-root.scrollLeft;
	y=event.pageY-rect.top-root.scrollTop;
	
	var pos={'x':x,'y':y};
	return(pos);
}

function draw(canvas,event)
{
	//clearCanvas(canvas);
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#000000";
	var pos=mousePos(canvas,event);
	ctx.fillRect(parseInt(pos.x),parseInt(pos.y),2,2);
	ctx.stroke();
}

function clearCanvas(canvas)
{
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,canvas.width,canvas.height);
}